---
search:
  boost: 5.0
---

# Slot: author_order 


_Position in the byline; 1 = first author._



<div data-search-exclude markdown="1">



URI: [schema:position](http://schema.org/position)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Authorship](../classes/Authorship.md) | A person's contribution nested in a Publication, so the publication is inferr... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Integer](../types/Integer.md) |
| Domain Of | [Authorship](../classes/Authorship.md) |
| Slot URI | [schema:position](http://schema.org/position) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:position |
| native | idhi:author_order |




## LinkML Source

<details>
```yaml
name: author_order
description: Position in the byline; 1 = first author.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:position
domain_of:
- Authorship
range: integer

```
</details></div>