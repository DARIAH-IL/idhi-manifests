---
search:
  boost: 5.0
---

# Slot: funding_program 


_Multilingual name of the broader funding programme or scheme under which the award was made. This uses an IDHI-specific property because FRAPO defines FundingProgramme as a class but has no fitting property for a literal programme label._



<div data-search-exclude markdown="1">



URI: [idhi:fundingProgram](https://idhi_placeholder/linkml/fundingProgram)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [idhi:fundingProgram](https://idhi_placeholder/linkml/fundingProgram) |

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
| self | idhi:fundingProgram |
| native | idhi:funding_program |




## LinkML Source

<details>
```yaml
name: funding_program
description: Multilingual name of the broader funding programme or scheme under which
  the award was made. This uses an IDHI-specific property because FRAPO defines FundingProgramme
  as a class but has no fitting property for a literal programme label.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: idhi:fundingProgram
domain_of:
- Funding
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>