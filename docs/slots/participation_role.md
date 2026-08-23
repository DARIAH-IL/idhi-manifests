---
search:
  boost: 5.0
---

# Slot: participation_role 


_The person's function within the project team. Use PRINCIPAL_INVESTIGATOR only for the formally designated PI(s); DH_LEAD for digital method and architecture, TECHNICAL_LEAD for ownership of software engineering, DEVELOPER for implementation, CONSULTANT for bounded external professional work, RESEARCHER for scholarly research, STUDENT for enrolled students, ADVISOR for mentorship, and CONTRIBUTOR only when none of the specific values fits._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation in a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ProjectRoleEnum](../enums/ProjectRoleEnum.md) |
| Domain Of | [ProjectParticipation](../classes/ProjectParticipation.md) |
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
| native | idhi:participation_role |




## LinkML Source

<details>
```yaml
name: participation_role
description: The person's function within the project team. Use PRINCIPAL_INVESTIGATOR
  only for the formally designated PI(s); DH_LEAD for digital method and architecture,
  TECHNICAL_LEAD for ownership of software engineering, DEVELOPER for implementation,
  CONSULTANT for bounded external professional work, RESEARCHER for scholarly research,
  STUDENT for enrolled students, ADVISOR for mentorship, and CONTRIBUTOR only when
  none of the specific values fits.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- ProjectParticipation
range: ProjectRoleEnum

```
</details></div>