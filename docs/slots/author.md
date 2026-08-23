---
search:
  boost: 5.0
---

# Slot: author 


_The person contributing to the containing publication (by IDHI URN). Use in Publication.authorships; do not define the relationship on the Person._



<div data-search-exclude markdown="1">



URI: [idhi:slot/author](https://idhi_placeholder/linkml/slot/author)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Authorship](../classes/Authorship.md) | A person's contribution nested in a Publication, so the publication is inferr... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Person](../classes/Person.md) |
| Domain Of | [Authorship](../classes/Authorship.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:author |
| native | idhi:author |




## LinkML Source

<details>
```yaml
name: author
description: The person contributing to the containing publication (by IDHI URN).
  Use in Publication.authorships; do not define the relationship on the Person.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Authorship
range: Person
required: true

```
</details></div>