---
search:
  boost: 5.0
---

# Slot: services_offered 


_Services this facility offers to researchers. Reference Service records by id; the Service's own 'provider' may still point at the parent Organization._



<div data-search-exclude markdown="1">



URI: [idhi:slot/services_offered](https://idhi.co.il/linkml/slot/services_offered)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Service](../classes/Service.md) |
| Domain Of | [Facility](../classes/Facility.md) |

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
| self | idhi:services_offered |
| native | idhi:services_offered |




## LinkML Source

<details>
```yaml
name: services_offered
description: Services this facility offers to researchers. Reference Service records
  by id; the Service's own 'provider' may still point at the parent Organization.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Facility
range: Service
multivalued: true

```
</details></div>