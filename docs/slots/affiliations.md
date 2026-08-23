---
search:
  boost: 5.0
---

# Slot: affiliations 


_The containing person's institutional affiliations, as reified Affiliation objects with organization, position and dates. Use for employment or formal membership, not for project involvement; the containing person's ID is inferred and must not be repeated in each relationship._



<div data-search-exclude markdown="1">



URI: [idhi:slot/affiliations](https://idhi_placeholder/linkml/slot/affiliations)
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


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:affiliations |
| native | idhi:affiliations |




## LinkML Source

<details>
```yaml
name: affiliations
description: The containing person's institutional affiliations, as reified Affiliation
  objects with organization, position and dates. Use for employment or formal membership,
  not for project involvement; the containing person's ID is inferred and must not
  be repeated in each relationship.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Person
range: Affiliation
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>