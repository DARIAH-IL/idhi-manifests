---
search:
  boost: 5.0
---

# Slot: ror 


_The organization's persistent registry identifier. It supplements the IDHI record id. Record it whenever the organization is registered in ROR — most universities and research institutes are._



<div data-search-exclude markdown="1">



URI: [schema:identifier](http://schema.org/identifier)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [schema:identifier](http://schema.org/identifier) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
<details>
<summary>Additional Constraints</summary>
**Structured Pattern:**

- **Syntax:** `https://ror.org/{ror}`
- **Interpolated:** True

</details>











## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:identifier |
| native | idhi:ror |




## LinkML Source

<details>
```yaml
name: ror
description: The organization's persistent registry identifier. It supplements the
  IDHI record id. Record it whenever the organization is registered in ROR — most
  universities and research institutes are.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:identifier
domain_of:
- Organization
range: uri
structured_pattern:
  syntax: https://ror.org/{ror}
  interpolated: true

```
</details></div>