---
search:
  boost: 5.0
---

# Slot: quantity 


_The numeric magnitude of an Extent measure. Use an integer when the measure is a count or an exact byte total, and a decimal only when the chosen unit requires one; put the unit in the accompanying unit slot._



<div data-search-exclude markdown="1">



URI: [schema:value](http://schema.org/value)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Extent](../classes/Extent.md) | A quantitative measure of a dataset's size or scope, expressed as a numeric q... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Decimal](../types/Decimal.md) |
| Domain Of | [Extent](../classes/Extent.md) |
| Slot URI | [schema:value](http://schema.org/value) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:value |
| native | idhi:quantity |




## LinkML Source

<details>
```yaml
name: quantity
description: The numeric magnitude of an Extent measure. Use an integer when the measure
  is a count or an exact byte total, and a decimal only when the chosen unit requires
  one; put the unit in the accompanying unit slot.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:value
domain_of:
- Extent
range: decimal
required: true

```
</details></div>