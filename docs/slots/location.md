---
search:
  boost: 5.0
---

# Slot: location 


_Place name where the organization, facility or event is physically situated (e.g. a city), as free multilingual text._



<div data-search-exclude markdown="1">



URI: [schema:location](http://schema.org/location)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Organization](../classes/Organization.md) | An organization of any kind |  no  |
| [Facility](../classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |  no  |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Organization](../classes/Organization.md), [Facility](../classes/Facility.md), [Event](../classes/Event.md) |
| Slot URI | [schema:location](http://schema.org/location) |

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
| self | schema:location |
| native | idhi:location |




## LinkML Source

<details>
```yaml
name: location
description: Place name where the organization, facility or event is physically situated
  (e.g. a city), as free multilingual text.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:location
domain_of:
- Organization
- Facility
- Event
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>