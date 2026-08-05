---
search:
  boost: 5.0
---

# Slot: facility 


_The facility side of the relationship (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [idhi:slot/facility](https://idhi_placeholder/linkml/slot/facility)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Facility](../classes/Facility.md) |
| Domain Of | [FacilityAffiliation](../classes/FacilityAffiliation.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:facility |
| native | idhi:facility |




## LinkML Source

<details>
```yaml
name: facility
description: The facility side of the relationship (by IDHI URN).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- FacilityAffiliation
range: Facility
required: true

```
</details></div>