---
search:
  boost: 5.0
---

# Slot: event_agent 


_The person or organization involved in the containing event (by IDHI URN). Use only in Event.event_agent_roles; do not duplicate the relationship on the Agent._



<div data-search-exclude markdown="1">



URI: [schema:agent](http://schema.org/agent)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [EventAgentRole](../classes/EventAgentRole.md) | A person or organization involved in the containing Event in a defined capaci... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Agent](../classes/Agent.md) |
| Domain Of | [EventAgentRole](../classes/EventAgentRole.md) |
| Slot URI | [schema:agent](http://schema.org/agent) |

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
| self | schema:agent |
| native | idhi:event_agent |




## LinkML Source

<details>
```yaml
name: event_agent
description: The person or organization involved in the containing event (by IDHI
  URN). Use only in Event.event_agent_roles; do not duplicate the relationship on
  the Agent.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:agent
domain_of:
- EventAgentRole
range: Agent
required: true

```
</details></div>