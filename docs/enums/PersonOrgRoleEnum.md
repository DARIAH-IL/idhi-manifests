---
search:
  boost: 2.0
---


# Enum: PersonOrgRoleEnum 




_A person's position within an organization (job/status)._



<div data-search-exclude markdown="1">

URI: [idhi:enum/PersonOrgRoleEnum](https://idhi.co.il/linkml/enum/PersonOrgRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| PROFESSOR | None | Faculty member of any professorial rank |
| ASSOCIATE | None | Research associate / postdoc |
| MEMBER | None | Formal member of a center, lab or society |
| MANAGER | None | Administrative or lab manager |
| AFFILIATE | None | Formal association without employment |
| EMPLOYEE | None | Staff fallback when no finer value fits |




## Slots

| Name | Description |
| ---  | --- |
| [affiliation_role](../slots/affiliation_role.md) | The person's position at the organization (their job/status, not their projec... |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi






## LinkML Source

<details>
```yaml
name: PersonOrgRoleEnum
description: A person's position within an organization (job/status).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
permissible_values:
  PROFESSOR:
    text: PROFESSOR
    description: Faculty member of any professorial rank.
  ASSOCIATE:
    text: ASSOCIATE
    description: Research associate / postdoc.
  MEMBER:
    text: MEMBER
    description: Formal member of a center, lab or society.
  MANAGER:
    text: MANAGER
    description: Administrative or lab manager.
  AFFILIATE:
    text: AFFILIATE
    description: Formal association without employment.
  EMPLOYEE:
    text: EMPLOYEE
    description: Staff fallback when no finer value fits.

```
</details>

</div>