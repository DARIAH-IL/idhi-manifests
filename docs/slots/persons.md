---
search:
  boost: 5.0
---

# Slot: persons 


_All Person records in the index._



<div data-search-exclude markdown="1">



URI: [idhi:slot/persons](https://idhi_placeholder/linkml/slot/persons)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Person](../classes/Person.md) |
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
| self | idhi:persons |
| native | idhi:persons |




## LinkML Source

<details>
```yaml
name: persons
description: All Person records in the index.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: Person
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>