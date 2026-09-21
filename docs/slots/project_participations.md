---
search:
  boost: 5.0
---

# Slot: project_participations 


_People involved in the containing project, as reified ProjectParticipation objects carrying participant, role and dates. Define each participation only here on its Project; do not duplicate it on the Person._



<div data-search-exclude markdown="1">



URI: [schema:participant](http://schema.org/participant)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ProjectParticipation](../classes/ProjectParticipation.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [schema:participant](http://schema.org/participant) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:participant |
| native | idhi:project_participations |




## LinkML Source

<details>
```yaml
name: project_participations
description: People involved in the containing project, as reified ProjectParticipation
  objects carrying participant, role and dates. Define each participation only here
  on its Project; do not duplicate it on the Person.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:participant
domain_of:
- Project
range: ProjectParticipation
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>