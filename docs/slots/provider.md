---
search:
  boost: 5.0
---

# Slot: provider 


_The organization formally responsible for delivering the service (the one you'd contact or contract with) — set this even when the service is listed under a Facility._



<div data-search-exclude markdown="1">



URI: [schema:provider](http://schema.org/provider)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |






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
  one you'd contact or contract with) — set this even when the service is listed under
  a Facility.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:provider
domain_of:
- Service
range: Organization

```
</details></div>