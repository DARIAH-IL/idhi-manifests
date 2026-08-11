---
search:
  boost: 5.0
---

# Slot: material_url 


_Direct landing or access URL for the instructional resource. Use homepage for a broader site about the material and material_url for the resource learners open._



<div data-search-exclude markdown="1">



URI: [schema:url](http://schema.org/url)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:url](http://schema.org/url) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:url |
| native | idhi:material_url |




## LinkML Source

<details>
```yaml
name: material_url
description: Direct landing or access URL for the instructional resource. Use homepage
  for a broader site about the material and material_url for the resource learners
  open.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:url
domain_of:
- TrainingMaterial
range: uri

```
</details></div>