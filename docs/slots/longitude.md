---
search:
  boost: 5.0
---

# Slot: longitude 


_WGS84 longitude in decimal degrees._



<div data-search-exclude markdown="1">



URI: [wgs84:long](http://www.w3.org/2003/01/geo/wgs84_pos#long)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Location](../classes/Location.md) | A place, optionally with geographic coordinates |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Float](../types/Float.md) |
| Domain Of | [Location](../classes/Location.md) |
| Slot URI | [wgs84:long](http://www.w3.org/2003/01/geo/wgs84_pos#long) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | wgs84:long |
| native | idhi:longitude |




## LinkML Source

<details>
```yaml
name: longitude
description: WGS84 longitude in decimal degrees.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: wgs84:long
domain_of:
- Location
range: float

```
</details></div>