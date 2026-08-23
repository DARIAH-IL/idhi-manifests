---
search:
  boost: 5.0
---

# Slot: extent 


_Technical extent statements such as record, item, issue, image or file counts. Use one concise statement per measure, include its unit, and use byte_size rather than prose for total bytes._



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
| Range | [String](../types/String.md) |
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
description: Technical extent statements such as record, item, issue, image or file
  counts. Use one concise statement per measure, include its unit, and use byte_size
  rather than prose for total bytes.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:extent
domain_of:
- Dataset
range: string
multivalued: true

```
</details></div>