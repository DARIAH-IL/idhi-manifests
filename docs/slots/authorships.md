---
search:
  boost: 5.0
---

# Slot: authorships 


_The person's publication contributions, as reified Authorship objects carrying byline order and role._



<div data-search-exclude markdown="1">



URI: [idhi:slot/authorships](https://idhi.co.il/linkml/slot/authorships)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Authorship](../classes/Authorship.md) |
| Domain Of | [Person](../classes/Person.md), [Publication](../classes/Publication.md) |

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
| self | idhi:authorships |
| native | idhi:authorships |




## LinkML Source

<details>
```yaml
name: authorships
description: The person's publication contributions, as reified Authorship objects
  carrying byline order and role.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Person
- Publication
range: Authorship
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>