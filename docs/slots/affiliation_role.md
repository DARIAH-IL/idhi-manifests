---
search:
  boost: 5.0
---

# Slot: affiliation_role 


_The person's position at the organization (their job/status, not their project role). Use EMPLOYEE when no finer value fits; AFFILIATE is for formal association without employment._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's employment/membership at an organization, with a position and date... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [PersonOrgRoleEnum](../enums/PersonOrgRoleEnum.md) |
| Domain Of | [Affiliation](../classes/Affiliation.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:roleName |
| native | idhi:affiliation_role |




## LinkML Source

<details>
```yaml
name: affiliation_role
description: The person's position at the organization (their job/status, not their
  project role). Use EMPLOYEE when no finer value fits; AFFILIATE is for formal association
  without employment.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- Affiliation
range: PersonOrgRoleEnum

```
</details></div>