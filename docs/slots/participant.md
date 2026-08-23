---
search:
  boost: 5.0
---

# Slot: participant 


_The person taking part in the containing project (by IDHI URN). Use in Project.project_participations; do not define the relationship on the Person._



<div data-search-exclude markdown="1">



URI: [idhi:slot/participant](https://idhi_placeholder/linkml/slot/participant)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation nested in a Project, so the project is inferred from... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Person](../classes/Person.md) |
| Domain Of | [ProjectParticipation](../classes/ProjectParticipation.md) |

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
| self | idhi:participant |
| native | idhi:participant |




## LinkML Source

<details>
```yaml
name: participant
description: The person taking part in the containing project (by IDHI URN). Use in
  Project.project_participations; do not define the relationship on the Person.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- ProjectParticipation
range: Person
required: true

```
</details></div>