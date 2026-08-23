---
search:
  boost: 5.0
---

# Slot: contributor 


_The person or organization contributing to the containing Tool or Dataset (by IDHI URN). Use only in resource_contributions; do not duplicate the relationship on the Agent._



<div data-search-exclude markdown="1">



URI: [dcterms:contributor](http://purl.org/dc/terms/contributor)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [ResourceContribution](../classes/ResourceContribution.md) | A person or organization contributing to the containing Tool or Dataset in a ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Agent](../classes/Agent.md) |
| Domain Of | [ResourceContribution](../classes/ResourceContribution.md) |
| Slot URI | [dcterms:contributor](http://purl.org/dc/terms/contributor) |

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
| self | dcterms:contributor |
| native | idhi:contributor |




## LinkML Source

<details>
```yaml
name: contributor
description: The person or organization contributing to the containing Tool or Dataset
  (by IDHI URN). Use only in resource_contributions; do not duplicate the relationship
  on the Agent.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcterms:contributor
domain_of:
- ResourceContribution
range: Agent
required: true

```
</details></div>