---
search:
  boost: 5.0
---

# Slot: organizations 


_All Organization records in the index._



<div data-search-exclude markdown="1">



URI: [idhi:slot/organizations](https://idhi.co.il/linkml/slot/organizations)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
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


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:organizations |
| native | idhi:organizations |




## LinkML Source

<details>
```yaml
name: organizations
description: All Organization records in the index.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: Organization
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>