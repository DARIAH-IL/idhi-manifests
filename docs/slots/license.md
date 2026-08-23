---
search:
  boost: 5.0
---

# Slot: license 


_The license under which the tool, dataset or training material is released. Required for anything advertised as reusable; omit only if genuinely unknown._



<div data-search-exclude markdown="1">



URI: [dcterms:license](http://purl.org/dc/terms/license)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LicenseEnum](../enums/LicenseEnum.md) |
| Domain Of | [Tool](../classes/Tool.md), [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:license](http://purl.org/dc/terms/license) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:license |
| native | idhi:license |




## LinkML Source

<details>
```yaml
name: license
description: The license under which the tool, dataset or training material is released.
  Required for anything advertised as reusable; omit only if genuinely unknown.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:license
domain_of:
- Tool
- Dataset
- TrainingMaterial
range: LicenseEnum

```
</details></div>