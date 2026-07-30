---
search:
  boost: 5.0
---

# Slot: end_date 


_End of the event, relationship or time period. Omit for ongoing relationships and open-ended periods._



<div data-search-exclude markdown="1">



URI: [schema:endDate](http://schema.org/endDate)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [TimePeriod](../classes/TimePeriod.md) | A time span (EDM TimeSpan) |  no  |
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
| Domain Of | [Event](../classes/Event.md), [TimePeriod](../classes/TimePeriod.md), [Relationship](../classes/Relationship.md) |
| Slot URI | [schema:endDate](http://schema.org/endDate) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:endDate |
| native | idhi:end_date |




## LinkML Source

<details>
```yaml
name: end_date
description: End of the event, relationship or time period. Omit for ongoing relationships
  and open-ended periods.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:endDate
domain_of:
- Event
- TimePeriod
- Relationship
range: date

```
</details></div>