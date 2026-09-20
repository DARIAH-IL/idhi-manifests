---
search:
  boost: 5.0
---

# Slot: provider 


_The organization formally responsible for delivering the service (the one you'd contact or contract with) — name the unit that delivers it, which may be a sub-organization such as a lab rather than its parent institution._



<div data-search-exclude markdown="1">



URI: [schema:provider](http://schema.org/provider)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by an organizatio... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Service](../classes/Service.md) |
| Slot URI | [schema:provider](http://schema.org/provider) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:provider |
| native | idhi:provider |




## LinkML Source

<details>
```yaml
name: provider
description: The organization formally responsible for delivering the service (the
  one you'd contact or contract with) — name the unit that delivers it, which may
  be a sub-organization such as a lab rather than its parent institution.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:provider
domain_of:
- Service
range: Organization

```
</details></div>