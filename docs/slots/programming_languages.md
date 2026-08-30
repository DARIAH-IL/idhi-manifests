---
search:
  boost: 5.0
---

# Slot: programming_languages 


_Implementation languages, as technical labels such as Python or JavaScript. Use one value for each language in which the tool is implemented; do not use this slot for natural languages supported by the tool._



<div data-search-exclude markdown="1">



URI: [schema:programmingLanguage](http://schema.org/programmingLanguage)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [Tool](../classes/Tool.md) |
| Slot URI | [schema:programmingLanguage](http://schema.org/programmingLanguage) |

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
| self | schema:programmingLanguage |
| native | idhi:programming_languages |




## LinkML Source

<details>
```yaml
name: programming_languages
description: Implementation languages, as technical labels such as Python or JavaScript.
  Use one value for each language in which the tool is implemented; do not use this
  slot for natural languages supported by the tool.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:programmingLanguage
domain_of:
- Tool
range: string
multivalued: true

```
</details></div>