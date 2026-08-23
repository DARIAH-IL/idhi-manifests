---
search:
  boost: 5.0
---

# Slot: byte_size 


_Total size of the described dataset distribution in bytes. Use an exact or documented aggregate byte count and omit it when only an unreliable estimate is available._



<div data-search-exclude markdown="1">



URI: [dcat:byteSize](http://www.w3.org/ns/dcat#byteSize)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Integer](../types/Integer.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcat:byteSize](http://www.w3.org/ns/dcat#byteSize) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcat:byteSize |
| native | idhi:byte_size |




## LinkML Source

<details>
```yaml
name: byte_size
description: Total size of the described dataset distribution in bytes. Use an exact
  or documented aggregate byte count and omit it when only an unreliable estimate
  is available.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcat:byteSize
domain_of:
- Dataset
range: integer

```
</details></div>