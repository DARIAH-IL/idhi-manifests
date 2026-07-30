---
search:
  boost: 5.0
---

# Slot: event_type 


_The kind of scholarly event._



<div data-search-exclude markdown="1">



URI: [dcterms:type](http://purl.org/dc/terms/type)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [EventTypeEnum](../enums/EventTypeEnum.md) |
| Domain Of | [Event](../classes/Event.md) |
| Slot URI | [dcterms:type](http://purl.org/dc/terms/type) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:type |
| native | idhi:event_type |




## LinkML Source

<details>
```yaml
name: event_type
description: The kind of scholarly event.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:type
domain_of:
- Event
range: EventTypeEnum

```
</details></div>