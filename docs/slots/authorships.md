---
search:
  boost: 5.0
---

# Slot: authorships 


_People who contributed to the containing publication, as reified Authorship objects carrying author, byline order and role. Define each authorship only here on its Publication; do not duplicate it on the Person._



<div data-search-exclude markdown="1">



URI: [idhi:slot/authorships](https://idhi_placeholder/linkml/slot/authorships)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Authorship](../classes/Authorship.md) |
| Domain Of | [Publication](../classes/Publication.md) |

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
| self | idhi:authorships |
| native | idhi:authorships |




## LinkML Source

<details>
```yaml
name: authorships
description: People who contributed to the containing publication, as reified Authorship
  objects carrying author, byline order and role. Define each authorship only here
  on its Publication; do not duplicate it on the Person.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Publication
range: Authorship
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>