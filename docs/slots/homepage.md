---
search:
  boost: 5.0
---

# Slot: homepage 


_Public landing page of the entity, if one exists._



<div data-search-exclude markdown="1">



URI: [foaf:homepage](https://xmlns.com/foaf/spec/#term_homepage)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Entity](../classes/Entity.md) | Root class for any identifiable IDHI entity |  no  |
| [Agent](../classes/Agent.md) | A person or an organization |  no  |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Entity](../classes/Entity.md) |
| Slot URI | [foaf:homepage](https://xmlns.com/foaf/spec/#term_homepage) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | foaf:homepage |
| native | idhi:homepage |




## LinkML Source

<details>
```yaml
name: homepage
description: Public landing page of the entity, if one exists.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: foaf:homepage
domain_of:
- Entity
range: uri

```
</details></div>