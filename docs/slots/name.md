---
search:
  boost: 5.0
---

# Slot: name 


_The multilingual name or title used to identify the entity. Use one LangString per available language and do not repeat a language. Prefer the official localized name for organizations; for projects, tools and services, use localized names supplied by the team rather than translating branded names without authority._



<div data-search-exclude markdown="1">



URI: [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Project](../classes/Project.md), [Tool](../classes/Tool.md), [Service](../classes/Service.md), [Publication](../classes/Publication.md), [Event](../classes/Event.md), [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | skos:prefLabel |
| native | idhi:name |




## LinkML Source

<details>
```yaml
name: name
description: The multilingual name or title used to identify the entity. Use one LangString
  per available language and do not repeat a language. Prefer the official localized
  name for organizations; for projects, tools and services, use localized names supplied
  by the team rather than translating branded names without authority.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: skos:prefLabel
domain_of:
- Organization
- Facility
- Project
- Tool
- Service
- Publication
- Event
- Dataset
- TrainingMaterial
range: LangString
required: true
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>