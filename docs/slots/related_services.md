---
search:
  boost: 5.0
---

# Slot: related_services 


_Services that the material explains how to access or use (by IDHI URN). Do not use this for the organization publishing the material._



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
| Range | [Service](../classes/Service.md) |
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
| native | idhi:related_services |




## LinkML Source

<details>
```yaml
name: related_services
description: Services that the material explains how to access or use (by IDHI URN).
  Do not use this for the organization publishing the material.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:about
domain_of:
- TrainingMaterial
range: Service
multivalued: true

```
</details></div>