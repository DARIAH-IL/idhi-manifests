---
search:
  boost: 5.0
---

# Slot: value 


_A localized text, in the language given by 'language'._



<div data-search-exclude markdown="1">



URI: [rdf:value](http://www.w3.org/1999/02/22-rdf-syntax-ns#value)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [LangString](../classes/LangString.md) | A single language-tagged text value |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [String](../types/String.md) |
| Domain Of | [LangString](../classes/LangString.md) |
| Slot URI | [rdf:value](http://www.w3.org/1999/02/22-rdf-syntax-ns#value) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | rdf:value |
| native | idhi:value |




## LinkML Source

<details>
```yaml
name: value
description: A localized text, in the language given by 'language'.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: rdf:value
domain_of:
- LangString
range: string
required: true

```
</details></div>