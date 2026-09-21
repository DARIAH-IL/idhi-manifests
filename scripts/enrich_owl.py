import argparse
import sys

from linkml_runtime import SchemaView
from rdflib import Graph, RDFS, URIRef


def native_uri(schemaview, element):
    return schemaview.get_uri(element, expand=True, native=True)


def mapped_uri(schemaview, element):
    return schemaview.get_uri(element, expand=True, native=False)


def slot_alignments(schemaview, own_namespace):
    alignments = {}
    for slot_name, slot in schemaview.all_slots(attributes=True).items():
        if not slot.slot_uri:
            continue
        try:
            native = native_uri(schemaview, slot)
            mapped = mapped_uri(schemaview, slot)
        except (KeyError, ValueError):
            print(f"{slot_name}: cannot resolve URIs, skipped", file=sys.stderr)
            continue
        if not mapped or native == mapped:
            continue
        if mapped.startswith(own_namespace):
            print(f"{slot_name}: {mapped} is IDHI-minted, no external alignment", file=sys.stderr)
            continue
        alignments[slot_name] = (native, mapped)
    return alignments


def enrich(graph, schemaview, own_namespace):
    alignments = slot_alignments(schemaview, own_namespace)
    added = 0
    for slot_name, (native, mapped) in sorted(alignments.items()):
        subject, predicate = URIRef(native), URIRef(mapped)
        if (subject, RDFS.subPropertyOf, predicate) in graph:
            continue
        graph.add((subject, RDFS.subPropertyOf, predicate))
        print(f"{slot_name}: rdfs:subPropertyOf {graph.namespace_manager.normalizeUri(predicate)}", file=sys.stderr)
        added += 1
    print(f"aligned {added} of {len(schemaview.all_slots(attributes=True))} slots to external properties", file=sys.stderr)
    return graph


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--schema", required=True)
    args = parser.parse_args()
    schemaview = SchemaView(args.schema)
    own_namespace = str(schemaview.namespaces()[schemaview.schema.default_prefix])
    graph = Graph()
    graph.parse(data=sys.stdin.read(), format="turtle")
    for prefix, namespace in schemaview.namespaces().items():
        graph.bind(prefix, namespace, replace=False)
    sys.stdout.write(enrich(graph, schemaview, own_namespace).serialize(format="turtle"))


if __name__ == "__main__":
    main()
