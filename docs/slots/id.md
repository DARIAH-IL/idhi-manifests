---
search:
  boost: 5.0
---

# Slot: id 


_The entity's primary identifier: an IDHI URN of the form_

_  idhi:<class name>:<random short alphanumeric id>_

_e.g. idhi:person:x7k2m9 or idhi:project:a83bq1. Minted by IDHI at record creation and never reused or changed. The class token is the lowercase snake_case class name; each concrete class enforces its own token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never here._



<div data-search-exclude markdown="1">



URI: [dcterms:identifier](http://purl.org/dc/terms/identifier)
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
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  yes  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  yes  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Entity](../classes/Entity.md) |
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


* from schema: https://idhi_placeholder/linkml/idhi




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
  \ is the lowercase snake_case class name; each concrete class enforces its own token\
  \ via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and\
  \ go in their dedicated slots — never here."
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:identifier
identifier: true
domain_of:
- Entity
range: string
required: true
pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$

```
</details></div>