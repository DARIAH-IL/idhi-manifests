---
search:
  boost: 5.0
---

# Slot: presented_at 


_Event(s) in the index where this publication was presented (by IDHI URN), e.g. the conference where the paper was given. Distinct from published_in, the container it appeared in._



<div data-search-exclude markdown="1">



URI: [bibo:presentedAt](http://purl.org/ontology/bibo/presentedAt)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Publication](../classes/Publication.md) | An academic publication (BIBO document): journal article, book, chapter, conf... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Event](../classes/Event.md) |
| Domain Of | [Publication](../classes/Publication.md) |
| Slot URI | [bibo:presentedAt](http://purl.org/ontology/bibo/presentedAt) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | bibo:presentedAt |
| native | idhi:presented_at |




## LinkML Source

<details>
```yaml
name: presented_at
description: Event(s) in the index where this publication was presented (by IDHI URN),
  e.g. the conference where the paper was given. Distinct from published_in, the container
  it appeared in.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: bibo:presentedAt
domain_of:
- Publication
range: Event
multivalued: true

```
</details></div>