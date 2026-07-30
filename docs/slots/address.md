---
search:
  boost: 5.0
---

# Slot: address 


_Postal address, multilingual._



<div data-search-exclude markdown="1">



URI: [schema:address](http://schema.org/address)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Location](../classes/Location.md) | A place, optionally with geographic coordinates |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Location](../classes/Location.md) |
| Slot URI | [schema:address](http://schema.org/address) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:address |
| native | idhi:address |




## LinkML Source

<details>
```yaml
name: address
description: Postal address, multilingual.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:address
domain_of:
- Location
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>