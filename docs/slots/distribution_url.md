---
search:
  boost: 5.0
---

# Slot: distribution_url 


_Direct download or access URL for the dataset._



<div data-search-exclude markdown="1">



URI: [dcat:downloadURL](http://www.w3.org/ns/dcat#downloadURL)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcat:downloadURL](http://www.w3.org/ns/dcat#downloadURL) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcat:downloadURL |
| native | idhi:distribution_url |




## LinkML Source

<details>
```yaml
name: distribution_url
description: Direct download or access URL for the dataset.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcat:downloadURL
domain_of:
- Dataset
range: uri

```
</details></div>