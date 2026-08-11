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
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Project](../classes/Project.md), [Tool](../classes/Tool.md), [Service](../classes/Service.md), [Event](../classes/Event.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:email](http://schema.org/email) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




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
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:email
domain_of:
- Organization
- Facility
- Project
- Tool
- Service
- Event
- TrainingMaterial
range: string

```
</details></div>