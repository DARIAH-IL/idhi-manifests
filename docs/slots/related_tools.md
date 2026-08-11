---
search:
  boost: 5.0
---

# Slot: related_tools 


_Tools whose use the material teaches or demonstrates (by IDHI URN). Do not use this merely for software used to produce the material._



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
| Range | [Tool](../classes/Tool.md) |
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
| native | idhi:related_tools |




## LinkML Source

<details>
```yaml
name: related_tools
description: Tools whose use the material teaches or demonstrates (by IDHI URN). Do
  not use this merely for software used to produce the material.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:about
domain_of:
- TrainingMaterial
range: Tool
multivalued: true

```
</details></div>