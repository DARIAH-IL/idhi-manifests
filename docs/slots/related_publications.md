---
search:
  boost: 5.0
---

# Slot: related_publications 


_Publications that are counterparts or direct scholarly companions of the dataset, such as the print counterpart of a digital edition. Reference Publication records by IDHI URN; use outputs_publications on Project for outputs that are related only by their project of origin._



<div data-search-exclude markdown="1">



URI: [dcterms:relation](http://purl.org/dc/terms/relation)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Publication](../classes/Publication.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:relation](http://purl.org/dc/terms/relation) |

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
| self | dcterms:relation |
| native | idhi:related_publications |




## LinkML Source

<details>
```yaml
name: related_publications
description: Publications that are counterparts or direct scholarly companions of
  the dataset, such as the print counterpart of a digital edition. Reference Publication
  records by IDHI URN; use outputs_publications on Project for outputs that are related
  only by their project of origin.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:relation
domain_of:
- Dataset
range: Publication
multivalued: true

```
</details></div>