---
search:
  boost: 5.0
---

# Slot: studied_periods 


_Historical period(s) the project studies (e.g. Ottoman period), as free multilingual labels — distinct from the project's own start_date/end_date._



<div data-search-exclude markdown="1">



URI: [dcterms:temporal](http://purl.org/dc/terms/temporal)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [dcterms:temporal](http://purl.org/dc/terms/temporal) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:temporal |
| native | idhi:studied_periods |




## LinkML Source

<details>
```yaml
name: studied_periods
description: Historical period(s) the project studies (e.g. Ottoman period), as free
  multilingual labels — distinct from the project's own start_date/end_date.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:temporal
domain_of:
- Project
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>