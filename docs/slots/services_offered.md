---
search:
  boost: 5.0
---

# Slot: services_offered 


_Services this organization offers to researchers. Reference Service records by id; list them on the unit that actually delivers them — a lab's services belong on the lab's own record rather than on its parent university. This uses an IDHI-specific property because schema.org offers only schema:makesOffer, whose range is an Offer rather than the service itself, and no other vocabulary has a provider-to-service property._



<div data-search-exclude markdown="1">



URI: [idhi:servicesOffered](https://idhi_placeholder/linkml/servicesOffered)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind, at any level of granularity |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Service](../classes/Service.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [idhi:servicesOffered](https://idhi_placeholder/linkml/servicesOffered) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:servicesOffered |
| native | idhi:services_offered |




## LinkML Source

<details>
```yaml
name: services_offered
description: Services this organization offers to researchers. Reference Service records
  by id; list them on the unit that actually delivers them — a lab's services belong
  on the lab's own record rather than on its parent university. This uses an IDHI-specific
  property because schema.org offers only schema:makesOffer, whose range is an Offer
  rather than the service itself, and no other vocabulary has a provider-to-service
  property.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:servicesOffered
domain_of:
- Organization
range: Service
multivalued: true

```
</details></div>