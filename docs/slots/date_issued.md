---
search:
  boost: 5.0
---

# Slot: date_issued 


_Formal publication date (or year-01-01 if only the year is known)._



<div data-search-exclude markdown="1">



URI: [dcterms:issued](http://purl.org/dc/terms/issued)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Date](../types/Date.md) |
| Domain Of | [Publication](../classes/Publication.md), [Dataset](../classes/Dataset.md) |
| Slot URI | [dcterms:issued](http://purl.org/dc/terms/issued) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:issued |
| native | idhi:date_issued |




## LinkML Source

<details>
```yaml
name: date_issued
description: Formal publication date (or year-01-01 if only the year is known).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:issued
domain_of:
- Publication
- Dataset
range: date

```
</details></div>