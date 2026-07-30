---
search:
  boost: 5.0
---

# Slot: contact_email 


_A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'._



<div data-search-exclude markdown="1">



URI: [schema:email](http://schema.org/email)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project (schema:SoftwareApp... |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [AcademicInstitution](../classes/AcademicInstitution.md) | A university or college |  no  |
| [GLAMInstitution](../classes/GLAMInstitution.md) | A gallery, library, archive or museum |  no  |
| [ResearchCenter](../classes/ResearchCenter.md) | A research center or institute |  no  |
| [Funder](../classes/Funder.md) | A funding body (foundation, council, government program) |  no  |
| [Company](../classes/Company.md) | A commercial company |  no  |
| [NonProfit](../classes/NonProfit.md) | A non-profit / NGO |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Project](../classes/Project.md), [Tool](../classes/Tool.md), [Service](../classes/Service.md), [Event](../classes/Event.md) |
| Slot URI | [schema:email](http://schema.org/email) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:email |
| native | idhi:contact_email |




## LinkML Source

<details>
```yaml
name: contact_email
description: A published contact address for the entity (office, team or service-desk
  mailbox). For a person's own addresses use 'emails'.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:email
domain_of:
- Organization
- Facility
- Project
- Tool
- Service
- Event
range: string

```
</details></div>