---
search:
  boost: 5.0
---

# Slot: training_material_type 


_The material's primary didactic form. Choose the single value that best describes how learners engage with it, not its file format._



<div data-search-exclude markdown="1">



URI: [schema:learningResourceType](http://schema.org/learningResourceType)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [TrainingMaterialTypeEnum](../enums/TrainingMaterialTypeEnum.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:learningResourceType](http://schema.org/learningResourceType) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:learningResourceType |
| native | idhi:training_material_type |




## LinkML Source

<details>
```yaml
name: training_material_type
description: The material's primary didactic form. Choose the single value that best
  describes how learners engage with it, not its file format.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:learningResourceType
domain_of:
- TrainingMaterial
range: TrainingMaterialTypeEnum

```
</details></div>