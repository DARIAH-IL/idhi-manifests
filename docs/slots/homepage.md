---
search:
  boost: 5.0
---

# Slot: homepage 


_Public landing page of the entity, if one exists._



<div data-search-exclude markdown="1">



URI: [foaf:homepage](http://xmlns.com/foaf/0.1/homepage)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [NamedThing](../classes/NamedThing.md) | Root class for any identifiable IDHI entity |  no  |
| [Agent](../classes/Agent.md) | A person or organization (a FOAF Agent) |  no  |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [AcademicInstitution](../classes/AcademicInstitution.md) | A university or college |  no  |
| [GLAMInstitution](../classes/GLAMInstitution.md) | A gallery, library, archive or museum |  no  |
| [ResearchCenter](../classes/ResearchCenter.md) | A research center or institute |  no  |
| [Funder](../classes/Funder.md) | A funding body (foundation, council, government program) |  no  |
| [Company](../classes/Company.md) | A commercial company |  no  |
| [NonProfit](../classes/NonProfit.md) | A non-profit / NGO |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project (schema:SoftwareApp... |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [Publication](../classes/Publication.md) | An academic publication (BIBO document): journal article, book, chapter, conf... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
| [Location](../classes/Location.md) | A place, optionally with geographic coordinates |  no  |
| [TimePeriod](../classes/TimePeriod.md) | A time span (EDM TimeSpan) |  no  |
| [Catalog](../classes/Catalog.md) | A digital archive / catalog of resources (DCAT Catalog), i |  no  |
| [Dataset](../classes/Dataset.md) | A dataset produced or curated by a project (DCAT Dataset): corpora, databases... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [NamedThing](../classes/NamedThing.md) |
| Slot URI | [foaf:homepage](http://xmlns.com/foaf/0.1/homepage) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




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
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: foaf:homepage
domain_of:
- NamedThing
range: uri

```
</details></div>