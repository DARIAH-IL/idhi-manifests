---
search:
  boost: 5.0
---

# Slot: facility 


_The facility referenced by a project role (by IDHI URN). Use only in FacilityProjectRole; the containing Project supplies the relationship's other endpoint._



<div data-search-exclude markdown="1">



URI: [idhi:slot/facility](https://idhi_placeholder/linkml/slot/facility)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [FacilityProjectRole](../classes/FacilityProjectRole.md) | A facility's engagement nested in a Project, so the project is inferred from ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Facility](../classes/Facility.md) |
| Domain Of | [FacilityProjectRole](../classes/FacilityProjectRole.md) |

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
description: The facility referenced by a project role (by IDHI URN). Use only in
  FacilityProjectRole; the containing Project supplies the relationship's other endpoint.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- FacilityProjectRole
range: Facility
required: true

```
</details></div>