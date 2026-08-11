---
search:
  boost: 5.0
---

# Slot: in_languages 


_Languages in which the instructional content is available. Record every complete language version; do not include a language used only in captions or examples._



<div data-search-exclude markdown="1">



URI: [dcterms:language](http://purl.org/dc/terms/language)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LanguageEnum](../enums/LanguageEnum.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:language](http://purl.org/dc/terms/language) |

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
| self | dcterms:language |
| native | idhi:in_languages |




## LinkML Source

<details>
```yaml
name: in_languages
description: Languages in which the instructional content is available. Record every
  complete language version; do not include a language used only in captions or examples.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:language
domain_of:
- TrainingMaterial
range: LanguageEnum
multivalued: true

```
</details></div>