---
search:
  boost: 5.0
---

# Slot: organization_roles 


_Organizations engaged in the containing project, as reified OrganizationProjectRole objects carrying a coordinator, partner, data provider or host role. Reference each organization and infer the project from its containing record; use Project.funding to record a funder, not a role here._



<div data-search-exclude markdown="1">



URI: [schema:participant](http://schema.org/participant)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [schema:participant](http://schema.org/participant) |

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
| self | schema:participant |
| native | idhi:organization_roles |




## LinkML Source

<details>
```yaml
name: organization_roles
description: Organizations engaged in the containing project, as reified OrganizationProjectRole
  objects carrying a coordinator, partner, data provider or host role. Reference each
  organization and infer the project from its containing record; use Project.funding
  to record a funder, not a role here.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:participant
domain_of:
- Project
range: OrganizationProjectRole
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>