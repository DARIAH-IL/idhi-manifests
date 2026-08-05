---
search:
  boost: 5.0
---

# Slot: tools_provided 


_Tools this facility maintains or gives access to (by id). Use for hosted instances and lab-maintained software, not for every tool staff members happen to use._



<div data-search-exclude markdown="1">



URI: [idhi:slot/tools_provided](https://idhi_placeholder/linkml/slot/tools_provided)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Tool](../classes/Tool.md) |
| Domain Of | [Facility](../classes/Facility.md) |

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
| self | idhi:tools_provided |
| native | idhi:tools_provided |




## LinkML Source

<details>
```yaml
name: tools_provided
description: Tools this facility maintains or gives access to (by id). Use for hosted
  instances and lab-maintained software, not for every tool staff members happen to
  use.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Facility
range: Tool
multivalued: true

```
</details></div>