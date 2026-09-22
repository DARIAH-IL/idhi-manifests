---
search:
  boost: 5.0
---

# Slot: unit 


_Localized labels for the unit of an Extent quantity, such as byte, record, image, file or hour. Use one LangString per available language, prefer a concise singular unit label rather than a sentence, and keep qualifications in the Dataset description or another extent measure._



<div data-search-exclude markdown="1">



URI: [schema:unitText](http://schema.org/unitText)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Extent](../classes/Extent.md) | A quantitative measure of a dataset's size or scope, expressed as a numeric q... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Extent](../classes/Extent.md) |
| Slot URI | [schema:unitText](http://schema.org/unitText) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Required | Yes |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:unitText |
| native | idhi:unit |




## LinkML Source

<details>
```yaml
name: unit
description: Localized labels for the unit of an Extent quantity, such as byte, record,
  image, file or hour. Use one LangString per available language, prefer a concise
  singular unit label rather than a sentence, and keep qualifications in the Dataset
  description or another extent measure.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:unitText
domain_of:
- Extent
range: LangString
required: true
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>