---
search:
  boost: 5.0
---

# Slot: time_periods 


_All TimePeriod records in the index._



<div data-search-exclude markdown="1">



URI: [idhi:slot/time_periods](https://idhi.co.il/linkml/slot/time_periods)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | Top-level holder for all IDHI records |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [TimePeriod](../classes/TimePeriod.md) |
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
| self | idhi:time_periods |
| native | idhi:time_periods |




## LinkML Source

<details>
```yaml
name: time_periods
description: All TimePeriod records in the index.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
owner: IndexContainer
domain_of:
- IndexContainer
range: TimePeriod
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>