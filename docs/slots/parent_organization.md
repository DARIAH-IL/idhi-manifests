---
search:
  boost: 5.0
---

# Slot: parent_organization 


_The larger organization containing the current child organization (by IDHI URN). Use only in Organization.organization_structure; define the relationship on the child rather than the parent._



<div data-search-exclude markdown="1">



URI: [schema:parentOrganization](http://schema.org/parentOrganization)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [OrganizationStructure](../classes/OrganizationStructure.md) | Formal containment of the containing Organization within a larger parent orga... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [OrganizationStructure](../classes/OrganizationStructure.md) |
| Slot URI | [schema:parentOrganization](http://schema.org/parentOrganization) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:parentOrganization |
| native | idhi:parent_organization |




## LinkML Source

<details>
```yaml
name: parent_organization
description: The larger organization containing the current child organization (by
  IDHI URN). Use only in Organization.organization_structure; define the relationship
  on the child rather than the parent.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:parentOrganization
domain_of:
- OrganizationStructure
range: Organization
required: true

```
</details></div>