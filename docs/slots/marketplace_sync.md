---
search:
  boost: 5.0
---

# Slot: marketplace_sync 


_Opt-in flag for synchronization with the DARIAH SSH Open Marketplace. Set true to allow the organization and entities related to it through IDHI references, such as services and tools, to be synchronized; false or omission means they must not be synchronized on this organization's authority. This operational flag does not assert ownership of related entities. It uses an IDHI-specific property because established descriptive vocabularies do not provide a term for this synchronization policy._



<div data-search-exclude markdown="1">



URI: [idhi:marketplaceSync](https://idhi_placeholder/linkml/marketplaceSync)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Boolean](../types/Boolean.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [idhi:marketplaceSync](https://idhi_placeholder/linkml/marketplaceSync) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:marketplaceSync |
| native | idhi:marketplace_sync |




## LinkML Source

<details>
```yaml
name: marketplace_sync
description: Opt-in flag for synchronization with the DARIAH SSH Open Marketplace.
  Set true to allow the organization and entities related to it through IDHI references,
  such as services and tools, to be synchronized; false or omission means they must
  not be synchronized on this organization's authority. This operational flag does
  not assert ownership of related entities. It uses an IDHI-specific property because
  established descriptive vocabularies do not provide a term for this synchronization
  policy.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:marketplaceSync
domain_of:
- Organization
range: boolean

```
</details></div>