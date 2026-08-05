---
search:
  boost: 5.0
---

# Slot: tool_type 


_The delivery form of the tool (web app, library, CLI...). Pick the single value describing how users primarily consume it._



<div data-search-exclude markdown="1">



URI: [schema:applicationCategory](http://schema.org/applicationCategory)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ToolServiceTypeEnum](../enums/ToolServiceTypeEnum.md) |
| Domain Of | [Tool](../classes/Tool.md) |
| Slot URI | [schema:applicationCategory](http://schema.org/applicationCategory) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:applicationCategory |
| native | idhi:tool_type |




## LinkML Source

<details>
```yaml
name: tool_type
description: The delivery form of the tool (web app, library, CLI...). Pick the single
  value describing how users primarily consume it.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:applicationCategory
domain_of:
- Tool
range: ToolServiceTypeEnum

```
</details></div>