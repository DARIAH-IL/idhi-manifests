---
search:
  boost: 5.0
---

# Slot: parent_organization 


_The larger organization this one is part of (e.g. a department's university). Use for formal containment only; looser partnerships belong in relationship classes._



<div data-search-exclude markdown="1">



URI: [schema:parentOrganization](http://schema.org/parentOrganization)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [schema:parentOrganization](http://schema.org/parentOrganization) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:parentOrganization |
| native | idhi:parent_organization |




## LinkML Source

<details>
```yaml
name: parent_organization
description: The larger organization this one is part of (e.g. a department's university).
  Use for formal containment only; looser partnerships belong in relationship classes.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:parentOrganization
domain_of:
- Organization
range: Organization

```
</details></div>