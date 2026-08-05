---
search:
  boost: 5.0
---

# Slot: member 


_The person affiliated with the organization (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [idhi:slot/member](https://idhi.co.il/linkml/slot/member)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's employment or membership at an organization, with a position and d... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Person](../classes/Person.md) |
| Domain Of | [Affiliation](../classes/Affiliation.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:member |
| native | idhi:member |




## LinkML Source

<details>
```yaml
name: member
description: The person affiliated with the organization (by IDHI URN).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Affiliation
range: Person
required: true

```
</details></div>