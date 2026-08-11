---
search:
  boost: 5.0
---

# Slot: related_datasets 


_Datasets used as the subject or worked example of the material (by IDHI URN). Do not use this for incidental source data that learners never encounter._



<div data-search-exclude markdown="1">



URI: [schema:about](http://schema.org/about)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:about](http://schema.org/about) |

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
| self | schema:about |
| native | idhi:related_datasets |




## LinkML Source

<details>
```yaml
name: related_datasets
description: Datasets used as the subject or worked example of the material (by IDHI
  URN). Do not use this for incidental source data that learners never encounter.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:about
domain_of:
- TrainingMaterial
range: Dataset
multivalued: true

```
</details></div>