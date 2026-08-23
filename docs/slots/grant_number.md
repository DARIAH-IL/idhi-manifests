---
search:
  boost: 5.0
---

# Slot: grant_number 


_Identifier assigned to the grant by its funding organization. Use the funder's exact value and omit it when none is published._



<div data-search-exclude markdown="1">



URI: [frapo:hasGrantNumber](http://purl.org/cerif/frapo/hasGrantNumber)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [frapo:hasGrantNumber](http://purl.org/cerif/frapo/hasGrantNumber) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | frapo:hasGrantNumber |
| native | idhi:grant_number |




## LinkML Source

<details>
```yaml
name: grant_number
description: Identifier assigned to the grant by its funding organization. Use the
  funder's exact value and omit it when none is published.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: frapo:hasGrantNumber
domain_of:
- Funding
range: string

```
</details></div>