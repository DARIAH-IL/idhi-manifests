---
search:
  boost: 5.0
---

# Slot: dataset_type 


_The dataset's primary intellectual or collection form. Use this for discovery categories such as digital edition, corpus or gazetteer; use media_type for its technical serialization._



<div data-search-exclude markdown="1">



URI: [dcterms:type](http://purl.org/dc/terms/type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [DatasetTypeEnum](../enums/DatasetTypeEnum.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:type](http://purl.org/dc/terms/type) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:type |
| native | idhi:dataset_type |




## LinkML Source

<details>
```yaml
name: dataset_type
description: The dataset's primary intellectual or collection form. Use this for discovery
  categories such as digital edition, corpus or gazetteer; use media_type for its
  technical serialization.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:type
domain_of:
- Dataset
range: DatasetTypeEnum

```
</details></div>