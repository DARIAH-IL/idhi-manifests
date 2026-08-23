---
search:
  boost: 5.0
---

# Slot: organization_hierarchy 


_Formal parent relationships of the containing organization, with the parent and optional start and end dates. Define each containment relationship only on the child organization; use organization_roles for project partnerships and omit this slot for informal associations. This uses an IDHI-specific property because established parent-organization properties point directly to the parent and cannot carry relationship dates._



<div data-search-exclude markdown="1">



URI: [idhi:organizationHierarchy](https://idhi_placeholder/linkml/organizationHierarchy)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationHierarchy](../classes/OrganizationHierarchy.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [idhi:organizationHierarchy](https://idhi_placeholder/linkml/organizationHierarchy) |

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
| self | idhi:organizationHierarchy |
| native | idhi:organization_hierarchy |




## LinkML Source

<details>
```yaml
name: organization_hierarchy
description: Formal parent relationships of the containing organization, with the
  parent and optional start and end dates. Define each containment relationship only
  on the child organization; use organization_roles for project partnerships and omit
  this slot for informal associations. This uses an IDHI-specific property because
  established parent-organization properties point directly to the parent and cannot
  carry relationship dates.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:organizationHierarchy
domain_of:
- Organization
range: OrganizationHierarchy
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>