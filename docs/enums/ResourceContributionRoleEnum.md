---
search:
  boost: 2.0
---

# Enum: ResourceContributionRoleEnum 




_Roles for named contributions to tools and datasets. Use the most specific responsibility and record separate contributions when one agent holds multiple materially different roles._



<div data-search-exclude markdown="1">

URI: [idhi:enum/ResourceContributionRoleEnum](https://idhi_placeholder/linkml/enum/ResourceContributionRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| CREATOR | [dcterms:creator](http://purl.org/dc/terms/creator) | <span title="Originates the resource as a whole; use DEVELOPER for software implementation and DATA_CURATOR for stewardship of dataset contents.">Originates the resource as a whole; use DEVELOPER for software implementation...</span> |
| DEVELOPER | [https://credit.niso.org/contributor-roles/software/](https://credit.niso.org/contributor-roles/software/) | <span title="Designs or implements software in a Tool; do not use for dataset curation or for project-level participation without a specific resource contribution.">Designs or implements software in a Tool; do not use for dataset curation or ...</span> |
| MAINTAINER | [schema:maintainer](http://schema.org/maintainer) | <span title="Holds ongoing technical or operational responsibility for the resource after its creation; use DEVELOPER for implementation work without continuing maintenance responsibility.">Holds ongoing technical or operational responsibility for the resource after ...</span> |
| DATA_CURATOR | [https://credit.niso.org/contributor-roles/data-curation/](https://credit.niso.org/contributor-roles/data-curation/) | <span title="Manages, cleans, annotates, preserves or documents the contents of a Dataset; use CREATOR for originating the resource as a whole.">Manages, cleans, annotates, preserves or documents the contents of a Dataset;...</span> |
| CONTRIBUTOR | [dcterms:contributor](http://purl.org/dc/terms/contributor) | <span title="Makes a named contribution that does not fit creator, developer, maintainer or data curator; use only after the more specific roles have been considered.">Makes a named contribution that does not fit creator, developer, maintainer o...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [resource_contribution_role](../slots/resource_contribution_role.md) | <span title="The contributor's responsibility for the containing Tool or Dataset. Choose the most specific applicable role and create separate relationships when one contributor has materially distinct responsibilities.">The contributor's responsibility for the containing Tool or Dataset</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: ResourceContributionRoleEnum
description: Roles for named contributions to tools and datasets. Use the most specific
  responsibility and record separate contributions when one agent holds multiple materially
  different roles.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  CREATOR:
    text: CREATOR
    description: Originates the resource as a whole; use DEVELOPER for software implementation
      and DATA_CURATOR for stewardship of dataset contents.
    meaning: dcterms:creator
  DEVELOPER:
    text: DEVELOPER
    description: Designs or implements software in a Tool; do not use for dataset
      curation or for project-level participation without a specific resource contribution.
    meaning: https://credit.niso.org/contributor-roles/software/
  MAINTAINER:
    text: MAINTAINER
    description: Holds ongoing technical or operational responsibility for the resource
      after its creation; use DEVELOPER for implementation work without continuing
      maintenance responsibility.
    meaning: schema:maintainer
  DATA_CURATOR:
    text: DATA_CURATOR
    description: Manages, cleans, annotates, preserves or documents the contents of
      a Dataset; use CREATOR for originating the resource as a whole.
    meaning: https://credit.niso.org/contributor-roles/data-curation/
  CONTRIBUTOR:
    text: CONTRIBUTOR
    description: Makes a named contribution that does not fit creator, developer,
      maintainer or data curator; use only after the more specific roles have been
      considered.
    meaning: dcterms:contributor

```
</details>

</div>