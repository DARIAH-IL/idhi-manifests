---
search:
  boost: 5.0
---

# Slot: documentation_url 


_User or developer documentation for the tool or service (manual, wiki, API reference)._



<div data-search-exclude markdown="1">



URI: [schema:softwareHelp](http://schema.org/softwareHelp)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project (schema:SoftwareApp... |  no  |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Tool](../classes/Tool.md), [Service](../classes/Service.md) |
| Slot URI | [schema:softwareHelp](http://schema.org/softwareHelp) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:softwareHelp |
| native | idhi:documentation_url |




## LinkML Source

<details>
```yaml
name: documentation_url
description: User or developer documentation for the tool or service (manual, wiki,
  API reference).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:softwareHelp
domain_of:
- Tool
- Service
range: uri

```
</details></div>