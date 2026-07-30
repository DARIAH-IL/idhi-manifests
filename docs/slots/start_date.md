---
search:
  boost: 5.0
---

# Slot: start_date 


_Start of the event or of a relationship's validity (e.g. when a person joined a project or organization)._



<div data-search-exclude markdown="1">



URI: [schema:startDate](http://schema.org/startDate)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Relationship](../classes/Relationship.md) | Abstract base for reified, role-bearing relationships, following the CERIF li... |  no  |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation in a project |  no  |
| [Affiliation](../classes/Affiliation.md) | A person's employment/membership at an organization, with a position and date... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement in a project (CERIF cfProject_OrganisationUnit) |  no  |
| [Authorship](../classes/Authorship.md) | A person's contribution to a publication, with author order and role |  no  |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Date](../types/Date.md) |
| Domain Of | [Event](../classes/Event.md), [Relationship](../classes/Relationship.md) |
| Slot URI | [schema:startDate](http://schema.org/startDate) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:startDate |
| native | idhi:start_date |




## LinkML Source

<details>
```yaml
name: start_date
description: Start of the event or of a relationship's validity (e.g. when a person
  joined a project or organization).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:startDate
domain_of:
- Event
- Relationship
range: date

```
</details></div>