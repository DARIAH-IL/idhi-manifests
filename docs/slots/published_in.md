---
search:
  boost: 5.0
---

# Slot: published_in 


_Name of the journal, book or proceedings the publication appeared in, as free multilingual text. If the container work has its own IDHI record or external URI, also link it via part_of._



<div data-search-exclude markdown="1">



URI: [schema:isPartOf](http://schema.org/isPartOf)
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
| Slot URI | [schema:isPartOf](http://schema.org/isPartOf) |

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
| self | schema:isPartOf |
| native | idhi:published_in |




## LinkML Source

<details>
```yaml
name: published_in
description: Name of the journal, book or proceedings the publication appeared in,
  as free multilingual text. If the container work has its own IDHI record or external
  URI, also link it via part_of.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:isPartOf
domain_of:
- Publication
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>