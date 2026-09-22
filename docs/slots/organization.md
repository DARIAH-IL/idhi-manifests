---
search:
  boost: 5.0
---

# Slot: organization 


_The organization referenced by a person affiliation or project role (by IDHI URN). The Person or Project containing the relationship supplies its other endpoint. This uses an IDHI-specific property because one slot serves two relationship types whose external terms differ (schema:affiliation for Affiliation, schema:participant for OrganizationProjectRole), so neither can be asserted for both._



<div data-search-exclude markdown="1">



URI: [idhi:relatedOrganization](https://idhi_placeholder/linkml/relatedOrganization)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Affiliation](../classes/Affiliation.md) | A person's formal relationship with an organization, nested in a Person so th... |  no  |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | An organization's engagement nested in a Project, so the project is inferred ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Affiliation](../classes/Affiliation.md), [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |
| Slot URI | [idhi:relatedOrganization](https://idhi_placeholder/linkml/relatedOrganization) |

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
| self | idhi:relatedOrganization |
| native | idhi:organization |




## LinkML Source

<details>
```yaml
name: organization
description: The organization referenced by a person affiliation or project role (by
  IDHI URN). The Person or Project containing the relationship supplies its other
  endpoint. This uses an IDHI-specific property because one slot serves two relationship
  types whose external terms differ (schema:affiliation for Affiliation, schema:participant
  for OrganizationProjectRole), so neither can be asserted for both.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:relatedOrganization
domain_of:
- Affiliation
- OrganizationProjectRole
range: Organization
required: true

```
</details></div>