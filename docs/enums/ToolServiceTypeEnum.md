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
| WEB_APPLICATION | [schema:WebApplication](http://schema.org/WebApplication) | <span title="Software used through a browser.">Software used through a browser</span> |
| DESKTOP_APPLICATION | None | <span title="Software installed on a user's machine.">Software installed on a user's machine</span> |
| LIBRARY | None | <span title="A code library/package imported by other software.">A code library/package imported by other software</span> |
| COMMAND_LINE_TOOL | None | <span title="Software operated from a terminal.">Software operated from a terminal</span> |
| DATABASE | None | <span title="A queryable data system offered as a tool.">A queryable data system offered as a tool</span> |
| API_SERVICE | None | <span title="A programmatic service accessed over the network.">A programmatic service accessed over the network</span> |
| DIGITIZATION_SERVICE | None | <span title="Human-mediated digitization (scanning, imaging, OCR).">Human-mediated digitization (scanning, imaging, OCR)</span> |
| CONSULTING_SERVICE | None | <span title="Human-mediated expertise (methods, data, tech advice).">Human-mediated expertise (methods, data, tech advice)</span> |




## Slots

| Name | Description |
| ---  | --- |
| [tool_type](../slots/tool_type.md) | <span title="The delivery form of the tool (web app, library, CLI...). Pick the single value describing how users primarily consume it.">The delivery form of the tool (web app, library, CLI</span> |
| [service_type](../slots/service_type.md) | <span title="The kind of service offered (digitization, consulting...).">The kind of service offered (digitization, consulting</span> |










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