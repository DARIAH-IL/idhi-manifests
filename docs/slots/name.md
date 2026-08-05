---
search:
  boost: 5.0
---

# Slot: name 


_Multilingual name/title. Provide at least one language; English, Hebrew and Arabic variants are each a separate LangString. Preferably a sortable name for organizations; for projects, tools and services, use the name the team itself uses._



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






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Project](../classes/Project.md), [Tool](../classes/Tool.md), [Service](../classes/Service.md), [Publication](../classes/Publication.md), [Event](../classes/Event.md), [Dataset](../classes/Dataset.md) |
| Slot URI | [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |
| Minimum Cardinality | 1 |










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
description: Multilingual name/title. Provide at least one language; English, Hebrew
  and Arabic variants are each a separate LangString. Preferably a sortable name for
  organizations; for projects, tools and services, use the name the team itself uses.
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
range: LangString
multivalued: true
inlined: true
inlined_as_list: true
minimum_cardinality: 1

```
</details></div>