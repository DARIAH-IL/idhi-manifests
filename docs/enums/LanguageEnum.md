---
search:
  boost: 2.0
---

# Enum: LanguageEnum 




_Languages supported for free-text fields (BCP-47 tags)._



<div data-search-exclude markdown="1">

URI: [idhi:enum/LanguageEnum](https://idhi_placeholder/linkml/enum/LanguageEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| en | None | English |
| he | None | Hebrew |
| ar | None | Arabic |




## Slots

| Name | Description |
| ---  | --- |
| [language](../slots/language.md) | <span title="BCP-47 language tag of the value (en, he or ar).">BCP-47 language tag of the value (en, he or ar)</span> |
| [in_languages](../slots/in_languages.md) | <span title="Languages in which the instructional content is available. Record every complete language version; do not include a language used only in captions or examples.">Languages in which the instructional content is available</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: LanguageEnum
description: Languages supported for free-text fields (BCP-47 tags).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  en:
    text: en
    description: English
  he:
    text: he
    description: Hebrew
  ar:
    text: ar
    description: Arabic

```
</details>

</div>