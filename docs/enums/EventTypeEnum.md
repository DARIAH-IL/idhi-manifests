---
search:
  boost: 2.0
---


# Enum: EventTypeEnum 




_Kinds of scholarly events._



<div data-search-exclude markdown="1">

URI: [idhi:enum/EventTypeEnum](https://idhi.co.il/linkml/enum/EventTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| CONFERENCE | bibo:Conference | A multi-session academic conference |
| WORKSHOP | None | A hands-on or small-group working meeting |
| SEMINAR | None | A recurring or one-off academic seminar session |
| LECTURE | None | A single public or academic talk |
| HACKATHON | None | A time-boxed collaborative building event |
| EXHIBITION | None | A curated public display (physical or digital) |




## Slots

| Name | Description |
| ---  | --- |
| [event_type](../slots/event_type.md) | The kind of scholarly event |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi






## LinkML Source

<details>
```yaml
name: EventTypeEnum
description: Kinds of scholarly events.
from_schema: https://idhi.co.il/linkml/idhi
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