---
search:
  boost: 2.0
---

# Enum: EventAgentRoleEnum 




_IDHI-governed roles for people and organizations involved in events. Choose the most specific role and use separate EventAgentRole instances for multiple capacities._



<div data-search-exclude markdown="1">

URI: [idhi:enum/EventAgentRoleEnum](https://idhi_placeholder/linkml/enum/EventAgentRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| ORGANIZER | [schema:organizer](http://schema.org/organizer) | <span title="Plans or administers the event; use HOST for the institution providing the venue or institutional home.">Plans or administers the event; use HOST for the institution providing the ve...</span> |
| HOST | None | <span title="Provides the event's venue or institutional home without necessarily organizing its programme. No established controlled concept precisely distinguishes this role from organizer.">Provides the event's venue or institutional home without necessarily organizi...</span> |
| SPEAKER | None | <span title="Delivers a lecture, presentation or other individual spoken contribution; use PANELIST for participation in a panel discussion.">Delivers a lecture, presentation or other individual spoken contribution; use...</span> |
| PANELIST | None | <span title="Participates as a named member of a panel; use SPEAKER for a standalone talk and PARTICIPANT for another active capacity.">Participates as a named member of a panel; use SPEAKER for a standalone talk ...</span> |
| PARTICIPANT | [schema:attendee](http://schema.org/attendee) | <span title="Takes an active named part in the event when no more specific organizer, host, speaker or panelist role applies; do not use for unrecorded general attendance.">Takes an active named part in the event when no more specific organizer, host...</span> |
| SPONSOR | [schema:sponsor](http://schema.org/sponsor) | <span title="Provides financial or material sponsorship for the event; use ORGANIZER when the same agent also administers the event.">Provides financial or material sponsorship for the event; use ORGANIZER when ...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [event_agent_role](../slots/event_agent_role.md) | <span title="The capacity in which the agent is involved in the containing event. Choose the most specific applicable role and create separate relationships when the same agent has multiple roles.">The capacity in which the agent is involved in the containing event</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: EventAgentRoleEnum
description: IDHI-governed roles for people and organizations involved in events.
  Choose the most specific role and use separate EventAgentRole instances for multiple
  capacities.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  ORGANIZER:
    text: ORGANIZER
    description: Plans or administers the event; use HOST for the institution providing
      the venue or institutional home.
    meaning: schema:organizer
  HOST:
    text: HOST
    description: Provides the event's venue or institutional home without necessarily
      organizing its programme. No established controlled concept precisely distinguishes
      this role from organizer.
  SPEAKER:
    text: SPEAKER
    description: Delivers a lecture, presentation or other individual spoken contribution;
      use PANELIST for participation in a panel discussion.
  PANELIST:
    text: PANELIST
    description: Participates as a named member of a panel; use SPEAKER for a standalone
      talk and PARTICIPANT for another active capacity.
  PARTICIPANT:
    text: PARTICIPANT
    description: Takes an active named part in the event when no more specific organizer,
      host, speaker or panelist role applies; do not use for unrecorded general attendance.
    meaning: schema:attendee
  SPONSOR:
    text: SPONSOR
    description: Provides financial or material sponsorship for the event; use ORGANIZER
      when the same agent also administers the event.
    meaning: schema:sponsor

```
</details>

</div>