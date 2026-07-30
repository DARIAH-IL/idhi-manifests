---
search:
  boost: 5.0
---

# Slot: affiliations 


_The person's institutional affiliations, as reified Affiliation objects (organization + position + dates). Use for employment or formal membership, NOT for project involvement — that goes in project_participations._



<div data-search-exclude markdown="1">



URI: [idhi:slot/affiliations](https://idhi.co.il/linkml/slot/affiliations)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Affiliation](../classes/Affiliation.md) |
| Domain Of | [Person](../classes/Person.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:affiliations |
| native | idhi:affiliations |




## LinkML Source

<details>
```yaml
name: affiliations
description: The person's institutional affiliations, as reified Affiliation objects
  (organization + position + dates). Use for employment or formal membership, NOT
  for project involvement — that goes in project_participations.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Person
range: Affiliation
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>