---
search:
  boost: 5.0
---

# Slot: uses_tools 


_Tools used to conduct the containing project (by IDHI URN). Use for substantive research or technical dependencies, not tools produced by the project, which belong in outputs_tools._



<div data-search-exclude markdown="1">



URI: [schema:instrument](http://schema.org/instrument)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Tool](../classes/Tool.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [schema:instrument](http://schema.org/instrument) |

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
| self | schema:instrument |
| native | idhi:uses_tools |




## LinkML Source

<details>
```yaml
name: uses_tools
description: Tools used to conduct the containing project (by IDHI URN). Use for substantive
  research or technical dependencies, not tools produced by the project, which belong
  in outputs_tools.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:instrument
domain_of:
- Project
range: Tool
multivalued: true

```
</details></div>