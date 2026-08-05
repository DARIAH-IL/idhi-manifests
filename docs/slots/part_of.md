---
search:
  boost: 5.0
---

# Slot: part_of 


_The containing work (book for a chapter, proceedings for a paper), by IDHI URN or external URI._



<div data-search-exclude markdown="1">



URI: [dcterms:isPartOf](http://purl.org/dc/terms/isPartOf)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uriorcurie](../types/Uriorcurie.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [dcterms:isPartOf](http://purl.org/dc/terms/isPartOf) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:isPartOf |
| native | idhi:part_of |




## LinkML Source

<details>
```yaml
name: part_of
description: The containing work (book for a chapter, proceedings for a paper), by
  IDHI URN or external URI.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:isPartOf
domain_of:
- Publication
range: uriorcurie

```
</details></div>