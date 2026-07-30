# Source files

The schema and its generated outputs are versioned in this repository. Each page renders the exact file contents included in this documentation build.

| File | Format | Purpose                                                      |
| --- | --- |--------------------------------------------------------------|
| [Original LinkML schema](source-files/linkml.md) | YAML | The source of truth LinkML manifest.                         |
| [JSON Schema](source-files/json-schema.md) | JSON | Generated JSON schema for the manifest.                      |
| [TypeScript definitions](source-files/typescript.md) | TypeScript | Typescript types generated from the materialized schema.     |
| [OWL/RDF ontology](source-files/owl.md) | Turtle | Linked-data ontology generated from the materialized schema. |

The generated files are rebuilt from the materialized schema during the project pipeline and committed to Git. They are shown here for inspection; edit `idhi.linkml.yaml`, not a generated file.
