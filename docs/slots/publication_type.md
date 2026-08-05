---
search:
  boost: 5.0
---

# Slot: publication_type 


_The kind of publication (journal article, book part, conference paper, thesis...). Pick the most specific applicable value._



<div data-search-exclude markdown="1">



URI: [dcterms:type](http://purl.org/dc/terms/type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [PublicationTypeEnum](../enums/PublicationTypeEnum.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [dcterms:type](http://purl.org/dc/terms/type) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:type |
| native | idhi:publication_type |




## LinkML Source

<details>
```yaml
name: publication_type
description: The kind of publication (journal article, book part, conference paper,
  thesis...). Pick the most specific applicable value.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:type
domain_of:
- Publication
range: PublicationTypeEnum

```
</details></div>