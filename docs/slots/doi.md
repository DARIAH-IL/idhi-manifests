---
search:
  boost: 5.0
---

# Slot: doi 


_The publication, dataset, tool or training material's DOI persistent identifier. Record it whenever one exists; it is the preferred deduplication key and is supplementary to the IDHI URN._



<div data-search-exclude markdown="1">



URI: [bibo:doi](http://purl.org/ontology/bibo/doi)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |
| [Publication](../classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |  no  |
| [Dataset](../classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Tool](../classes/Tool.md), [Publication](../classes/Publication.md), [Dataset](../classes/Dataset.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [bibo:doi](http://purl.org/ontology/bibo/doi) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
<details>
<summary>Additional Constraints</summary>
**Structured Pattern:**

- **Syntax:** `https://doi.org/{doi}`
- **Interpolated:** True

</details>











## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | bibo:doi |
| native | idhi:doi |




## LinkML Source

<details>
```yaml
name: doi
description: The publication, dataset, tool or training material's DOI persistent
  identifier. Record it whenever one exists; it is the preferred deduplication key
  and is supplementary to the IDHI URN.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: bibo:doi
domain_of:
- Tool
- Publication
- Dataset
- TrainingMaterial
range: uri
structured_pattern:
  syntax: https://doi.org/{doi}
  interpolated: true

```
</details></div>