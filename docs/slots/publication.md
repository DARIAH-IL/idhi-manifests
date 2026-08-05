---
search:
  boost: 5.0
---

# Slot: publication 


_The publication contributed to (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [idhi:slot/publication](https://idhi_placeholder/linkml/slot/publication)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Authorship](../classes/Authorship.md) | A person's contribution to a publication, with author order and role |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Publication](../classes/Publication.md) |
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
| self | idhi:publication |
| native | idhi:publication |




## LinkML Source

<details>
```yaml
name: publication
description: The publication contributed to (by IDHI URN).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Authorship
range: Publication
required: true

```
</details></div>