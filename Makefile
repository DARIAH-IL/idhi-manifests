SCHEMA = idhi.linkml.yaml
BUILD = build
GEN = gen
DOCS = docs
MATERIALIZED = $(BUILD)/idhi.materialized.linkml.yaml
GEN_INPUT ?= $(MATERIALIZED)

.PHONY: sanity lint gen-all gen-materialize gen-json-schema gen-owl gen-docs gen-favicon docs-site docs-serve validate

sanity:
	./scripts/sanity.sh

lint:
	uv run linkml lint --config .linkml-lint.yaml $(SCHEMA)

gen-materialize:
	@mkdir -p $(BUILD)
	uv run python scripts/materialize.py -s $(SCHEMA) -o $(MATERIALIZED)

gen-json-schema: gen-materialize
	@mkdir -p $(GEN)
	uv run gen-json-schema $(GEN_INPUT) > $(GEN)/idhi.schema.json

gen-owl: gen-materialize
	@mkdir -p $(GEN)
	uv run gen-owl $(GEN_INPUT) > $(GEN)/idhi.owl.ttl

gen-docs: gen-materialize
	rm -rf $(DOCS)/classes $(DOCS)/slots $(DOCS)/enums $(DOCS)/types $(DOCS)/schemas $(DOCS)/index.md
	uv run gen-doc $(GEN_INPUT) -d $(DOCS) --subfolder-type-separation --example-directory example --hierarchical-class-view --diagram-type mermaid_class_diagram --template-directory $(DOCS)/templates

gen-favicon:
	magick $(DOCS)/logo.png -background white -flatten -gravity center -extent "%[fx:max(w,h)*1.15]x%[fx:max(w,h)*1.15]" -resize 128x128 \( -size 128x128 xc:none -draw "roundrectangle 0,0,127,127,24,24" \) -compose DstIn -composite $(DOCS)/favicon.png

gen-all: gen-materialize gen-json-schema gen-owl gen-docs

docs-site: gen-docs gen-favicon
	uv run zensical build --clean

docs-serve: gen-docs gen-favicon
	uv run zensical serve

validate:
ifndef DATA
	$(error usage: make validate DATA=<data file>)
endif
	uv run linkml validate --schema $(SCHEMA) --target-class IndexContainer $(DATA)
