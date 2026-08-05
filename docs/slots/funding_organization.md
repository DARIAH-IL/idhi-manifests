---
search:
  boost: 5.0
---

# Slot: funding_organization 


_The organization that provides this funding award (by IDHI URN)._



<div data-search-exclude markdown="1">



URI: [schema:funder](http://schema.org/funder)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A funding award for a project, identifying the organization that provides it ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Organization](../classes/Organization.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [schema:funder](http://schema.org/funder) |

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
| self | schema:funder |
| native | idhi:funding_organization |




## LinkML Source

<details>
```yaml
name: funding_organization
description: The organization that provides this funding award (by IDHI URN).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:funder
domain_of:
- Funding
range: Organization
required: true

```
</details></div>