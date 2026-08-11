---
search:
  boost: 5.0
---

# Slot: training_materials 


_All TrainingMaterial records in the index, including tutorials, lessons and other didactic resources._



<div data-search-exclude markdown="1">



URI: [idhi:slot/training_materials](https://idhi_placeholder/linkml/slot/training_materials)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Domain Of | [IndexContainer](../classes/IndexContainer.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |
### Slot Characteristics

| Property | Value |
| --- | --- |
| Owner | [IndexContainer](../classes/IndexContainer.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:training_materials |
| native | idhi:training_materials |




## LinkML Source

<details>
```yaml
name: training_materials
description: All TrainingMaterial records in the index, including tutorials, lessons
  and other didactic resources.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: TrainingMaterial
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>