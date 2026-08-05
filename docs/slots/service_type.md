---
search:
  boost: 5.0
---

# Slot: service_type 


_The kind of service offered (digitization, consulting...)._



<div data-search-exclude markdown="1">



URI: [schema:serviceType](http://schema.org/serviceType)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ToolServiceTypeEnum](../enums/ToolServiceTypeEnum.md) |
| Domain Of | [Service](../classes/Service.md) |
| Slot URI | [schema:serviceType](http://schema.org/serviceType) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:serviceType |
| native | idhi:service_type |




## LinkML Source

<details>
```yaml
name: service_type
description: The kind of service offered (digitization, consulting...).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:serviceType
domain_of:
- Service
range: ToolServiceTypeEnum

```
</details></div>