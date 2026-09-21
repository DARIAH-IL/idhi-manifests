---
search:
  boost: 5.0
---

# Slot: publisher_name 


_Name of the press, imprint or issuing body that released the publication, as free multilingual text. Use this rather than an IDHI URN, since commercial publishers are not indexed as Organization records; use published_in for the journal, book or proceedings the work appeared in._



<div data-search-exclude markdown="1">



URI: [dcterms:publisher](http://purl.org/dc/terms/publisher)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [dcterms:publisher](http://purl.org/dc/terms/publisher) |

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
| self | dcterms:publisher |
| native | idhi:publisher_name |




## LinkML Source

<details>
```yaml
name: publisher_name
description: Name of the press, imprint or issuing body that released the publication,
  as free multilingual text. Use this rather than an IDHI URN, since commercial publishers
  are not indexed as Organization records; use published_in for the journal, book
  or proceedings the work appeared in.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:publisher
domain_of:
- Publication
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>