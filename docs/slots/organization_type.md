---
search:
  boost: 5.0
---

# Slot: organization_type 


_The kind of organization. Always set it._



<div data-search-exclude markdown="1">



URI: [dcterms:type](http://purl.org/dc/terms/type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationTypeEnum](../enums/OrganizationTypeEnum.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [dcterms:type](http://purl.org/dc/terms/type) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:type |
| native | idhi:organization_type |




## LinkML Source

<details>
```yaml
name: organization_type
description: The kind of organization. Always set it.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:type
domain_of:
- Organization
range: OrganizationTypeEnum

```
</details></div>