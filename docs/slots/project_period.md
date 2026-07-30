---
search:
  boost: 5.0
---

# Slot: project_period 


_The project's OWN runtime (when the research is/was conducted). Do not confuse with studied_periods._



<div data-search-exclude markdown="1">



URI: [dcterms:temporal](http://purl.org/dc/terms/temporal)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [TimePeriod](../classes/TimePeriod.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [dcterms:temporal](http://purl.org/dc/terms/temporal) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:temporal |
| native | idhi:project_period |




## LinkML Source

<details>
```yaml
name: project_period
description: The project's OWN runtime (when the research is/was conducted). Do not
  confuse with studied_periods.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:temporal
domain_of:
- Project
range: TimePeriod

```
</details></div>