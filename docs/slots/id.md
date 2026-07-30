---
search:
  boost: 5.0
---

# Slot: id 


_The entity's primary identifier: an IDHI URN of the form_

_  idhi:<class name>:<random short alphanumeric id>_

_e.g. idhi:person:x7k2m9 or idhi:project:a83bq1. Minted by IDHI at record creation and never reused or changed. The class token is the lowercase snake_case class name (Organization subclasses use "organization"); each concrete class enforces its own token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never here._



<div data-search-exclude markdown="1">



URI: [dcterms:identifier](http://purl.org/dc/terms/identifier)
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
| Range | [String](../types/String.md) |
| Domain Of | [NamedThing](../classes/NamedThing.md) |
| Slot URI | [dcterms:identifier](http://purl.org/dc/terms/identifier) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |
### Slot Characteristics

| Property | Value |
| --- | --- |
| Identifier | Yes |


### Value Constraints

| Property | Value |
| --- | --- |
| Regex Pattern | `^idhi:[a-z_]+:[0-9a-z]{4,12}$` |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:identifier |
| native | idhi:id |




## LinkML Source

<details>
```yaml
name: id
description: "The entity's primary identifier: an IDHI URN of the form\n  idhi:<class\
  \ name>:<random short alphanumeric id>\ne.g. idhi:person:x7k2m9 or idhi:project:a83bq1.\
  \ Minted by IDHI at record creation and never reused or changed. The class token\
  \ is the lowercase snake_case class name (Organization subclasses use \"organization\"\
  ); each concrete class enforces its own token via slot_usage. External identifiers\
  \ (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never\
  \ here."
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:identifier
identifier: true
domain_of:
- NamedThing
range: string
required: true
pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$

```
</details></div>