---
search:
  boost: 5.0
---

# Slot: media_type 


_Technical media type of the primary dataset distribution or training resource, preferably an IANA media type such as text/html, application/pdf, application/vnd.apache.parquet or video/mp4. Dataset records may list multiple formats; do not use this for an intellectual or didactic form, which belongs in dataset_type or training_material_type._



<div data-search-exclude markdown="1">



URI: [dcterms:format](http://purl.org/dc/terms/format)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  yes  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
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
description: Technical media type of the primary dataset distribution or training
  resource, preferably an IANA media type such as text/html, application/pdf, application/vnd.apache.parquet
  or video/mp4. Dataset records may list multiple formats; do not use this for an
  intellectual or didactic form, which belongs in dataset_type or training_material_type.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:format
domain_of:
- Dataset
- TrainingMaterial
range: string

```
</details></div>