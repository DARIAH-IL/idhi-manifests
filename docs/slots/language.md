---
search:
  boost: 5.0
---

# Slot: language 


_BCP-47 language tag of the value (en, he or ar)._



<div data-search-exclude markdown="1">



URI: [dcterms:language](http://purl.org/dc/terms/language)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [LangString](../classes/LangString.md) | A single language-tagged text value |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LanguageEnum](../enums/LanguageEnum.md) |
| Domain Of | [LangString](../classes/LangString.md) |
| Slot URI | [dcterms:language](http://purl.org/dc/terms/language) |

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
| self | dcterms:language |
| native | idhi:language |




## LinkML Source

<details>
```yaml
name: language
description: BCP-47 language tag of the value (en, he or ar).
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:language
domain_of:
- LangString
range: LanguageEnum
required: true

```
</details></div>