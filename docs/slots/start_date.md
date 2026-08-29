---
search:
  boost: 5.0
---

# Slot: start_date 


_Start of the event, of the project's runtime, or of a relationship's validity, such as when participation, affiliation, maintenance responsibility or formal containment began._



<div data-search-exclude markdown="1">



URI: [schema:startDate](http://schema.org/startDate)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Relationship](../classes/Relationship.md) | Abstract base for reified relationships that carry their own role or validity... |  no  |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |
| [OrganizationStructure](../classes/OrganizationStructure.md) | Formal containment of the containing Organization within a larger parent orga... |  no  |
| [ProjectParticipation](../classes/ProjectParticipation.md) | A person's participation nested in a Project, so the project is inferred from... |  no  |
| [Affiliation](../classes/Affiliation.md) | A person's employment or membership at an organization, nested in a Person so... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement nested in a Project, so the project is inferred ... |  no  |
| [Authorship](../classes/Authorship.md) | A person's contribution nested in a Publication, so the publication is inferr... |  no  |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization, nested in a Facility so the fa... |  no  |
| [EventAgentRole](../classes/EventAgentRole.md) | A person or organization involved in the containing Event in a defined capaci... |  no  |
| [ResourceContribution](../classes/ResourceContribution.md) | A person or organization contributing to the containing Tool or Dataset in a ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Date](../types/Date.md) |
| Domain Of | [Project](../classes/Project.md), [Event](../classes/Event.md), [Relationship](../classes/Relationship.md), [Funding](../classes/Funding.md) |
| Slot URI | [schema:startDate](http://schema.org/startDate) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:startDate |
| native | idhi:start_date |




## LinkML Source

<details>
```yaml
name: start_date
description: Start of the event, of the project's runtime, or of a relationship's
  validity, such as when participation, affiliation, maintenance responsibility or
  formal containment began.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:startDate
domain_of:
- Project
- Event
- Relationship
- Funding
range: date

```
</details></div>