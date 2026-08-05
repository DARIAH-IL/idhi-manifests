---
search:
  boost: 5.0
---

# Slot: project 


_The project side of the relationship (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [idhi:slot/project](https://idhi_placeholder/linkml/slot/project)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation in a project |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement in a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Project](../classes/Project.md) |
| Domain Of | [ProjectParticipation](../classes/ProjectParticipation.md), [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:project |
| native | idhi:project |




## LinkML Source

<details>
```yaml
name: project
description: The project side of the relationship (by IDHI URN).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- ProjectParticipation
- OrganizationProjectRole
range: Project
required: true

```
</details></div>