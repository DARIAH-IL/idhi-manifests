---
search:
  boost: 5.0
---

# Slot: publisher 


_The organization formally publishing the dataset, publication or training material (by IDHI URN); use creators for responsibility for making a training material._



<div data-search-exclude markdown="1">



URI: [dcterms:publisher](http://purl.org/dc/terms/publisher)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Publication](../classes/Publication.md), [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:publisher](http://purl.org/dc/terms/publisher) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:publisher |
| native | idhi:publisher |




## LinkML Source

<details>
```yaml
name: publisher
description: The organization formally publishing the dataset, publication or training
  material (by IDHI URN); use creators for responsibility for making a training material.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:publisher
domain_of:
- Publication
- Dataset
- TrainingMaterial
range: Organization

```
</details></div>