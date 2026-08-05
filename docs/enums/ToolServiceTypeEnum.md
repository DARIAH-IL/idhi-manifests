---
search:
  boost: 2.0
---

# Enum: ToolServiceTypeEnum 




_Delivery forms for tools and kinds of services. Tool records use the software values; Service records use the service values._



<div data-search-exclude markdown="1">

URI: [idhi:enum/ToolServiceTypeEnum](https://idhi_placeholder/linkml/enum/ToolServiceTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| WEB_APPLICATION | [schema:WebApplication](http://schema.org/WebApplication) | Software used through a browser |
| DESKTOP_APPLICATION | None | Software installed on a user's machine |
| LIBRARY | None | A code library/package imported by other software |
| COMMAND_LINE_TOOL | None | Software operated from a terminal |
| DATABASE | None | A queryable data system offered as a tool |
| API_SERVICE | None | A programmatic service accessed over the network |
| DIGITIZATION_SERVICE | None | Human-mediated digitization (scanning, imaging, OCR) |
| CONSULTING_SERVICE | None | Human-mediated expertise (methods, data, tech advice) |




## Slots

| Name | Description |
| ---  | --- |
| [tool_type](../slots/tool_type.md) | The delivery form of the tool (web app, library, CLI |
| [service_type](../slots/service_type.md) | The kind of service offered (digitization, consulting |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: ToolServiceTypeEnum
description: Delivery forms for tools and kinds of services. Tool records use the
  software values; Service records use the service values.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  WEB_APPLICATION:
    text: WEB_APPLICATION
    description: Software used through a browser.
    meaning: schema:WebApplication
  DESKTOP_APPLICATION:
    text: DESKTOP_APPLICATION
    description: Software installed on a user's machine.
  LIBRARY:
    text: LIBRARY
    description: A code library/package imported by other software.
  COMMAND_LINE_TOOL:
    text: COMMAND_LINE_TOOL
    description: Software operated from a terminal.
  DATABASE:
    text: DATABASE
    description: A queryable data system offered as a tool.
  API_SERVICE:
    text: API_SERVICE
    description: A programmatic service accessed over the network.
  DIGITIZATION_SERVICE:
    text: DIGITIZATION_SERVICE
    description: Human-mediated digitization (scanning, imaging, OCR).
  CONSULTING_SERVICE:
    text: CONSULTING_SERVICE
    description: Human-mediated expertise (methods, data, tech advice).

```
</details>

</div>