---
search:
  boost: 5.0
---

# Slot: studied_places 


_Geographic focus of the research (places studied), as Location records — distinct from where the project team sits._



<div data-search-exclude markdown="1">



URI: [dcterms:spatial](http://purl.org/dc/terms/spatial)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by TaDiRAH research activit... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Location](../classes/Location.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [dcterms:spatial](http://purl.org/dc/terms/spatial) |

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
| self | dcterms:spatial |
| native | idhi:studied_places |




## LinkML Source

<details>
```yaml
name: studied_places
description: Geographic focus of the research (places studied), as Location records
  — distinct from where the project team sits.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:spatial
domain_of:
- Project
range: Location
multivalued: true

```
</details></div>