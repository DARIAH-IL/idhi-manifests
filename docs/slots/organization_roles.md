---
search:
  boost: 5.0
---

# Slot: organization_roles 


_Organizations engaged in the containing project, as reified OrganizationProjectRole objects carrying a coordinator, partner, data provider, funder or host role. Reference each organization and infer the project from its containing record; use FUNDER only when no distinct award can be represented in funding._



<div data-search-exclude markdown="1">



URI: [idhi:slot/organization_roles](https://idhi_placeholder/linkml/slot/organization_roles)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |
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
| self | idhi:organization_roles |
| native | idhi:organization_roles |




## LinkML Source

<details>
```yaml
name: organization_roles
description: Organizations engaged in the containing project, as reified OrganizationProjectRole
  objects carrying a coordinator, partner, data provider, funder or host role. Reference
  each organization and infer the project from its containing record; use FUNDER only
  when no distinct award can be represented in funding.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Project
range: OrganizationProjectRole
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>