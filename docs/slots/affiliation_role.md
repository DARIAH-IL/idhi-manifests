---
search:
  boost: 5.0
---

# Slot: affiliation_role 


_The person's role or status in the organization, not their role in a project. Prefer the most specific applicable value, use EMPLOYEE or MEMBER only when no finer role fits, and create separate Affiliation instances when materially distinct roles coexist or apply during different dates._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's formal relationship with an organization, nested in a Person so th... |  no  |






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


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:roleName |
| native | idhi:affiliation_role |




## LinkML Source

<details>
```yaml
name: affiliation_role
description: The person's role or status in the organization, not their role in a
  project. Prefer the most specific applicable value, use EMPLOYEE or MEMBER only
  when no finer role fits, and create separate Affiliation instances when materially
  distinct roles coexist or apply during different dates.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- Affiliation
range: PersonOrgRoleEnum

```
</details></div>