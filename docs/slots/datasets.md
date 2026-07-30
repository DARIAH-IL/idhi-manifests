---
search:
  boost: 5.0
---

# Slot: datasets 


_The datasets this catalog aggregates (by id)._



<div data-search-exclude markdown="1">



URI: [dcat:dataset](http://www.w3.org/ns/dcat#dataset)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Catalog](../classes/Catalog.md) | A digital archive / catalog of resources (DCAT Catalog), i |  no  |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [Catalog](../classes/Catalog.md), [IndexContainer](../classes/IndexContainer.md) |
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
description: The datasets this catalog aggregates (by id).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcat:dataset
domain_of:
- Catalog
- IndexContainer
range: Dataset
multivalued: true

```
</details></div>