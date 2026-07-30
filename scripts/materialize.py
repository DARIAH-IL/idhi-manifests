import argparse
import re
import sys
import urllib.request
from pathlib import Path

import rdflib
from rdflib.namespace import RDF, SKOS
from rdflib.util import guess_format
from ruamel.yaml import YAML

FORMAT_ALIASES = {"n-triples": "nt"}

FORMAT_EXTENSIONS = {"turtle": "ttl", "nt": "nt", "ntriples": "nt", "xml": "rdf", "n3": "n3", "json-ld": "jsonld"}

VOCAB_DIR = Path("vocab")


def annotation(enum_def, tag):
    value = enum_def.get("annotations", {}).get(tag)
    if isinstance(value, dict):
        value = value.get("value")
    return value


def load_graph(enum_name, enum_def, source_ontology):
    url = annotation(enum_def, "source_url")
    if not url:
        sys.exit(f"{enum_name}: dynamic enum needs an annotations.source_url pointing at a fetchable dump of {source_ontology}")
    fmt = annotation(enum_def, "source_format") or guess_format(url.split("?")[0])
    if not fmt:
        sys.exit(f"{enum_name}: cannot infer RDF format from {url}; add an annotations.source_format")
    fmt = FORMAT_ALIASES.get(fmt, fmt)
    slug = re.sub(r"[^0-9A-Za-z]+", "_", re.sub(r"^[a-z]+://", "", source_ontology)).strip("_")
    path = VOCAB_DIR / f"{slug}.{FORMAT_EXTENSIONS.get(fmt, 'rdf')}"
    if not path.exists():
        print(f"{enum_name}: fetching {url} -> {path}", file=sys.stderr)
        VOCAB_DIR.mkdir(parents=True, exist_ok=True)
        request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (idhi-manifests materialize)"})
        with urllib.request.urlopen(request) as response:
            data = response.read()
        path.write_bytes(data)
    else:
        print(f"{enum_name}: using cached {path}", file=sys.stderr)
    graph = rdflib.Graph()
    graph.parse(path, format=fmt)
    return graph


def expand_curie(curie, prefixes):
    if ":" in curie:
        prefix, local = curie.split(":", 1)
        if prefix in prefixes:
            return rdflib.URIRef(prefixes[prefix] + local)
    return rdflib.URIRef(curie)


def contract_uri(uri, prefixes):
    best = None
    for prefix, ns in prefixes.items():
        if str(uri).startswith(ns) and (best is None or len(ns) > len(prefixes[best])):
            best = prefix
    if best is None:
        return str(uri)
    return f"{best}:{str(uri)[len(prefixes[best]):]}"


def lang_value(graph, subject, predicate):
    fallback = None
    for obj in graph.objects(subject, predicate):
        if getattr(obj, "language", None) == "en":
            return str(obj)
        if fallback is None:
            fallback = str(obj)
    return fallback


def reachable_concepts(graph, spec, prefixes):
    seeds = [expand_curie(node, prefixes) for node in spec["source_nodes"]]
    result = set(seeds) if spec.get("include_self") else set()
    frontier = list(seeds)
    while frontier:
        node = frontier.pop()
        children = set(graph.subjects(SKOS.broader, node)) | set(graph.objects(node, SKOS.narrower))
        for child in children:
            if child not in result:
                result.add(child)
                frontier.append(child)
    return result


def matching_concepts(graph, spec):
    pattern = re.compile(spec["identifier_pattern"])
    return {s for s in graph.subjects(RDF.type, SKOS.Concept) if pattern.match(str(s))}


def materialize_enum(enum_name, enum_def, prefixes):
    if "reachable_from" in enum_def:
        spec = enum_def["reachable_from"]
        graph = load_graph(enum_name, enum_def, spec["source_ontology"])
        concepts = reachable_concepts(graph, spec, prefixes)
    elif "matches" in enum_def:
        spec = enum_def["matches"]
        graph = load_graph(enum_name, enum_def, spec["source_ontology"])
        concepts = matching_concepts(graph, spec)
    else:
        sys.exit(f"{enum_name}: enum has neither reachable_from nor matches")
    pvs = {}
    for concept in sorted(concepts):
        curie = contract_uri(concept, prefixes)
        pv = {"text": curie, "meaning": curie}
        title = lang_value(graph, concept, SKOS.prefLabel)
        description = lang_value(graph, concept, SKOS.definition)
        if title:
            pv["title"] = title.replace("\n", " ")
        if description:
            pv["description"] = description.replace("\n", " ")
        pvs[curie] = pv
    return pvs


def dynamic_enum_names(schema):
    return [name for name, enum_def in schema.get("enums", {}).items() if "reachable_from" in enum_def or "matches" in enum_def]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--schema", required=True)
    parser.add_argument("-o", "--output", required=True)
    parser.add_argument("enums", nargs="*")
    args = parser.parse_args()

    yaml = YAML()
    yaml.preserve_quotes = True
    with open(args.schema) as f:
        schema = yaml.load(f)

    prefixes = {p: str(ns) for p, ns in schema.get("prefixes", {}).items()}

    enum_names = args.enums or dynamic_enum_names(schema)
    for enum_name in enum_names:
        if enum_name not in schema.get("enums", {}):
            sys.exit(f"Unknown enum: {enum_name}")
        pvs = materialize_enum(enum_name, schema["enums"][enum_name], prefixes)
        if not pvs:
            sys.exit(f"Expansion of {enum_name} produced no permissible values")
        schema["enums"][enum_name]["permissible_values"] = pvs
        print(f"{enum_name}: {len(pvs)} permissible values", file=sys.stderr)

    with open(args.output, "w", encoding="UTF-8") as f:
        yaml.dump(schema, f)


if __name__ == "__main__":
    main()
