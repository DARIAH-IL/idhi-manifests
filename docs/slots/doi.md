---
search:
  boost: 5.0
---

# Slot: doi 


_The publication's persistent identifier. Record it whenever one exists; it is the preferred deduplication key._



<div data-search-exclude markdown="1">



URI: [bibo:doi](http://purl.org/ontology/bibo/doi)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [bibo:doi](http://purl.org/ontology/bibo/doi) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
<details>
<summary>Additional Constraints</summary>
**Structured Pattern:**

- **Syntax:** `https://doi.org/{doi}`
- **Interpolated:** True

</details>











## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | bibo:doi |
| native | idhi:doi |




## LinkML Source

<details>
```yaml
name: doi
description: The publication's persistent identifier. Record it whenever one exists;
  it is the preferred deduplication key.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: bibo:doi
domain_of:
- Publication
range: uri
structured_pattern:
  syntax: https://doi.org/{doi}
  interpolated: true

```
</details></div>