---
search:
  boost: 5.0
---

# Slot: type 


_Discriminator carrying the class URI; used for polymorphic serialization and deserialization._



<div data-search-exclude markdown="1">



URI: [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [NamedThing](../classes/NamedThing.md) | Root class for any identifiable IDHI entity |  no  |
| [Agent](../classes/Agent.md) | A person or organization (a FOAF Agent) |  no  |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  yes  |
| [Organization](../classes/Organization.md) | An organization of any kind |  yes  |
| [AcademicInstitution](../classes/AcademicInstitution.md) | A university or college |  no  |
| [GLAMInstitution](../classes/GLAMInstitution.md) | A gallery, library, archive or museum |  no  |
| [ResearchCenter](../classes/ResearchCenter.md) | A research center or institute |  no  |
| [Funder](../classes/Funder.md) | A funding body (foundation, council, government program) |  no  |
| [Company](../classes/Company.md) | A commercial company |  no  |
| [NonProfit](../classes/NonProfit.md) | A non-profit / NGO |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  yes  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  yes  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project (schema:SoftwareApp... |  yes  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  yes  |
| [Publication](../classes/Publication.md) | An academic publication (BIBO document): journal article, book, chapter, conf... |  yes  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  yes  |
| [Location](../classes/Location.md) | A place, optionally with geographic coordinates |  yes  |
| [TimePeriod](../classes/TimePeriod.md) | A time span (EDM TimeSpan) |  yes  |
| [Catalog](../classes/Catalog.md) | A digital archive / catalog of resources (DCAT Catalog), i |  yes  |
| [Dataset](../classes/Dataset.md) | A dataset produced or curated by a project (DCAT Dataset): corpora, databases... |  yes  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uriorcurie](../types/Uriorcurie.md) |
| Domain Of | [NamedThing](../classes/NamedThing.md) |
| Slot URI | [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | rdf:type |
| native | idhi:type |




## LinkML Source

<details>
```yaml
name: type
description: Discriminator carrying the class URI; used for polymorphic serialization
  and deserialization.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: rdf:type
domain_of:
- NamedThing
range: uriorcurie
required: true

```
</details></div>