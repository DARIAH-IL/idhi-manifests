---
search:
  boost: 5.0
---

# Slot: orcid 


_The person's ORCID iD, as CURIE (ORCID:0000-0002-1825-0097) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Strongly recommended for every researcher; enables deduplication and linking to the scholarly record._



<div data-search-exclude markdown="1">



URI: [schema:identifier](http://schema.org/identifier)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Person](../classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uriorcurie](../types/Uriorcurie.md) |
| Domain Of | [Person](../classes/Person.md) |
| Slot URI | [schema:identifier](http://schema.org/identifier) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
<details>
<summary>Additional Constraints</summary>
**Structured Pattern:**

- **Syntax:** `ORCID:{orcid}`
- **Interpolated:** True

</details>











## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:identifier |
| native | idhi:orcid |




## LinkML Source

<details>
```yaml
name: orcid
description: The person's ORCID iD, as CURIE (ORCID:0000-0002-1825-0097) or full URL.
  A supplementary external identifier — the record's primary id is always the IDHI
  URN. Strongly recommended for every researcher; enables deduplication and linking
  to the scholarly record.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:identifier
domain_of:
- Person
range: uriorcurie
structured_pattern:
  syntax: ORCID:{orcid}
  interpolated: true

```
</details></div>