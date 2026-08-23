---
search:
  boost: 5.0
---

# Slot: funding 


_Funding awards received by the project. Use one entry per distinct award, including successive awards from the same organization, and record award dates here rather than duplicating the same fact as a FUNDER organization role._



<div data-search-exclude markdown="1">



URI: [idhi:slot/funding](https://idhi_placeholder/linkml/slot/funding)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Funding](../classes/Funding.md) |
| Domain Of | [Project](../classes/Project.md) |

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
| self | idhi:funding |
| native | idhi:funding |




## LinkML Source

<details>
```yaml
name: funding
description: Funding awards received by the project. Use one entry per distinct award,
  including successive awards from the same organization, and record award dates here
  rather than duplicating the same fact as a FUNDER organization role.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Project
range: Funding
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>