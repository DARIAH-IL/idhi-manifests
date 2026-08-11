---
search:
  boost: 5.0
---

# Slot: target_audiences 


_Intended learner groups, as multilingual labels such as researchers, librarians or students. Use educational_level separately for the expected level of study or expertise._



<div data-search-exclude markdown="1">



URI: [dcterms:audience](http://purl.org/dc/terms/audience)
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
| Slot URI | [dcterms:audience](http://purl.org/dc/terms/audience) |

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
| self | dcterms:audience |
| native | idhi:target_audiences |




## LinkML Source

<details>
```yaml
name: target_audiences
description: Intended learner groups, as multilingual labels such as researchers,
  librarians or students. Use educational_level separately for the expected level
  of study or expertise.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:audience
domain_of:
- TrainingMaterial
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>