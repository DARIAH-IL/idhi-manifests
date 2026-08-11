---
search:
  boost: 5.0
---

# Slot: creators 


_People or organizations responsible for creating the training material (by IDHI URN). Use publisher for the organization that formally releases it when that differs from its creators._



<div data-search-exclude markdown="1">



URI: [dcterms:creator](http://purl.org/dc/terms/creator)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Agent](../classes/Agent.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:creator](http://purl.org/dc/terms/creator) |

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
| self | dcterms:creator |
| native | idhi:creators |




## LinkML Source

<details>
```yaml
name: creators
description: People or organizations responsible for creating the training material
  (by IDHI URN). Use publisher for the organization that formally releases it when
  that differs from its creators.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:creator
domain_of:
- TrainingMaterial
range: Agent
multivalued: true

```
</details></div>