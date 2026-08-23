---
search:
  boost: 5.0
---

# Slot: family_name 


_Family (last) name as multilingual text. Use one LangString per available language with given_name when the person's name is conventionally expressed in separate parts; do not use it for a full name._



<div data-search-exclude markdown="1">



URI: [foaf:familyName](http://xmlns.com/foaf/0.1/familyName)
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
| Slot URI | [foaf:familyName](http://xmlns.com/foaf/0.1/familyName) |

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
| self | foaf:familyName |
| native | idhi:family_name |




## LinkML Source

<details>
```yaml
name: family_name
description: Family (last) name as multilingual text. Use one LangString per available
  language with given_name when the person's name is conventionally expressed in separate
  parts; do not use it for a full name.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: foaf:familyName
domain_of:
- Person
range: LangString
required: false
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>