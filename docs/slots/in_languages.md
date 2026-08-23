---
search:
  boost: 5.0
---

# Slot: in_languages 


_Languages substantially represented in a dataset or in which instructional content is available, using BCP-47 tags. For training material, record every complete language version and do not include a language used only in captions or examples; for datasets, record the languages of the data rather than its metadata page._



<div data-search-exclude markdown="1">



URI: [dcterms:language](http://purl.org/dc/terms/language)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:language](http://purl.org/dc/terms/language) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |
### Value Constraints

| Property | Value |
| --- | --- |
| Regex Pattern | `^[A-Za-z]{1,8}(-[A-Za-z0-9]{1,8})*$` |












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
description: Languages substantially represented in a dataset or in which instructional
  content is available, using BCP-47 tags. For training material, record every complete
  language version and do not include a language used only in captions or examples;
  for datasets, record the languages of the data rather than its metadata page.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:language
domain_of:
- Dataset
- TrainingMaterial
range: string
multivalued: true
pattern: ^[A-Za-z]{1,8}(-[A-Za-z0-9]{1,8})*$

```
</details></div>