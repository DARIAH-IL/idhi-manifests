# IDHI Manifests

[Visit the deployed documentation.](https://dariah-il.github.io/idhi-manifests/)

![logo](docs/favicon.png)

`idhi.linkml.yaml` is a [**LinkML schema**](https://linkml.io/): a machine-readable manifest that defines what entities exist in the Israeli Digital Humanities Index, what fields they have, what values those fields may take, and how everything maps to established web ontologies. From this one file we generate [JSON Schema](https://json-schema.org/) and [OWL/RDF](https://www.w3.org/TR/owl2-rdf-based-semantics/) (for linked-data publication).

## The four building blocks

A LinkML schema has four main sections. In order of appearance in [`idhi.linkml.yaml`](/idhi.linkml.yaml):

### 1. `prefixes`

Short aliases for namespace URIs, so we can write `dcterms:description` instead of `http://purl.org/dc/terms/description`. Our own namespace is `idhi: https://idhi.co.il/linkml/`. The other prefixes ([XML Schema](https://www.w3.org/TR/xmlschema11-2/), [foaf](http://xmlns.com/foaf/spec/), [schema](https://schema.org/), [bibo](https://www.dublincore.org/specifications/bibo/bibo/), [dcat](https://www.w3.org/TR/vocab-dcat-3/), [PROV](https://www.w3.org/TR/prov-o/), [edm](https://pro.europeana.eu/page/edm-documentation), [cerif](https://eurocris.org/services/main-features-cerif), [skos](https://www.w3.org/TR/skos-reference/), [tadirah](https://vocabs.dariah.eu/tadirah/en/), [coar](https://vocabularies.coar-repositories.org/resource_types/), [spdx](https://spdx.org/licenses/), [ORCID](https://orcid.org/), [ROR](https://ror.org/), [DOI](https://www.doi.org/)) exist so that our classes and fields can *reuse* terms from those vocabularies instead of inventing new ones.

### 2. `classes` — the entities

A **class** is a kind of record: `Person`, `Project`, `Organization`, `Tool`, `Dataset`, `TrainingMaterial`, and so on. Classes can inherit (`is_a`): every entity inherits from the abstract `Entity`, which gives it an `id` (an IDHI URN, see "Identifiers" below), multilingual `description`, an optional Base64-encoded `image`, a `homepage`, `same_as` links and tags. The image contains raw Base64 text without a data-URI prefix and is intended for one representative image that must travel with the record. Named entities other than `Person` use multilingual `name` values; people use multilingual `given_name` and `family_name` values.

Each class carries a `class_uri` mapping it to an existing ontology class — e.g. `Person` *is* `foaf:Person`, `Dataset` *is* `dcat:Dataset`, and `TrainingMaterial` *is* `schema:LearningResource` — so RDF exported from IDHI speaks the same language as the rest of the web.

Two special kinds of classes to know:

- **`LangString`** — a `{language, value}` pair. Localizable human-readable fields, including names, descriptions, addresses and themes, are *lists* of these. Language accepts syntactically valid BCP-47 tags, so one field can hold parallel English, Hebrew, Arabic, German, Yiddish, Ladino or other localized text. Technical or discovery strings such as IDHI URNs, media types, programming languages and tags remain plain strings.
- **Relationship classes** (`ProjectParticipation`, `Affiliation`, `OrganizationProjectRole`, `Authorship`, `FacilityAffiliation`, `OrganizationStructure`, `EventAgentRole`, `ResourceContribution`) — see "Reified relationships" below.
- **`Funding`** — an inlined project funding award that records its funder, amount and currency, multilingual award and programme names, grant number, award URL and funding dates. Multiple awards from the same funder remain separate entries.

`IndexContainer` is the *tree root*: a data file is one `IndexContainer` whose lists (`persons:`, `projects:`, ...) hold each big entity exactly once.

`TrainingMaterial` is a top-level entity for tutorials, lessons and other resources intended to teach an action or learning outcome. Its metadata records the didactic form, creators and publisher, learning outcomes, audience, prerequisites, educational level, content languages, access URL, media type, license and issue date. It can reference the tools, services and datasets it teaches, belong to a larger training material, and be linked as an output of a project.

`Dataset` covers digital editions, corpora, databases, gazetteers, image collections, annotation sets and metadata catalogs through `dataset_type`. Dataset records can carry a DOI, derivation links, technical extent and byte size, data languages, media types and related publications. `datasets` means catalog aggregation; `derived_from` means provenance, such as source OCR → re-OCRed corpus → cleaned derivative. A digital edition can use its Dataset record as the intellectual object: `homepage` is its web presentation, `distribution_url` and `doi` identify its archived digital form, and `related_publications` links a print counterpart.

Tools and datasets can record named `resource_contributions` with creator, developer, maintainer, data-curator or contributor roles and optional dates. Use these for responsibility for a specific resource; use `Project.project_participations` for work described only at project level and `Dataset.publisher` for the organization formally releasing a dataset.

Projects distinguish inputs from outputs. `uses_tools`, `uses_services` and `uses_datasets` identify resources consumed by the work, while the `outputs_*` slots identify resources produced by it. Do not record the same project-resource connection as both an input and an output unless the project genuinely consumed an existing resource and produced a distinct new version represented by another entity.

`Project.funding_status` records the project's current primary support model, while `funding` preserves its award history. Use `Funding` whenever a distinct grant is known. Use an organization role of `FUNDER` only when the funding relationship is known but no award can be described, and never duplicate the same fact in both places. Host-less projects are valid: independent practitioners remain `Person` records, while `INFORMAL_GROUP` is available only for a named collective that needs its own Organization record.

### 3. `slots` — the fields

A **slot** is a field/attribute/property — LinkML's equivalent of a database column. Unlike most languages, slots are defined once in a global `slots:` section and classes *pick* which ones they use; this lets several classes share one definition (e.g. `end_date` is used by both `Event` and `Project`) and lets each slot carry a `slot_uri` mapping it to an existing RDF property (`description` → `dcterms:description`).

The key properties of a slot:

- **`range`** — the type of value. Either a literal type (`string`, `date`, `float`, `uri`), an **enum** (a fixed value list), or **another class**.
- **Reference vs. inlined** — when the range is a class with an `id`, the value is by default just that id, i.e. a *reference* to a record living elsewhere in the document (`provider: idhi:organization:k3v9p2`). Slots marked `inlined_as_list: true` instead *nest* the objects in place — we do this for `LangString`s and for relationship objects, which have no independent life.
- **`required`**, **`multivalued`**, **`identifier`** — what they sound like.

Rule of thumb in IDHI: **big entities are referenced by id; text values and relationship objects are inlined.**

### 4. `enums` — the controlled vocabularies

An **enum** lists the permitted values of a slot. Each value may carry a `meaning:` URI declaring which external concept it denotes, so local convenience keys stay globally interoperable.

IDHI uses two flavors:

- **Static enums** — small, IDHI-governed lists written out in the schema: organization and dataset types, funding status, person/organization roles, event types, tool/service types, licenses. Where an external concept exists, `meaning:` points to it ([schema.org](https://schema.org/) for org types, [CRediT](https://credit.niso.org/) for contributor roles, [SPDX](https://spdx.org/licenses/) for licenses).
- **Dynamic enums** — large, externally-governed taxonomies defined as a *query* over a SKOS vocabulary rather than a copied list:
  - `DigitalHumanitiesActivityEnum`: any concept reachable from the seven [TaDiRAH 2.0](https://vocabs.dariah.eu/tadirah/en/) top activities via `skos:narrower` — i.e. the whole taxonomy, always in sync with [DARIAH](https://www.dariah.eu/)'s publication.
  - `PublicationTypeEnum`: any concept from the [COAR Resource Types](https://vocabularies.coar-repositories.org/resource_types/) vocabulary.

  Dynamic enums keep a single source of truth (no hand-copied duplication), but generators can't see through them — so the build **materializes** them into static enums with `scripts/materialize.py` before generating JSON Schema and OWL/RDF. See "Build & tooling" below.

## Identifiers

Every entity's primary `id` is a URN minted by IDHI: `idhi:<class name>:<random short alphanumeric id>`, e.g. `idhi:person:x7k2m9`. The class token is the lowercase snake_case class name. The random segment is 4–12 characters of `[0-9a-z]`, and each class enforces its own token via a per-class `structured_pattern`. Ids are permanent — never reused, never changed. The URNs are plain strings, not URIs: when publishing linked data (including `gen-owl` output of instance data), map them to resolvable URIs (`idhi:person:x7k2m9` → `https://idhi.co.il/id/person/x7k2m9`) at export time.

## Reified relationships (relations with roles)

A plain edge like `Person → Project` can't say *in what capacity* or *when*. So relationships that need a role and dates are modeled as classes of their own — the [CERIF](https://eurocris.org/services/main-features-cerif) "link entity" / [schema.org `Role`](https://schema.org/Role) pattern:

```yaml
projects:
  - id: idhi:project:a83bq1
    project_participations:
      - participant: idhi:person:x7k2m9
        participation_role: PRINCIPAL_INVESTIGATOR
        start_date: "2022-10-01"
```

Each relationship has exactly one canonical owner. The containing entity supplies the relationship's main endpoint implicitly, while the opposite endpoint is written as a required IDHI reference. This lets clients create nested relationships before the containing entity has an ID, prevents a relationship from contradicting its container, and avoids duplicate definitions on both endpoints.

Apply these rules to every new relationship:

- Choose the entity on which the relationship naturally belongs as its one canonical owner.
- Inline the relationship only on that owner and never add a reverse copy on the opposite endpoint.
- Omit the owner's ID from the nested object and require the opposite endpoint's IDHI reference.
- Extend `Relationship` when the connection carries a role or validity dates; relationship objects remain inlined and have no ID of their own.
- Derive reverse views in queries, exports or application code instead of storing the same fact twice.

The relationship classes and their canonical owners are:

| Relationship class | Defined once in | Required reference | Carries |
|---|---|---|---|
| `ProjectParticipation` | `Project.project_participations` | `participant` | role (PI, DH lead, technical lead, developer, consultant...), dates |
| `Affiliation` | `Person.affiliations` | `organization` | position (professor...), dates |
| `OrganizationProjectRole` | `Project.organization_roles` | `organization` | role (coordinator, partner, data provider, funder, host), dates |
| `Authorship` | `Publication.authorships` | `author` | byline order, role |
| `FacilityAffiliation` | `Facility.facility_affiliations` | `organization` | host or owner role, dates |
| `OrganizationStructure` | `Organization.organization_structure` | `parent_organization` | dates of formal containment |
| `EventAgentRole` | `Event.event_agent_roles` | `event_agent` | organizer, host, speaker, panelist, participant or sponsor role, dates |
| `ResourceContribution` | `Tool.resource_contributions` or `Dataset.resource_contributions` | `contributor` | creator, developer, maintainer, data-curator or contributor role, dates |

Use one `OrganizationProjectRole` instance per (pair, role). If an organization hosts a project and also provides a known award, record the `HOST` role plus a `Funding` entry; add a `FUNDER` role only when no distinct award can be described.

## Frequently confused pairs

- **`start_date`/`end_date` vs `studied_periods`** — when the project *runs* vs which historical era it *studies*.
- **`location` vs `studied_places`** — where something *is* vs which places the research is *about*.
- **`Tool` vs `Service`** — self-service software vs a human-mediated offering.
- **`TrainingMaterial` vs `Publication` vs `Tool`** — a resource intended to teach vs a scholarly communication vs software that performs the action.
- **`affiliations` vs `project_participations`** — institutional home vs project involvement.
- **`organization_structure` vs `affiliations`/`organization_roles`** — formal containment of one organization within another vs a person's institutional position or an organization's role in a project.
- **`uses_*` vs `outputs_*`** — resources consumed by a project vs resources produced by it.
- **`resource_contributions` vs `project_participations`** — responsibility for a particular tool or dataset vs a person's role in the project as a whole.
- **`homepage` vs `additional_urls` vs `same_as`** — the entity's own main page vs further pages about it (blog, socials, registry entries) vs records about the same entity in other systems ([Wikidata](https://www.wikidata.org/), [PeriodO](https://perio.do/)...).
- **`emails` vs `contact_email`** — a person's own published addresses vs an entity's contact mailbox (office, team, service desk).
- **`id` vs `orcid`/`ror`/`doi`** — the `id` is always an IDHI-minted URN (`idhi:<class>:<shortid>`); [ORCID](https://orcid.org/), [ROR](https://ror.org/) and [DOI](https://www.doi.org/) are *supplementary* external identifiers in their own slots and are never used as the primary id.
- **`datasets` vs `derived_from`** — datasets aggregated by a catalog vs immediate source datasets from which a dataset was transformed.
- **`dataset_type` vs `media_type`** — the intellectual form (`DIGITAL_EDITION`, `CORPUS`, `GAZETTEER`...) vs the technical serialization (`application/tei+xml`, `application/vnd.apache.parquet`...).
- **`funding` vs a `FUNDER` organization role** — a distinct award with available metadata vs a funding relationship for which no distinct award can be described; do not record the same fact in both.

## Build & tooling

All tooling is Python-based and managed with [`uv`](https://docs.astral.sh/uv/) (not pip). Dependencies are declared in [`pyproject.toml`](/pyproject.toml) at the repo root.

### Local prerequisites

Make sure these prerequisites are available before running the project commands:

| Tool | Required for |
|---|---|
| [`uv`](https://docs.astral.sh/uv/getting-started/installation/) | Creating the Python environment and installing and running its dependencies |
| [`make`](https://www.gnu.org/software/make/) | Running the build, generation, documentation and validation targets in the `Makefile` |
| [ImageMagick](https://imagemagick.org/script/download.php) 7 | Running `make gen-favicon`, `make docs-site` or `make docs-serve`; it provides the required `magick` command |

### One-time setup

```bash
# 1. Install uv (if you don't have it)
curl -LsSf https://astral.sh/uv/install.sh | sh        # macOS / Linux
# or: powershell -c "irm https://astral.sh/uv/install.ps1 | iex"   # Windows

# 2. From the repository root, create the environment and install everything
uv sync
```

`uv sync` reads `pyproject.toml`, creates `.venv/`, and installs:

| Package  | Why |
|----------|-----|
| `linkml` | The linter (`linkml lint`) and generators (`gen-json-schema`, `gen-owl`, `gen-docs`) |
| `zensical` | Static documentation site built from the `gen-docs` markdown (see `zensical.toml`) |
| `rdflib` | Parses the pinned SKOS vocabulary dumps; `scripts/materialize.py` uses it to expand the dynamic enums into static ones for the generators |

The Python commands below run inside the managed environment via `uv run`; `make`, Bash and ImageMagick remain system dependencies for the targets that use them.

### Fetching the external vocabularies

Each dynamic enum declares where its vocabulary dump lives, right in the schema, via `annotations` on the enum:

- `source_url` — a fetchable RDF dump of the enum's `source_ontology` (e.g. the Skosmos REST API for TaDiRAH, the `.nt` export for COAR Resource Types)
- `source_format` — the RDF serialization, only needed when it can't be inferred from the URL's file extension

`make gen-materialize` discovers every dynamic enum in the schema (any enum with `reachable_from` or `matches`), downloads any dump that isn't already cached in `vocab/`, and expands the enums from the cached copies. Nothing is hardcoded in the script — adding a new dynamic enum with a `source_url` annotation is all it takes.

Both vocabularies are openly licensed, so committing the cached dumps in `vocab/` to the repository is fine — and recommended: builds become reproducible and offline-friendly, and updating a vocabulary becomes a deliberate *delete the cached file, re-run `make gen-materialize`, `git commit`* — not a silent behavior change.

### The sanity check

```bash
./scripts/sanity.sh
```

Lint + materialize + generate + validate in one go. The script validates every `example/*.yaml` file; generator or validation failures exit non-zero, so it can be a CI gate.

### Running individual commands

Each pipeline step is a `make` target:

```bash
make lint
make gen-materialize
make gen-json-schema
make gen-owl
make gen-docs
make gen-all      # all of the gen-* targets above

# Documentation site (zensical, from the gen-docs markdown):
make docs-site    # build the static site into build/docs-site/ (including source files)
make docs-serve   # live-reload dev server at http://127.0.0.1:8000

# Validate a data file against the schema:
make validate DATA=example/example.yaml
```

`make validate` first materializes TaDiRAH and COAR and validates against `build/idhi.materialized.linkml.yaml`. Do not validate records directly against raw `idhi.linkml.yaml`: LinkML accepts dynamic-enum syntax there but does not enforce the reachable external concepts, so an invented TaDiRAH CURIE can pass. The materialized schema, or JSON Schema generated from it, is the authoritative validation input.

The `example/` directory contains the synthetic golden file plus three real-world records adapted from the issue reports: [Kima](example/kima.yaml) from [issue #1](https://github.com/DARIAH-IL/idhi-manifests/issues/1), [the Sand and Stars digital edition](example/sand-and-stars.yaml) from [issue #2](https://github.com/DARIAH-IL/idhi-manifests/issues/2), and [the improved Hebrew-newspaper OCR corpus](example/hebrew-newspapers-ocr.yaml) from [issue #3](https://github.com/DARIAH-IL/idhi-manifests/issues/3). Validate any one with the same target:

```bash
make validate DATA=example/kima.yaml
make validate DATA=example/sand-and-stars.yaml
make validate DATA=example/hebrew-newspapers-ocr.yaml
```

The generator targets read `GEN_INPUT` (default: `build/idhi.materialized.linkml.yaml`, the git-ignored intermediate produced by `make gen-materialize`); pass `GEN_INPUT=idhi.linkml.yaml` to generate from the raw, unmaterialized schema.
Generator outputs land in `gen/`.

Documentation template overrides live in `docs/templates/`.
To add one, copy the corresponding template and any partials it includes from the [LinkML docgen templates](https://github.com/linkml/linkml/tree/main/linkml/generators/docgen) into `docs/templates/`, keeping their original filenames, then edit the copies.

`make sanity` runs the full pipeline (same as `./scripts/sanity.sh`).

The documentation site’s **Source files** page renders the committed `idhi.linkml.yaml` source schema and the committed JSON Schema and OWL/RDF outputs from `gen/` with syntax highlighting. The pages inject those repository files at site-build time, so they always show the committed source rather than copied artifacts.
