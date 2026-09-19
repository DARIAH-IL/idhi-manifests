---
search:
  boost: 5.0
---

# Slot: facility_roles 


_Facilities engaged in the containing project, as reified FacilityProjectRole objects carrying a coordinator, partner, data provider or host role. Reference each facility and infer the project from its containing record._



<div data-search-exclude markdown="1">



URI: [idhi:slot/facility_roles](https://idhi_placeholder/linkml/slot/facility_roles)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [FacilityProjectRole](../classes/FacilityProjectRole.md) |
| Domain Of | [Project](../classes/Project.md) |

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
| self | idhi:facility_roles |
| native | idhi:facility_roles |




## LinkML Source

<details>
```yaml
name: facility_roles
description: Facilities engaged in the containing project, as reified FacilityProjectRole
  objects carrying a coordinator, partner, data provider or host role. Reference each
  facility and infer the project from its containing record.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Project
range: FacilityProjectRole
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>