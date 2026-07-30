---
search:
  boost: 5.0
---

# Slot: begin_date 


_Start of the time span. A string (not date) on purpose: historical periods need values like "-0100" or "circa 1500". Prefer ISO 8601 / EDTF where possible._



<div data-search-exclude markdown="1">



URI: [edm:begin](http://www.europeana.eu/schemas/edm/begin)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [TimePeriod](../classes/TimePeriod.md) | A time span (EDM TimeSpan) |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [TimePeriod](../classes/TimePeriod.md) |
| Slot URI | [edm:begin](http://www.europeana.eu/schemas/edm/begin) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | edm:begin |
| native | idhi:begin_date |




## LinkML Source

<details>
```yaml
name: begin_date
description: 'Start of the time span. A string (not date) on purpose: historical periods
  need values like "-0100" or "circa 1500". Prefer ISO 8601 / EDTF where possible.'
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: edm:begin
domain_of:
- TimePeriod
range: string

```
</details></div>