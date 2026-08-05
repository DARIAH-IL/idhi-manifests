---
search:
  boost: 2.0
---

# Enum: EventTypeEnum 




_Kinds of scholarly events._



<div data-search-exclude markdown="1">

URI: [idhi:enum/EventTypeEnum](https://idhi_placeholder/linkml/enum/EventTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| CONFERENCE | [bibo:Conference](http://purl.org/ontology/bibo/Conference) | <span title="A multi-session academic conference.">A multi-session academic conference</span> |
| WORKSHOP | None | <span title="A hands-on or small-group working meeting.">A hands-on or small-group working meeting</span> |
| SEMINAR | None | <span title="A recurring or one-off academic seminar session.">A recurring or one-off academic seminar session</span> |
| LECTURE | None | <span title="A single public or academic talk.">A single public or academic talk</span> |
| HACKATHON | None | <span title="A time-boxed collaborative building event.">A time-boxed collaborative building event</span> |
| EXHIBITION | None | <span title="A curated public display (physical or digital).">A curated public display (physical or digital)</span> |




## Slots

| Name | Description |
| ---  | --- |
| [event_type](../slots/event_type.md) | <span title="The kind of scholarly event.">The kind of scholarly event</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: EventTypeEnum
description: Kinds of scholarly events.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  CONFERENCE:
    text: CONFERENCE
    description: A multi-session academic conference.
    meaning: bibo:Conference
  WORKSHOP:
    text: WORKSHOP
    description: A hands-on or small-group working meeting.
  SEMINAR:
    text: SEMINAR
    description: A recurring or one-off academic seminar session.
  LECTURE:
    text: LECTURE
    description: A single public or academic talk.
  HACKATHON:
    text: HACKATHON
    description: A time-boxed collaborative building event.
  EXHIBITION:
    text: EXHIBITION
    description: A curated public display (physical or digital).

```
</details>

</div>