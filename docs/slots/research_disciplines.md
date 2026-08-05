---
search:
  boost: 5.0
---

# Slot: research_disciplines 


_Humanities discipline(s) of the project (history, linguistics, archaeology...). Free multilingual text for now; a controlled vocabulary is a planned upgrade._



<div data-search-exclude markdown="1">



URI: [dcterms:subject](http://purl.org/dc/terms/subject)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Project](../classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [LangString](../classes/LangString.md) |
| Domain Of | [Project](../classes/Project.md) |
| Slot URI | [dcterms:subject](http://purl.org/dc/terms/subject) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcterms:subject |
| native | idhi:research_disciplines |




## LinkML Source

<details>
```yaml
name: research_disciplines
description: Humanities discipline(s) of the project (history, linguistics, archaeology...).
  Free multilingual text for now; a controlled vocabulary is a planned upgrade.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: dcterms:subject
domain_of:
- Project
range: LangString
multivalued: true
inlined: true
inlined_as_list: true

```
</details></div>