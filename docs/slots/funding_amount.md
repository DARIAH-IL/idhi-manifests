---
search:
  boost: 5.0
---

# Slot: funding_amount 


_Amount awarded by the funding organization, if public, in ILS unless noted in the project description. Omit rather than guess._



<div data-search-exclude markdown="1">



URI: [frapo:hasMonetaryValue](http://purl.org/cerif/frapo/hasMonetaryValue)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A funding award for a project, identifying the organization that provides it ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Float](../types/Float.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [frapo:hasMonetaryValue](http://purl.org/cerif/frapo/hasMonetaryValue) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | frapo:hasMonetaryValue |
| native | idhi:funding_amount |




## LinkML Source

<details>
```yaml
name: funding_amount
description: Amount awarded by the funding organization, if public, in ILS unless
  noted in the project description. Omit rather than guess.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: frapo:hasMonetaryValue
domain_of:
- Funding
range: float

```
</details></div>