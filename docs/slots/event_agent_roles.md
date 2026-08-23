---
search:
  boost: 5.0
---

# Slot: event_agent_roles 


_People and organizations involved in the containing event, with their role and optional relationship dates. Define each involvement only on the Event; use Publication.authorships for authorship and presented_at for the event at which a publication was presented._



<div data-search-exclude markdown="1">



URI: [schema:participant](http://schema.org/participant)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Event](../classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [EventAgentRole](../classes/EventAgentRole.md) |
| Domain Of | [Event](../classes/Event.md) |
| Slot URI | [schema:participant](http://schema.org/participant) |

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
| self | schema:participant |
| native | idhi:event_agent_roles |




## LinkML Source

<details>
```yaml
name: event_agent_roles
description: People and organizations involved in the containing event, with their
  role and optional relationship dates. Define each involvement only on the Event;
  use Publication.authorships for authorship and presented_at for the event at which
  a publication was presented.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:participant
domain_of:
- Event
range: EventAgentRole
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>