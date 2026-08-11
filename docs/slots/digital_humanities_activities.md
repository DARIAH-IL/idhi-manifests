---
search:
  boost: 5.0
---

# Slot: digital_humanities_activities 


_Digital-humanities research activities practiced in this project, tool or service, or taught by this training material. Prefer the most specific applicable activity; multiple values are expected. This is the primary DH-facet for discovery._



<div data-search-exclude markdown="1">



URI: [dcterms:subject](http://purl.org/dc/terms/subject)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [DigitalHumanitiesActivityEnum](../enums/DigitalHumanitiesActivityEnum.md) |
| Domain Of | [Project](../classes/Project.md), [Tool](../classes/Tool.md), [Service](../classes/Service.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [dcterms:subject](http://purl.org/dc/terms/subject) |

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
| self | dcterms:subject |
| native | idhi:digital_humanities_activities |




## LinkML Source

<details>
```yaml
name: digital_humanities_activities
description: Digital-humanities research activities practiced in this project, tool
  or service, or taught by this training material. Prefer the most specific applicable
  activity; multiple values are expected. This is the primary DH-facet for discovery.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:subject
domain_of:
- Project
- Tool
- Service
- TrainingMaterial
range: DigitalHumanitiesActivityEnum
multivalued: true

```
</details></div>