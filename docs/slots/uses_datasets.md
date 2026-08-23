---
search:
  boost: 5.0
---

# Slot: uses_datasets 


_Existing datasets used as research inputs by the containing project (by IDHI URN). Use for source or reference data consumed by the project, not datasets produced by it, which belong in outputs_datasets._



<div data-search-exclude markdown="1">



URI: [prov:used](http://www.w3.org/ns/prov#used)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [prov:used](http://www.w3.org/ns/prov#used) |

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
| self | prov:used |
| native | idhi:uses_datasets |




## LinkML Source

<details>
```yaml
name: uses_datasets
description: Existing datasets used as research inputs by the containing project (by
  IDHI URN). Use for source or reference data consumed by the project, not datasets
  produced by it, which belong in outputs_datasets.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: prov:used
domain_of:
- Project
range: Dataset
multivalued: true

```
</details></div>