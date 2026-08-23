---
search:
  boost: 5.0
---

# Slot: funding_status 


_The project's current primary funding or sustainability status at the time the record is maintained. Use this for present support, while funding records preserve past and current award history; update it when the project's circumstances change. This uses an IDHI-specific property because established vocabularies do not provide a controlled current-sustainability status for projects._



<div data-search-exclude markdown="1">



URI: [idhi:fundingStatus](https://idhi_placeholder/linkml/fundingStatus)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [FundingStatusEnum](../enums/FundingStatusEnum.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [idhi:fundingStatus](https://idhi_placeholder/linkml/fundingStatus) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:fundingStatus |
| native | idhi:funding_status |




## LinkML Source

<details>
```yaml
name: funding_status
description: The project's current primary funding or sustainability status at the
  time the record is maintained. Use this for present support, while funding records
  preserve past and current award history; update it when the project's circumstances
  change. This uses an IDHI-specific property because established vocabularies do
  not provide a controlled current-sustainability status for projects.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:fundingStatus
domain_of:
- Project
range: FundingStatusEnum

```
</details></div>