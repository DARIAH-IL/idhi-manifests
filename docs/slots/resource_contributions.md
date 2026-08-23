---
search:
  boost: 5.0
---

# Slot: resource_contributions 


_Named contributions to the containing Tool or Dataset, with contributor, role and optional dates. Define each contribution only on the resource; use publisher where supported for the organization formally releasing it and Project.project_participations for work described only at project level._



<div data-search-exclude markdown="1">



URI: [dcterms:contributor](http://purl.org/dc/terms/contributor)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ResourceContribution](../classes/ResourceContribution.md) |
| Domain Of | [Tool](../classes/Tool.md), [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:contributor](http://purl.org/dc/terms/contributor) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:contributor |
| native | idhi:resource_contributions |




## LinkML Source

<details>
```yaml
name: resource_contributions
description: Named contributions to the containing Tool or Dataset, with contributor,
  role and optional dates. Define each contribution only on the resource; use publisher
  where supported for the organization formally releasing it and Project.project_participations
  for work described only at project level.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:contributor
domain_of:
- Tool
- Dataset
range: ResourceContribution
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>