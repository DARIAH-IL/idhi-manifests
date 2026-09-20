---
search:
  boost: 5.0
---

# Slot: organization_structure 


_Formal parent relationships of the containing organization, each with the parent, an optional host/owner role and optional start and end dates. Set this on every sub-organization: a university lab or institute names its university here, a museum's digital unit names the museum. Define each containment relationship only on the child organization; give a jointly run unit one instance per parent; use organization_roles for project partnerships and omit this slot for informal associations. This uses an IDHI-specific property because established parent-organization properties point directly to the parent and cannot carry relationship dates._



<div data-search-exclude markdown="1">



URI: [idhi:organizationStructure](https://idhi_placeholder/linkml/organizationStructure)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind, at any level of granularity |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationStructure](../classes/OrganizationStructure.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [idhi:organizationStructure](https://idhi_placeholder/linkml/organizationStructure) |

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
| self | idhi:organizationStructure |
| native | idhi:organization_structure |




## LinkML Source

<details>
```yaml
name: organization_structure
description: 'Formal parent relationships of the containing organization, each with
  the parent, an optional host/owner role and optional start and end dates. Set this
  on every sub-organization: a university lab or institute names its university here,
  a museum''s digital unit names the museum. Define each containment relationship
  only on the child organization; give a jointly run unit one instance per parent;
  use organization_roles for project partnerships and omit this slot for informal
  associations. This uses an IDHI-specific property because established parent-organization
  properties point directly to the parent and cannot carry relationship dates.'
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:organizationStructure
domain_of:
- Organization
range: OrganizationStructure
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>