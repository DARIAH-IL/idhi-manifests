---
search:
  boost: 5.0
---

# Slot: family_name 


_Family (last) name, in the person's preferred romanization. Use with given_name when the person's name is conventionally expressed in that form._



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
| Range | [String](../types/String.md) |
| Domain Of | [Person](../classes/Person.md) |
| Slot URI | [foaf:familyName](http://xmlns.com/foaf/0.1/familyName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | foaf:familyName |
| native | idhi:family_name |




## LinkML Source

<details>
```yaml
name: family_name
description: Family (last) name, in the person's preferred romanization. Use with
  given_name when the person's name is conventionally expressed in that form.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: foaf:familyName
domain_of:
- Person
range: string
required: false

```
</details></div>