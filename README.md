# IDHI Manifests

[Visit the deployed documentation.](https://dariah-il.github.io/idhi-manifests/)

![logo](docs/favicon.png)

`idhi.linkml.yaml` is a [**LinkML schema**](https://linkml.io/): a machine-readable manifest that defines what entities exist in the Israeli Digital Humanities Index, what fields they have, what values those fields may take, and how everything maps to established web ontologies. From this one file we generate [JSON Schema](https://json-schema.org/) and [OWL/RDF](https://www.w3.org/TR/owl2-rdf-based-semantics/) (for linked-data publication).

## The four building blocks

A LinkML schema has four main sections. In order of appearance in [`idhi.linkml.yaml`](/idhi.linkml.yaml):

### 1. `prefixes`

Short aliases for namespace URIs, so we can write `dcterms:description` instead of `http://purl.org/dc/terms/description`. Our own namespace is `idhi: https://idhi.co.il/linkml/`. The other prefixes ([foaf](http://xmlns.com/foaf/spec/), [schema](https://schema.org/), [bibo](https://www.dublincore.org/specifications/bibo/bibo/), [dcat](https://www.w3.org/TR/vocab-dcat-3/), [edm](https://pro.europeana.eu/page/edm-documentation), [cerif](https://eurocris.org/services/main-features-cerif), [skos](https://www.w3.org/TR/skos-reference/), [tadirah](https://vocabs.dariah.eu/tadirah/en/), [coar](https://vocabularies.coar-repositories.org/resource_types/), [spdx](https://spdx.org/licenses/), [ORCID](https://orcid.org/), [ROR](https://ror.org/), [DOI](https://www.doi.org/)) exist so that our classes and fields can *reuse* terms from those vocabularies instead of inventing new ones.

### 2. `classes` — the entities

A **class** is a kind of record: `Person`, `Project`, `Organization`, `Tool`, `Dataset`, `TrainingMaterial`, and so on. Classes can inherit (`is_a`): every entity inherits from the abstract `Entity`, which gives it an `id` (an IDHI URN, see "Identifiers" below), multilingual `description`, a `homepage`, `same_as` links and tags. Named entities other than `Person` use multilingual `name` values; people use multilingual `given_name` and `family_name` values.

Each class carries a `class_uri` mapping it to an existing ontology class — e.g. `Person` *is* `foaf:Person`, `Dataset` *is* `dcat:Dataset`, and `TrainingMaterial` *is* `schema:LearningResource` — so RDF exported from IDHI speaks the same language as the rest of the web.

Two special kinds of classes to know:

- **`LangString`** — a `{language, value}` pair. Localizable human-readable fields, including names, descriptions, addresses and themes, are *lists* of these. This is how one field holds parallel English / Hebrew / Arabic text. Technical or discovery strings such as IDHI URNs, media types, programming languages and tags remain plain strings.
- **Relationship classes** (`ProjectParticipation`, `Affiliation`, `OrganizationProjectRole`, `Authorship`, `FacilityAffiliation`) — see "Reified relationships" below.
- **`Funding`** — an inlined project funding award that names the funding organization and can record its amount.

`IndexContainer` is the *tree root*: a data file is one `IndexContainer` whose lists (`persons:`, `projects:`, ...) hold each big entity exactly once.

`TrainingMaterial` is a top-level entity for tutorials, lessons and other resources intended to teach an action or learning outcome. Its metadata records the didactic form, creators and publisher, learning outcomes, audience, prerequisites, educational level, content languages, access URL, media type, license and issue date. It can reference the tools, services and datasets it teaches, belong to a larger training material, and be linked as an output of a project.

Organizations can opt into synchronization with the [DARIAH SSH Open Marketplace](https://marketplace.sshopencloud.eu/) through `marketplace_sync: true`. This permits downstream synchronization of the organization and entities related to it through IDHI references, such as services and tools; `false` or an omitted value means no synchronization on that organization's authority. The flag controls export behavior and does not assert that the organization owns every related entity.

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

- **Static enums** — small, IDHI-governed lists written out in the schema: organization types, person/organization roles, event types, tool/service types, licenses. Where an external concept exists, `meaning:` points to it ([schema.org](https://schema.org/) for org types, [CRediT](https://credit.niso.org/) for contributor roles, [SPDX](https://spdx.org/licenses/) for licenses).
- **Dynamic enums** — large, externally-governed taxonomies defined as a *query* over a SKOS vocabulary rather than a copied list:
  - `DigitalHumanitiesActivityEnum`: any concept reachable from the seven [TaDiRAH 2.0](https://vocabs.dariah.eu/tadirah/en/) top activities via `skos:narrower` — i.e. the whole taxonomy, always in sync with [DARIAH](https://www.dariah.eu/)'s publication.
  - `PublicationTypeEnum`: any concept from the [COAR Resource Types](https://vocabularies.coar-repositories.org/resource_types/) vocabulary.

  Dynamic enums keep a single source of truth (no hand-copied duplication), but generators can't see through them — so the build **materializes** them into static enums with `scripts/materialize.py` before generating JSON Schema and OWL/RDF. See "Build & tooling" below.

## Identifiers

Every entity's primary `id` is a URN minted by IDHI: `idhi:<class name>:<random short alphanumeric id>`, e.g. `idhi:person:x7k2m9`. The class token is the lowercase snake_case class name. The random segment is 4–12 characters of `[0-9a-z]`, and each class enforces its own token via a per-class `structured_pattern`. Ids are permanent — never reused, never changed. The URNs are plain strings, not URIs: when publishing linked data (including `gen-owl` output of instance data), map them to resolvable URIs (`idhi:person:x7k2m9` → `https://idhi.co.il/id/person/x7k2m9`) at export time.

## Reified relationships (relations with roles)

A plain edge like `Person → Project` can't say *in what capacity* or *when*. So relationships that need a role and dates are modeled as classes of their own — the [CERIF](https://eurocris.org/services/main-features-cerif) "link entity" / [schema.org `Role`](https://schema.org/Role) pattern:

```yaml
persons:
  - id: idhi:person:x7k2m9
    project_participations:
      - participant: idhi:person:x7k2m9   # reference by id
        project: idhi:project:a83bq1    # reference by id
        participation_role: PRINCIPAL_INVESTIGATOR
        start_date: "2022-10-01"              # no end_date = ongoing
```

The five relationship classes and when to use them:

| Class | Connects | Carries |
|---|---|---|
| `ProjectParticipation` | Person ↔ Project | role (PI, developer...), dates |
| `Affiliation` | Person ↔ Organization | position (professor...), dates |
| `OrganizationProjectRole` | Organization ↔ Project | role (funder, host...), dates |
| `Authorship` | Person ↔ Publication | byline order, role |
| `FacilityAffiliation` | Facility ↔ Organization | dates |

One instance per (pair, role): an organization that both funds and hosts a project gets two `OrganizationProjectRole` records.

## Frequently confused pairs

- **`start_date`/`end_date` vs `studied_periods`** — when the project *runs* vs which historical era it *studies*.
- **`location` vs `studied_places`** — where something *is* vs which places the research is *about*.
- **`Tool` vs `Service`** — self-service software vs a human-mediated offering.
- **`TrainingMaterial` vs `Publication` vs `Tool`** — a resource intended to teach vs a scholarly communication vs software that performs the action.
- **`affiliations` vs `project_participations`** — institutional home vs project involvement.
- **`homepage` vs `additional_urls` vs `same_as`** — the entity's own main page vs further pages about it (blog, socials, registry entries) vs records about the same entity in other systems ([Wikidata](https://www.wikidata.org/), [PeriodO](https://perio.do/)...).
- **`emails` vs `contact_email`** — a person's own published addresses vs an entity's contact mailbox (office, team, service desk).
- **`id` vs `orcid`/`ror`/`doi`** — the `id` is always an IDHI-minted URN (`idhi:<class>:<shortid>`); [ORCID](https://orcid.org/), [ROR](https://ror.org/) and [DOI](https://www.doi.org/) are *supplementary* external identifiers in their own slots and are never used as the primary id.

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

Lint + materialize + generate in one go. The script explains each step as it runs; generator failures exit non-zero, so it can be a CI gate.

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

The generator targets read `GEN_INPUT` (default: `build/idhi.materialized.linkml.yaml`, the git-ignored intermediate produced by `make gen-materialize`); pass `GEN_INPUT=idhi.linkml.yaml` to generate from the raw, unmaterialized schema.
Generator outputs land in `gen/`.

Documentation template overrides live in `docs/templates/`.
To add one, copy the corresponding template and any partials it includes from the [LinkML docgen templates](https://github.com/linkml/linkml/tree/main/linkml/generators/docgen) into `docs/templates/`, keeping their original filenames, then edit the copies.

`make sanity` runs the full pipeline (same as `./scripts/sanity.sh`).

The documentation site’s **Source files** page renders the committed `idhi.linkml.yaml` source schema and the committed JSON Schema and OWL/RDF outputs from `gen/` with syntax highlighting. The pages inject those repository files at site-build time, so they always show the committed source rather than copied artifacts.
