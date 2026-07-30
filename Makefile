SCHEMA = idhi.linkml.yaml
BUILD = build
GEN = gen
DOCS = docs
MATERIALIZED = $(BUILD)/idhi.materialized.linkml.yaml
GEN_INPUT ?= $(MATERIALIZED)

.PHONY: sanity lint gen-all gen-materialize gen-json-schema gen-typescript gen-owl gen-docs docs-site docs-serve validate

sanity:
	./scripts/sanity.sh

lint:
	uv run linkml lint --config .linkml-lint.yaml $(SCHEMA)

gen-materialize:
	@mkdir -p $(BUILD)
	uv run python scripts/materialize.py -s $(SCHEMA) -o $(MATERIALIZED)

gen-json-schema:
	@mkdir -p $(GEN)
	uv run gen-json-schema $(GEN_INPUT) > $(GEN)/idhi.schema.json

gen-typescript:
	@mkdir -p $(GEN)
	uv run gen-typescript --gen-type-utils $(GEN_INPUT) > $(GEN)/idhi.ts

gen-owl:
	@mkdir -p $(GEN)
	uv run gen-owl $(GEN_INPUT) > $(GEN)/idhi.owl.ttl

gen-docs:
	uv run gen-doc $(GEN_INPUT) -d $(DOCS) --subfolder-type-separation --example-directory example --hierarchical-class-view --include-top-level-diagram --diagram-type mermaid_class_diagram

gen-all: gen-materialize gen-json-schema gen-typescript gen-owl gen-docs

docs-site: gen-docs
	uv run mkdocs build

docs-serve: gen-docs
	uv run mkdocs serve

validate:
ifndef DATA
	$(error usage: make validate DATA=<data file>)
endif
	uv run linkml validate --schema $(SCHEMA) --target-class IndexContainer $(DATA)
