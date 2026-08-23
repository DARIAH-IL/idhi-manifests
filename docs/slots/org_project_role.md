---
search:
  boost: 5.0
---

# Slot: org_project_role 


_The organization's function in the project: COORDINATOR leads the consortium, PARTNER contributes work, DATA_PROVIDER supplies source data, FUNDER records funding when no distinct award can be described, and HOST provides the institutional home. Create one relationship instance per role, and do not duplicate an award already represented in funding._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement in a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrgProjectRoleEnum](../enums/OrgProjectRoleEnum.md) |
| Domain Of | [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:roleName |
| native | idhi:org_project_role |




## LinkML Source

<details>
```yaml
name: org_project_role
description: 'The organization''s function in the project: COORDINATOR leads the consortium,
  PARTNER contributes work, DATA_PROVIDER supplies source data, FUNDER records funding
  when no distinct award can be described, and HOST provides the institutional home.
  Create one relationship instance per role, and do not duplicate an award already
  represented in funding.'
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- OrganizationProjectRole
range: OrgProjectRoleEnum

```
</details></div>