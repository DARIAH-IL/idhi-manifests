---
search:
  boost: 5.0
---

# Slot: tools 


_All Tool records in the index._



<div data-search-exclude markdown="1">



URI: [idhi:slot/tools](https://idhi_placeholder/linkml/slot/tools)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Tool](../classes/Tool.md) |
| Domain Of | [IndexContainer](../classes/IndexContainer.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |
### Slot Characteristics

| Property | Value |
| --- | --- |
| Owner | [IndexContainer](../classes/IndexContainer.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:tools |
| native | idhi:tools |




## LinkML Source

<details>
```yaml
name: tools
description: All Tool records in the index.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: Tool
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>