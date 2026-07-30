---
search:
  boost: 5.0
---

# Slot: project_participations 


_The person's project involvements, as reified ProjectParticipation objects carrying the role (PI, developer...) and dates._



<div data-search-exclude markdown="1">



URI: [idhi:slot/project_participations](https://idhi.co.il/linkml/slot/project_participations)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ProjectParticipation](../classes/ProjectParticipation.md) |
| Domain Of | [Person](../classes/Person.md), [Project](../classes/Project.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:project_participations |
| native | idhi:project_participations |




## LinkML Source

<details>
```yaml
name: project_participations
description: The person's project involvements, as reified ProjectParticipation objects
  carrying the role (PI, developer...) and dates.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Person
- Project
range: ProjectParticipation
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>