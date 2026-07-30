---
search:
  boost: 5.0
---

# Slot: ror 


_The organization's ROR ID, as CURIE (ROR:04aj4c181) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Record it whenever the organization is registered in ROR — most universities and research institutes are._



<div data-search-exclude markdown="1">



URI: [schema:identifier](http://schema.org/identifier)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [AcademicInstitution](../classes/AcademicInstitution.md) | A university or college |  no  |
| [GLAMInstitution](../classes/GLAMInstitution.md) | A gallery, library, archive or museum |  no  |
| [ResearchCenter](../classes/ResearchCenter.md) | A research center or institute |  no  |
| [Funder](../classes/Funder.md) | A funding body (foundation, council, government program) |  no  |
| [Company](../classes/Company.md) | A commercial company |  no  |
| [NonProfit](../classes/NonProfit.md) | A non-profit / NGO |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uriorcurie](../types/Uriorcurie.md) |
| Domain Of | [Organization](../classes/Organization.md) |
| Slot URI | [schema:identifier](http://schema.org/identifier) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:identifier |
| native | idhi:ror |




## LinkML Source

<details>
```yaml
name: ror
description: The organization's ROR ID, as CURIE (ROR:04aj4c181) or full URL. A supplementary
  external identifier — the record's primary id is always the IDHI URN. Record it
  whenever the organization is registered in ROR — most universities and research
  institutes are.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:identifier
domain_of:
- Organization
range: uriorcurie

```
</details></div>