---
search:
  boost: 5.0
---

# Slot: derived_from 


_Source datasets from which this dataset was re-OCRed, cleaned, transformed, subsetted or otherwise derived. Reference each immediate source by IDHI URN; use datasets only for catalog aggregation rather than provenance._



<div data-search-exclude markdown="1">



URI: [prov:wasDerivedFrom](http://www.w3.org/ns/prov#wasDerivedFrom)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [prov:wasDerivedFrom](http://www.w3.org/ns/prov#wasDerivedFrom) |

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
| self | prov:wasDerivedFrom |
| native | idhi:derived_from |




## LinkML Source

<details>
```yaml
name: derived_from
description: Source datasets from which this dataset was re-OCRed, cleaned, transformed,
  subsetted or otherwise derived. Reference each immediate source by IDHI URN; use
  datasets only for catalog aggregation rather than provenance.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: prov:wasDerivedFrom
domain_of:
- Dataset
range: Dataset
multivalued: true

```
</details></div>