---
search:
  boost: 5.0
---

# Slot: resource_contribution_role 


_The contributor's responsibility for the containing Tool or Dataset. Choose the most specific applicable role and create separate relationships when one contributor has materially distinct responsibilities._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [ResourceContribution](../classes/ResourceContribution.md) | A person or organization contributing to the containing Tool or Dataset in a ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [ResourceContributionRoleEnum](../enums/ResourceContributionRoleEnum.md) |
| Domain Of | [ResourceContribution](../classes/ResourceContribution.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

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
| self | schema:roleName |
| native | idhi:resource_contribution_role |




## LinkML Source

<details>
```yaml
name: resource_contribution_role
description: The contributor's responsibility for the containing Tool or Dataset.
  Choose the most specific applicable role and create separate relationships when
  one contributor has materially distinct responsibilities.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- ResourceContribution
range: ResourceContributionRoleEnum
required: true

```
</details></div>