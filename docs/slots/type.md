---
search:
  boost: 5.0
---

# Slot: type 


_Discriminator identifying the record's class; used for polymorphic serialization and deserialization._



<div data-search-exclude markdown="1">



URI: [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Entity](../classes/Entity.md) | Root class for any identifiable IDHI entity |  no  |
| [Agent](../classes/Agent.md) | A person or an organization |  no  |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  yes  |
| [Organization](../classes/Organization.md) | An organization of any kind |  yes  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  yes  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  yes  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  yes  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  yes  |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  yes  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  yes  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  yes  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  yes  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Curie](../types/Curie.md) |
| Domain Of | [Entity](../classes/Entity.md) |
| Slot URI | [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) |

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
| self | rdf:type |
| native | idhi:type |




## LinkML Source

<details>
```yaml
name: type
description: Discriminator identifying the record's class; used for polymorphic serialization
  and deserialization.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: rdf:type
domain_of:
- Entity
range: curie
required: true

```
</details></div>