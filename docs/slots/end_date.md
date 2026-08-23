---
search:
  boost: 5.0
---

# Slot: end_date 


_End of the event, project runtime or relationship. Omit for ongoing relationships and open-ended projects._



<div data-search-exclude markdown="1">



URI: [schema:endDate](http://schema.org/endDate)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Relationship](../classes/Relationship.md) | Abstract base for reified, role-bearing relationships |  no  |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation in a project |  no  |
| [Affiliation](../classes/Affiliation.md) | A person's employment or membership at an organization, with a position and d... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement in a project |  no  |
| [Authorship](../classes/Authorship.md) | A person's contribution to a publication, with author order and role |  no  |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Date](../types/Date.md) |
| Domain Of | [Project](../classes/Project.md), [Event](../classes/Event.md), [Relationship](../classes/Relationship.md), [Funding](../classes/Funding.md) |
| Slot URI | [schema:endDate](http://schema.org/endDate) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:endDate |
| native | idhi:end_date |




## LinkML Source

<details>
```yaml
name: end_date
description: End of the event, project runtime or relationship. Omit for ongoing relationships
  and open-ended projects.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:endDate
domain_of:
- Project
- Event
- Relationship
- Funding
range: date

```
</details></div>