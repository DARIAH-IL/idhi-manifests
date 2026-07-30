---
search:
  boost: 5.0
---

# Slot: location 


_Where the organization, facility or event is physically situated._



<div data-search-exclude markdown="1">



URI: [schema:location](http://schema.org/location)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |
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
| Range | [Location](../classes/Location.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Event](../classes/Event.md) |
| Slot URI | [schema:location](http://schema.org/location) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:location |
| native | idhi:location |




## LinkML Source

<details>
```yaml
name: location
description: Where the organization, facility or event is physically situated.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:location
domain_of:
- Organization
- Facility
- Event
range: Location

```
</details></div>