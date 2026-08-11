---
search:
  boost: 5.0
---

# Slot: prerequisites 


_Knowledge, skills, software or prior material learners should have before starting, expressed as multilingual text. Omit when no prerequisites apply._



<div data-search-exclude markdown="1">



URI: [schema:coursePrerequisites](http://schema.org/coursePrerequisites)
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
| Slot URI | [schema:coursePrerequisites](http://schema.org/coursePrerequisites) |

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
| self | schema:coursePrerequisites |
| native | idhi:prerequisites |




## LinkML Source

<details>
```yaml
name: prerequisites
description: Knowledge, skills, software or prior material learners should have before
  starting, expressed as multilingual text. Omit when no prerequisites apply.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:coursePrerequisites
domain_of:
- TrainingMaterial
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>