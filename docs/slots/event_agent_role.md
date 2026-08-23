---
search:
  boost: 5.0
---

# Slot: event_agent_role 


_The capacity in which the agent is involved in the containing event. Choose the most specific applicable role and create separate relationships when the same agent has multiple roles._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [EventAgentRole](../classes/EventAgentRole.md) | A person or organization involved in the containing Event in a defined capaci... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [EventAgentRoleEnum](../enums/EventAgentRoleEnum.md) |
| Domain Of | [EventAgentRole](../classes/EventAgentRole.md) |
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
| native | idhi:event_agent_role |




## LinkML Source

<details>
```yaml
name: event_agent_role
description: The capacity in which the agent is involved in the containing event.
  Choose the most specific applicable role and create separate relationships when
  the same agent has multiple roles.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- EventAgentRole
range: EventAgentRoleEnum
required: true

```
</details></div>