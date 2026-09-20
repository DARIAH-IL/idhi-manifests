---
search:
  boost: 2.0
---

# Enum: OrganizationStructureRoleEnum 




_IDHI-governed roles distinguishing the parent organizations of a sub-organization. Use one relationship per parent and role so hosting and ownership are not conflated; leave the role unset for ordinary containment._



<div data-search-exclude markdown="1">

URI: [idhi:enum/OrganizationStructureRoleEnum](https://idhi_placeholder/linkml/enum/OrganizationStructureRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| HOST | None | <span title="The parent provides the sub-organization's institutional or operational home; use OWNER instead when only legal or administrative ownership is asserted. No established controlled concept precisely captures this host role.">The parent provides the sub-organization's institutional or operational home;...</span> |
| OWNER | [schema:owns](http://schema.org/owns) | <span title="The parent legally or administratively owns the sub-organization; use HOST instead when it operates or houses a unit it does not own.">The parent legally or administratively owns the sub-organization; use HOST in...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [organization_structure_role](../slots/organization_structure_role.md) | <span title="The parent's relationship to the containing sub-organization, where the two differ. Use HOST when the parent provides the unit's institutional or operational home and OWNER when it legally or administratively owns it; create one relationship per parent when distinct organizations fill those roles, and omit the role for ordinary containment where host and owner are the same body.">The parent's relationship to the containing sub-organization, where the two d...</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: OrganizationStructureRoleEnum
description: IDHI-governed roles distinguishing the parent organizations of a sub-organization.
  Use one relationship per parent and role so hosting and ownership are not conflated;
  leave the role unset for ordinary containment.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  HOST:
    text: HOST
    description: The parent provides the sub-organization's institutional or operational
      home; use OWNER instead when only legal or administrative ownership is asserted.
      No established controlled concept precisely captures this host role.
  OWNER:
    text: OWNER
    description: The parent legally or administratively owns the sub-organization;
      use HOST instead when it operates or houses a unit it does not own.
    meaning: schema:owns

```
</details>

</div>