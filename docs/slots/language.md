---
search:
  boost: 5.0
---

# Slot: language 


_BCP-47 language tag of the value, such as en, he, ar, de, yi or lad. Use the shortest registered tag that accurately identifies the text; the deliberately permissive syntax guard accepts private and grandfathered tags and does not verify registration in the IANA language-subtag registry._



<div data-search-exclude markdown="1">



URI: [dcterms:language](http://purl.org/dc/terms/language)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [LangString](../classes/LangString.md) | A single language-tagged text value |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [LangString](../classes/LangString.md) |
| Slot URI | [dcterms:language](http://purl.org/dc/terms/language) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |
### Value Constraints

| Property | Value |
| --- | --- |
| Regex Pattern | `^[A-Za-z]{1,8}(-[A-Za-z0-9]{1,8})*$` |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:language |
| native | idhi:language |




## LinkML Source

<details>
```yaml
name: language
description: BCP-47 language tag of the value, such as en, he, ar, de, yi or lad.
  Use the shortest registered tag that accurately identifies the text; the deliberately
  permissive syntax guard accepts private and grandfathered tags and does not verify
  registration in the IANA language-subtag registry.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:language
domain_of:
- LangString
range: string
required: true
pattern: ^[A-Za-z]{1,8}(-[A-Za-z0-9]{1,8})*$

```
</details></div>