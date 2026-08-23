---
search:
  boost: 5.0
---

# Slot: grant_name 


_Official multilingual title of the individual grant or award. Use this for the award's title, not the broader recurring programme, which belongs in funding_program._



<div data-search-exclude markdown="1">



URI: [schema:name](http://schema.org/name)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [schema:name](http://schema.org/name) |

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
| self | schema:name |
| native | idhi:grant_name |




## LinkML Source

<details>
```yaml
name: grant_name
description: Official multilingual title of the individual grant or award. Use this
  for the award's title, not the broader recurring programme, which belongs in funding_program.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:name
domain_of:
- Funding
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>