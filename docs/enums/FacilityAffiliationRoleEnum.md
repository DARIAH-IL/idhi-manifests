---
search:
  boost: 2.0
---

# Enum: FacilityAffiliationRoleEnum 




_IDHI-governed roles distinguishing the organizations connected to a facility. Use one relationship per organization and role so hosting and ownership are not conflated._



<div data-search-exclude markdown="1">

URI: [idhi:enum/FacilityAffiliationRoleEnum](https://idhi_placeholder/linkml/enum/FacilityAffiliationRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| HOST | None | <span title="The organization provides the facility's institutional or operational home; use OWNER instead when only legal or administrative ownership is asserted. No established controlled concept precisely captures this facility-host role.">The organization provides the facility's institutional or operational home; u...</span> |
| OWNER | [schema:owns](http://schema.org/owns) | <span title="The organization legally or administratively owns the facility; use HOST instead when it operates or houses a facility it does not own.">The organization legally or administratively owns the facility; use HOST inst...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [facility_affiliation_role](../slots/facility_affiliation_role.md) | <span title="The organization's relationship to the containing facility. Use HOST when it provides the facility's institutional or operational home and OWNER when it legally or administratively owns the facility; create two relationships when distinct organizations fill those roles.">The organization's relationship to the containing facility</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: FacilityAffiliationRoleEnum
description: IDHI-governed roles distinguishing the organizations connected to a facility.
  Use one relationship per organization and role so hosting and ownership are not
  conflated.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  HOST:
    text: HOST
    description: The organization provides the facility's institutional or operational
      home; use OWNER instead when only legal or administrative ownership is asserted.
      No established controlled concept precisely captures this facility-host role.
  OWNER:
    text: OWNER
    description: The organization legally or administratively owns the facility; use
      HOST instead when it operates or houses a facility it does not own.
    meaning: schema:owns

```
</details>

</div>