---
search:
  boost: 5.0
---

# Slot: doi 


_The publication's DOI, as CURIE (DOI:10.1234/abcd) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Record whenever one exists; it is the preferred dedup key._



<div data-search-exclude markdown="1">



URI: [bibo:doi](http://purl.org/ontology/bibo/doi)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication (BIBO document): journal article, book, chapter, conf... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uriorcurie](../types/Uriorcurie.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [bibo:doi](http://purl.org/ontology/bibo/doi) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | bibo:doi |
| native | idhi:doi |




## LinkML Source

<details>
```yaml
name: doi
description: The publication's DOI, as CURIE (DOI:10.1234/abcd) or full URL. A supplementary
  external identifier — the record's primary id is always the IDHI URN. Record whenever
  one exists; it is the preferred dedup key.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: bibo:doi
domain_of:
- Publication
range: uriorcurie

```
</details></div>