---
search:
  boost: 5.0
---

# Slot: code_repository 


_Source-code repository URL (GitHub, GitLab...), if open._



<div data-search-exclude markdown="1">



URI: [schema:codeRepository](http://schema.org/codeRepository)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project (schema:SoftwareApp... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Tool](../classes/Tool.md) |
| Slot URI | [schema:codeRepository](http://schema.org/codeRepository) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:codeRepository |
| native | idhi:code_repository |




## LinkML Source

<details>
```yaml
name: code_repository
description: Source-code repository URL (GitHub, GitLab...), if open.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:codeRepository
domain_of:
- Tool
range: uri

```
</details></div>