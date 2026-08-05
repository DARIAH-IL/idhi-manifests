---
search:
  boost: 5.0
---

# Slot: datasets 


_Datasets aggregated by a Dataset that functions as a catalog (by id)._



<div data-search-exclude markdown="1">



URI: [dcat:dataset](http://www.w3.org/ns/dcat#dataset)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [Dataset](../classes/Dataset.md), [IndexContainer](../classes/IndexContainer.md) |
| Slot URI | [dcat:dataset](http://www.w3.org/ns/dcat#dataset) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcat:dataset |
| native | idhi:datasets |




## LinkML Source

<details>
```yaml
name: datasets
description: Datasets aggregated by a Dataset that functions as a catalog (by id).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcat:dataset
domain_of:
- Dataset
- IndexContainer
range: Dataset
multivalued: true

```
</details></div>