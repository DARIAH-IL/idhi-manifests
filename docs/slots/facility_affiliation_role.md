---
search:
  boost: 5.0
---

# Slot: facility_affiliation_role 


_The organization's relationship to the containing facility. Use HOST when it provides the facility's institutional or operational home and OWNER when it legally or administratively owns the facility; create two relationships when distinct organizations fill those roles._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization, nested in a Facility so the fa... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [FacilityAffiliationRoleEnum](../enums/FacilityAffiliationRoleEnum.md) |
| Domain Of | [FacilityAffiliation](../classes/FacilityAffiliation.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

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
| self | schema:roleName |
| native | idhi:facility_affiliation_role |




## LinkML Source

<details>
```yaml
name: facility_affiliation_role
description: The organization's relationship to the containing facility. Use HOST
  when it provides the facility's institutional or operational home and OWNER when
  it legally or administratively owns the facility; create two relationships when
  distinct organizations fill those roles.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- FacilityAffiliation
range: FacilityAffiliationRoleEnum
required: true

```
</details></div>