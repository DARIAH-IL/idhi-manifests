import argparse
import json
import sys

from linkml_runtime import SchemaView


def term_curie(schemaview, element):
    try:
        return schemaview.get_uri(element, expand=False)
    except Exception:
        return None


def enrich_class(schema_json, schemaview, class_name, class_def, json_def):
    curie = term_curie(schemaview, class_def)
    if curie:
        json_def["x-termUri"] = curie
    properties = json_def.get("properties", {})
    for slot in schemaview.class_induced_slots(class_name):
        prop = properties.get(slot.name.replace(" ", "_"))
        if prop is None:
            continue
        curie = term_curie(schemaview, slot)
        if curie:
            prop["x-termUri"] = curie


def enrich(schema_json, schemaview):
    defs = schema_json.get("$defs", {})
    for class_name, class_def in schemaview.all_classes().items():
        json_def = defs.get(class_name)
        if json_def is not None:
            enrich_class(schema_json, schemaview, class_name, class_def, json_def)
        if class_def.tree_root:
            enrich_class(schema_json, schemaview, class_name, class_def, schema_json)
    for enum_name, enum_def in schemaview.all_enums().items():
        json_def = defs.get(enum_name)
        if json_def is None:
            continue
        meanings = {
            text: pv.meaning
            for text, pv in (enum_def.permissible_values or {}).items()
            if pv.meaning
        }
        if meanings:
            json_def["x-termUris"] = meanings
    return schema_json


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--schema", required=True)
    args = parser.parse_args()
    schemaview = SchemaView(args.schema)
    schema_json = json.load(sys.stdin)
    json.dump(enrich(schema_json, schemaview), sys.stdout, indent=2, ensure_ascii=False)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
