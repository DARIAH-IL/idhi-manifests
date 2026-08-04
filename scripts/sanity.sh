#!/usr/bin/env bash
# =====================================================================
# IDHI schema sanity check.
# Requires: uv sync (once, see README.md)
# =====================================================================
set -uo pipefail
cd "$(dirname "$0")/.."

BUILD="build"
GEN="gen"
MATERIALIZED="$BUILD/idhi.materialized.linkml.yaml"

RED=$'\033[31m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'; RESET=$'\033[0m'
ok()   { echo "${GREEN}✔${RESET} $*"; }
warn() { echo "${YELLOW}⚠${RESET} $*"; }
die()  { echo "${RED}✘${RESET} $*"; exit 1; }

echo "IDHI schema sanity check: lint, materialize dynamic enums, generate artifacts, validate the example."
echo "Lint issues only warn; generator failures are fatal and exit non-zero, so this can be a CI gate."
echo

# --- 1. Lint ----------------------------------------------------------
echo "── linkml lint ──────────────────────────────────────────────────"
echo "Schema style/consistency check (warnings don't fail the build)."
if make lint; then
    ok "lint passed"
else
    warn "lint reported issues (style warnings do not fail the build)"
fi

# --- 2. Generate all artifacts ----------------------------------------
echo "── gen-all (materialize + generators) ───────────────────────────"
echo "Materializes the schema's dynamic enums into $MATERIALIZED"
echo "(downstream generators can't see through dynamic enums; vocab dumps are"
echo "fetched and cached in vocab/, see README.md), then runs all generators."
make gen-all || die "gen-all failed"
ok "materialized dynamic enums -> $MATERIALIZED"
ok "JSON Schema -> $GEN/idhi.schema.json"
ok "OWL/Turtle -> $GEN/idhi.owl.ttl"
ok "Docs -> docs/"

# --- 3. Validate the golden example -----------------------------------
echo "── validate (golden example) ────────────────────────────────────"
echo "Validates the golden example data file against the schema."
make validate DATA="example/example.yaml" || die "validation of example/example.yaml failed"
ok "example/example.yaml validates against the schema"

echo
ok "All sanity checks passed. Artifacts are in $GEN/"
