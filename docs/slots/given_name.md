---
search:
  boost: 5.0
---

# Slot: given_name 


_Given (first) name, in the person's preferred romanization. Explicitly optional — the authoritative multilingual display name lives in 'name'._



<div data-search-exclude markdown="1">



URI: [foaf:givenName](http://xmlns.com/foaf/0.1/givenName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Person](../classes/Person.md) |
| Slot URI | [foaf:givenName](http://xmlns.com/foaf/0.1/givenName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | foaf:givenName |
| native | idhi:given_name |




## LinkML Source

<details>
```yaml
name: given_name
description: Given (first) name, in the person's preferred romanization. Explicitly
  optional — the authoritative multilingual display name lives in 'name'.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: foaf:givenName
domain_of:
- Person
range: string
required: false

```
</details></div>