---
search:
  boost: 5.0
---

# Slot: learning_outcomes 


_Knowledge or skills a learner should gain by completing the material, as multilingual statements. Use one entry per distinct outcome; do not use this for prerequisites._



<div data-search-exclude markdown="1">



URI: [schema:teaches](http://schema.org/teaches)
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
| Slot URI | [schema:teaches](http://schema.org/teaches) |

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
| self | schema:teaches |
| native | idhi:learning_outcomes |




## LinkML Source

<details>
```yaml
name: learning_outcomes
description: Knowledge or skills a learner should gain by completing the material,
  as multilingual statements. Use one entry per distinct outcome; do not use this
  for prerequisites.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:teaches
domain_of:
- TrainingMaterial
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>