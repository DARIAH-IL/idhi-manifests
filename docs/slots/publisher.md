---
search:
  boost: 5.0
---

# Slot: publisher 


_The organization publishing the catalog, dataset or publication (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [dcterms:publisher](http://purl.org/dc/terms/publisher)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication (BIBO document): journal article, book, chapter, conf... |  no  |
| [Catalog](../classes/Catalog.md) | A digital archive / catalog of resources (DCAT Catalog), i |  no  |
| [Dataset](../classes/Dataset.md) | A dataset produced or curated by a project (DCAT Dataset): corpora, databases... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Publication](../classes/Publication.md), [Catalog](../classes/Catalog.md), [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:publisher](http://purl.org/dc/terms/publisher) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:publisher |
| native | idhi:publisher |




## LinkML Source

<details>
```yaml
name: publisher
description: The organization publishing the catalog, dataset or publication (by IDHI
  URN).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:publisher
domain_of:
- Publication
- Catalog
- Dataset
range: Organization

```
</details></div>