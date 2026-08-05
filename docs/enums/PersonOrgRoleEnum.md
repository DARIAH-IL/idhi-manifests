---
search:
  boost: 2.0
---

# Enum: PersonOrgRoleEnum 




_A person's position within an organization (job/status)._



<div data-search-exclude markdown="1">

URI: [idhi:enum/PersonOrgRoleEnum](https://idhi_placeholder/linkml/enum/PersonOrgRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| PROFESSOR | None | <span title="Faculty member of any professorial rank.">Faculty member of any professorial rank</span> |
| ASSOCIATE | None | <span title="Research associate / postdoc.">Research associate / postdoc</span> |
| MEMBER | None | <span title="Formal member of a center, lab or society.">Formal member of a center, lab or society</span> |
| MANAGER | None | <span title="Administrative or lab manager.">Administrative or lab manager</span> |
| AFFILIATE | None | <span title="Formal association without employment.">Formal association without employment</span> |
| EMPLOYEE | None | <span title="Staff fallback when no finer value fits.">Staff fallback when no finer value fits</span> |




## Slots

| Name | Description |
| ---  | --- |
| [affiliation_role](../slots/affiliation_role.md) | <span title="The person's position at the organization (their job/status, not their project role). Use EMPLOYEE when no finer value fits; AFFILIATE is for formal association without employment.">The person's position at the organization (their job/status, not their projec...</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: PersonOrgRoleEnum
description: A person's position within an organization (job/status).
from_schema: https://idhi_placeholder/linkml/idhi
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