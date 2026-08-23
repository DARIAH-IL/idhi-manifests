---
search:
  boost: 5.0
---

# Slot: facility_affiliations 


_The organizations hosting or owning the containing facility, as reified FacilityAffiliation objects with a required relationship role and optional dates. Reference each organization and infer the facility from its containing record; define separate relationships if different organizations host and own the facility._



<div data-search-exclude markdown="1">



URI: [idhi:slot/facility_affiliations](https://idhi_placeholder/linkml/slot/facility_affiliations)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [FacilityAffiliation](../classes/FacilityAffiliation.md) |
| Domain Of | [Facility](../classes/Facility.md) |

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
| self | idhi:facility_affiliations |
| native | idhi:facility_affiliations |




## LinkML Source

<details>
```yaml
name: facility_affiliations
description: The organizations hosting or owning the containing facility, as reified
  FacilityAffiliation objects with a required relationship role and optional dates.
  Reference each organization and infer the facility from its containing record; define
  separate relationships if different organizations host and own the facility.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Facility
range: FacilityAffiliation
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>