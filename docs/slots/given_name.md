---
search:
  boost: 5.0
---

# Slot: given_name 


_Given (first) name as multilingual text. Use one LangString per available language with family_name when the person's name is conventionally expressed in separate parts; do not use it for a full name._



<div data-search-exclude markdown="1">



URI: [foaf:givenName](https://xmlns.com/foaf/spec/#term_givenName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Person](../classes/Person.md) |
| Slot URI | [foaf:givenName](https://xmlns.com/foaf/spec/#term_givenName) |

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
| self | foaf:givenName |
| native | idhi:given_name |




## LinkML Source

<details>
```yaml
name: given_name
description: Given (first) name as multilingual text. Use one LangString per available
  language with family_name when the person's name is conventionally expressed in
  separate parts; do not use it for a full name.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: foaf:givenName
domain_of:
- Person
range: LangString
required: false
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>