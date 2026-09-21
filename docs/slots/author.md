---
search:
  boost: 5.0
---

# Slot: author 


_The person contributing to the containing publication (by IDHI URN). Use in Publication.authorships; do not define the relationship on the Person._



<div data-search-exclude markdown="1">



URI: [dcterms:creator](http://purl.org/dc/terms/creator)
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
| Slot URI | [dcterms:creator](http://purl.org/dc/terms/creator) |

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
| self | dcterms:creator |
| native | idhi:author |




## LinkML Source

<details>
```yaml
name: author
description: The person contributing to the containing publication (by IDHI URN).
  Use in Publication.authorships; do not define the relationship on the Person.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:creator
domain_of:
- Authorship
range: Person
required: true

```
</details></div>