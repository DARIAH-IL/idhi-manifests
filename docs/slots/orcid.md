---
search:
  boost: 5.0
---

# Slot: orcid 


_The person's persistent researcher identifier. It supplements the IDHI record id. Strongly recommended for every researcher; enables deduplication and linking to the scholarly record._



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
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Person](../classes/Person.md) |
| Slot URI | [schema:identifier](http://schema.org/identifier) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
<details>
<summary>Additional Constraints</summary>
**Structured Pattern:**

- **Syntax:** `https://orcid.org/{orcid}`
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
description: The person's persistent researcher identifier. It supplements the IDHI
  record id. Strongly recommended for every researcher; enables deduplication and
  linking to the scholarly record.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:identifier
domain_of:
- Person
range: uri
structured_pattern:
  syntax: https://orcid.org/{orcid}
  interpolated: true

```
</details></div>