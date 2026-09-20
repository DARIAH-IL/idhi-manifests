---
search:
  boost: 5.0
---

# Slot: organization_structure_role 


_The parent's relationship to the containing sub-organization, where the two differ. Use HOST when the parent provides the unit's institutional or operational home and OWNER when it legally or administratively owns it; create one relationship per parent when distinct organizations fill those roles, and omit the role for ordinary containment where host and owner are the same body._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [OrganizationStructure](../classes/OrganizationStructure.md) | Formal containment of the containing Organization within a larger parent orga... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationStructureRoleEnum](../enums/OrganizationStructureRoleEnum.md) |
| Domain Of | [OrganizationStructure](../classes/OrganizationStructure.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:roleName |
| native | idhi:organization_structure_role |




## LinkML Source

<details>
```yaml
name: organization_structure_role
description: The parent's relationship to the containing sub-organization, where the
  two differ. Use HOST when the parent provides the unit's institutional or operational
  home and OWNER when it legally or administratively owns it; create one relationship
  per parent when distinct organizations fill those roles, and omit the role for ordinary
  containment where host and owner are the same body.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- OrganizationStructure
range: OrganizationStructureRoleEnum

```
</details></div>