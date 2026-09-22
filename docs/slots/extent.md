---
search:
  boost: 5.0
---

# Slot: extent 


_Quantitative measures of the dataset's size or scope, including total bytes and record, item, issue, image or file counts. Use one inlined Extent per measure and omit estimates that are too unreliable to support discovery or comparison._



<div data-search-exclude markdown="1">



URI: [dcterms:extent](http://purl.org/dc/terms/extent)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Extent](../classes/Extent.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:extent](http://purl.org/dc/terms/extent) |

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
| self | dcterms:extent |
| native | idhi:extent |




## LinkML Source

<details>
```yaml
name: extent
description: Quantitative measures of the dataset's size or scope, including total
  bytes and record, item, issue, image or file counts. Use one inlined Extent per
  measure and omit estimates that are too unreliable to support discovery or comparison.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:extent
domain_of:
- Dataset
range: Extent
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>