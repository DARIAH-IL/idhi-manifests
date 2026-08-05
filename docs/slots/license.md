---
search:
  boost: 5.0
---

# Slot: license 


_The license under which the tool or dataset is released. Required for anything advertised as reusable; omit only if genuinely unknown._



<div data-search-exclude markdown="1">



URI: [dcterms:license](http://purl.org/dc/terms/license)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LicenseEnum](../enums/LicenseEnum.md) |
| Domain Of | [Tool](../classes/Tool.md), [Dataset](../classes/Dataset.md) |
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
description: The license under which the tool or dataset is released. Required for
  anything advertised as reusable; omit only if genuinely unknown.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:license
domain_of:
- Tool
- Dataset
range: LicenseEnum

```
</details></div>