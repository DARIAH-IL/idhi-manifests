---
search:
  boost: 5.0
---

# Slot: emails 


_Contact email addresses (zero or more). Only record addresses the person has agreed to publish in the index._



<div data-search-exclude markdown="1">



URI: [foaf:mbox](http://xmlns.com/foaf/0.1/mbox)
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
| Slot URI | [foaf:mbox](http://xmlns.com/foaf/0.1/mbox) |

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
| self | foaf:mbox |
| native | idhi:emails |




## LinkML Source

<details>
```yaml
name: emails
description: Contact email addresses (zero or more). Only record addresses the person
  has agreed to publish in the index.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: foaf:mbox
domain_of:
- Person
range: string
multivalued: true

```
</details></div>