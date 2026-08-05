---
search:
  boost: 5.0
---

# Slot: services 


_All Service records in the index._



<div data-search-exclude markdown="1">



URI: [idhi:slot/services](https://idhi_placeholder/linkml/slot/services)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Service](../classes/Service.md) |
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
| self | idhi:services |
| native | idhi:services |




## LinkML Source

<details>
```yaml
name: services
description: All Service records in the index.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: Service
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>