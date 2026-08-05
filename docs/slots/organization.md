---
search:
  boost: 5.0
---

# Slot: organization 


_The organization side of the relationship (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [idhi:slot/organization](https://idhi.co.il/linkml/slot/organization)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's employment or membership at an organization, with a position and d... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement in a project |  no  |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Affiliation](../classes/Affiliation.md), [OrganizationProjectRole](../classes/OrganizationProjectRole.md), [FacilityAffiliation](../classes/FacilityAffiliation.md) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:organization |
| native | idhi:organization |




## LinkML Source

<details>
```yaml
name: organization
description: The organization side of the relationship (by IDHI URN).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
domain_of:
- Affiliation
- OrganizationProjectRole
- FacilityAffiliation
range: Organization
required: true

```
</details></div>