---
search:
  boost: 5.0
---

# Slot: organization 


_The organization referenced by a person affiliation, facility affiliation or project role (by IDHI URN). The Person, Facility or Project containing the relationship supplies its other endpoint._



<div data-search-exclude markdown="1">



URI: [idhi:slot/organization](https://idhi_placeholder/linkml/slot/organization)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's employment or membership at an organization, nested in a Person so... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement nested in a Project, so the project is inferred ... |  no  |
| [FacilityAffiliation](../classes/FacilityAffiliation.md) | A facility's affiliation with an organization, nested in a Facility so the fa... |  no  |






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


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:organization |
| native | idhi:organization |




## LinkML Source

<details>
```yaml
name: organization
description: The organization referenced by a person affiliation, facility affiliation
  or project role (by IDHI URN). The Person, Facility or Project containing the relationship
  supplies its other endpoint.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
domain_of:
- Affiliation
- OrganizationProjectRole
- FacilityAffiliation
range: Organization
required: true

```
</details></div>