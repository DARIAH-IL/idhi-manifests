---
search:
  boost: 5.0
---

# Slot: outputs_datasets 


_Datasets produced or curated by this project (by id)._



<div data-search-exclude markdown="1">



URI: [schema:producer](http://schema.org/producer)
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
| Slot URI | [schema:producer](http://schema.org/producer) |

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
| self | schema:producer |
| native | idhi:outputs_datasets |




## LinkML Source

<details>
```yaml
name: outputs_datasets
description: Datasets produced or curated by this project (by id).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:producer
domain_of:
- Project
range: Dataset
multivalued: true

```
</details></div>