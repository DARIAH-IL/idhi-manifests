---
search:
  boost: 5.0
---

# Slot: media_type 


_Technical media type of the primary resource, preferably an IANA media type such as text/html, application/pdf or video/mp4. Do not use this for the didactic form; use training_material_type instead._



<div data-search-exclude markdown="1">



URI: [dcterms:format](http://purl.org/dc/terms/format)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:format](http://purl.org/dc/terms/format) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:format |
| native | idhi:media_type |




## LinkML Source

<details>
```yaml
name: media_type
description: Technical media type of the primary resource, preferably an IANA media
  type such as text/html, application/pdf or video/mp4. Do not use this for the didactic
  form; use training_material_type instead.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:format
domain_of:
- TrainingMaterial
range: string

```
</details></div>