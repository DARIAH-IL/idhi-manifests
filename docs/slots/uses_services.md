---
search:
  boost: 5.0
---

# Slot: uses_services 


_Services used by the containing project (by IDHI URN). Use for externally or institutionally delivered services that support the work, not services produced as project outputs._



<div data-search-exclude markdown="1">



URI: [dcterms:requires](http://purl.org/dc/terms/requires)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Service](../classes/Service.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [dcterms:requires](http://purl.org/dc/terms/requires) |

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
| self | dcterms:requires |
| native | idhi:uses_services |




## LinkML Source

<details>
```yaml
name: uses_services
description: Services used by the containing project (by IDHI URN). Use for externally
  or institutionally delivered services that support the work, not services produced
  as project outputs.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:requires
domain_of:
- Project
range: Service
multivalued: true

```
</details></div>