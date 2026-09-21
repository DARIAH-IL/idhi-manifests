---
search:
  boost: 5.0
---

# Slot: tools_provided 


_Tools this organization maintains or gives access to (by id). Use for hosted instances and lab-maintained software, not for every tool staff members happen to use. This uses an IDHI-specific property because the relation is custodial rather than authorial, so foaf:made and schema:producer would both overstate it._



<div data-search-exclude markdown="1">



URI: [idhi:toolsProvided](https://idhi_placeholder/linkml/toolsProvided)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind, at any level of granularity |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Tool](../classes/Tool.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [idhi:toolsProvided](https://idhi_placeholder/linkml/toolsProvided) |

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
| self | idhi:toolsProvided |
| native | idhi:tools_provided |




## LinkML Source

<details>
```yaml
name: tools_provided
description: Tools this organization maintains or gives access to (by id). Use for
  hosted instances and lab-maintained software, not for every tool staff members happen
  to use. This uses an IDHI-specific property because the relation is custodial rather
  than authorial, so foaf:made and schema:producer would both overstate it.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:toolsProvided
domain_of:
- Organization
range: Tool
multivalued: true

```
</details></div>