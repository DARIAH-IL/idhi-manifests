# AGENTS.md — maintenance guide for AI agents

This repository contains the **LinkML schema for the Israeli Digital Humanities Index (IDHI)**. The single source of truth is `idhi.linkml.yaml`. Everything else (docs, build artifacts, examples) derives from or documents it.

Read `README.md` for domain concepts before making semantic changes.

## Ground rules

- Do not write comments in code. Make the code readable on its own, and log/print what is being done instead of explaining it in comments.
- Do not run any tools (linters, generators, validators, `make` targets, package managers...) unless explicitly requested to.

## File map

| Path | Role | Edit? |
|---|---|---|
| `idhi.linkml.yaml` | THE schema. Single source of truth. | Yes — carefully |
| `README.md` | The single doc source: schema guide, identifier scheme, build & tooling. Must stay in sync with the schema. | Yes, when schema or tooling changes |
| `Makefile` | One target per pipeline step (lint, materialize, generators, validate). | Rarely |
| `scripts/sanity.sh` | Full pipeline; runs the make targets with fallback logic. | Rarely |
| `example/example.yaml` | Golden data file; must always validate. | Yes, extend when adding features |
| `vocab/` | Cached external SKOS dumps (TaDiRAH, COAR), fetched by `scripts/materialize.py` from the `source_url` annotations in the schema. | Only to deliberately update a vocabulary |
| `build/` | Intermediate materialized schema. | NEVER edit by hand; git-ignored |
| `gen/` | Generated artifacts. | NEVER edit by hand |

## Invariants — never violate these

1. **Identifier scheme.** Every entity id is an IDHI URN: `idhi:<class_token>:<[0-9a-z]{4,12}>`. Class tokens are lowercase snake_case class names; ALL Organization subclasses use `organization`. Never change or reuse an existing id. Never allow ORCID/ROR/DOI (or any external identifier) as a primary id — they live only in their dedicated slots or `identifiers`/`same_as`. New entity classes MUST add a `slot_usage` on `id` with the matching `structured_pattern`.
2. **Reuse before invention.** New classes get a `class_uri` and new slots a `slot_uri` from an established vocabulary (dcterms, foaf, schema, bibo, dcat, edm, skos, cerif) whenever a fitting term exists. Only mint an `idhi:` term when nothing fits; say so in the description.
3. **Reified relationships.** Any Person/Organization/Facility relationship that carries a role or dates is a class extending `Relationship` (endpoints + role enum + start/end dates), not a direct slot. Relationship classes have no `id` and are inlined.
4. **Multilingual text.** Every human-readable free-text slot has `range: LangString`, `multivalued: true`, `inlined_as_list: true`. Never add a plain-string display field.
5. **Enum policy.** Large externally-governed taxonomies (TaDiRAH, COAR) are DYNAMIC enums (`reachable_from`/`matches`) — never hand-copy their concepts into the schema. Small IDHI-governed lists are static; give every value a `description` and, where an external concept exists (schema.org, CRediT, SPDX), a `meaning:` URI.
6. **License.** The schema is CC0 (`license:` field in `idhi.linkml.yaml`). Do not change it without an explicit human decision.
7. **Descriptions.** Every class, slot and enum value has a `description` stating not just what it is but WHEN to use it (and when not to).

## Change workflow

For any change to `idhi.linkml.yaml`:

1. Make the edit, respecting the invariants above.
2. If it adds a feature, extend `example/example.yaml` to exercise it.
3. `./scripts/sanity.sh` must pass (lint warnings are tolerated; generator failures are not) — per the ground rules, ask the human to run it rather than running it yourself.
4. The example must validate: `make validate DATA=example/example.yaml` — same rule, ask the human to run it.
5. Update `README.md` if the change affects anything it describes (new class/slot semantics, id scheme, enum policy, confused pairs, build workflow).

**Versioning policy (semver-ish; NOT enforced while the schema is a draft — don't bump `version:` or keep a changelog yet):**
- PATCH (0.3.x): descriptions, comments, metadata, doc-only fixes.
- MINOR (0.x.0): backwards-compatible additions — new optional slots, classes, enum values.
- MAJOR (x.0.0): anything that can invalidate existing data — renaming or removing slots/classes/enum values, tightening required/patterns, changing the id scheme.

## Common tasks

- **Add an enum value** (static enums only): add under `permissible_values` with `description` (+ `meaning:` if an external concept exists).
- **Add a slot to a class**: define in global `slots:` with `slot_uri`, `range`, `description`; reference it from the class's `slots:` list. New slots are optional (not `required`) unless a human says otherwise.
- **Add an entity class**: `is_a: NamedThing` (or `Agent`), `class_uri` from an established vocabulary, `slot_usage` id pattern with the new class token, an `IndexContainer` list attribute, an example instance, and a README mention.
- **Update a pinned vocabulary**: delete its cached file in `vocab/` so it is re-fetched, have `./scripts/sanity.sh` re-run, diff `build/idhi.materialized.linkml.yaml` against the previous run, and report removed concepts (they may orphan existing data — that is a MAJOR concern, escalate to a human).

## Pitfalls

- Do not edit anything in `build/` or `gen/` — regenerate them.
- Do not "fix" the shared `end_date` slot by duplicating it per class unless the linker/generators actually fail; it is shared by design.
- Do not add `id_prefixes` (ORCID/ROR/DOI) back onto classes — that was removed deliberately when the URN scheme was introduced (v0.3.0).
- Do not convert dynamic enums to static in `idhi.linkml.yaml` — materialization happens only in `build/` via `scripts/materialize.py`.
- `begin_date` on TimePeriod is a string ON PURPOSE (historical/EDTF dates); do not "correct" it to `date`.
- Generated artifacts (JSON Schema, TypeScript) must come from the MATERIALIZED schema, not the raw one, or TaDiRAH/COAR constraints silently vanish.

## Escalate to a human when

- A change would be MAJOR under the versioning policy (post-draft only; while drafting, breaking changes are routine).
- An external vocabulary update removes concepts that existing data may use.
- A requested change conflicts with an invariant above.
- Licensing, governance, or the id scheme itself is in question.
