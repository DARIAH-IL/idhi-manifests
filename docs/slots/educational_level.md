---
search:
  boost: 5.0
---

# Slot: educational_level 


_Expected learner level, as multilingual text such as beginner, intermediate or graduate. Use target_audiences for who the material serves rather than their proficiency._



<div data-search-exclude markdown="1">



URI: [schema:educationalLevel](http://schema.org/educationalLevel)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:educationalLevel](http://schema.org/educationalLevel) |

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
| self | schema:educationalLevel |
| native | idhi:educational_level |




## LinkML Source

<details>
```yaml
name: educational_level
description: Expected learner level, as multilingual text such as beginner, intermediate
  or graduate. Use target_audiences for who the material serves rather than their
  proficiency.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:educationalLevel
domain_of:
- TrainingMaterial
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>