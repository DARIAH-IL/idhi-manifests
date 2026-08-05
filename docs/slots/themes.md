---
search:
  boost: 5.0
---

# Slot: themes 


_Thematic keywords for the dataset, multilingual._



<div data-search-exclude markdown="1">



URI: [dcat:theme](http://www.w3.org/ns/dcat#theme)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Dataset](../classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Dataset](../classes/Dataset.md) |
| Slot URI | [dcat:theme](http://www.w3.org/ns/dcat#theme) |

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
| self | dcat:theme |
| native | idhi:themes |




## LinkML Source

<details>
```yaml
name: themes
description: Thematic keywords for the dataset, multilingual.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcat:theme
domain_of:
- Dataset
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>