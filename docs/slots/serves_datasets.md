---
search:
  boost: 5.0
---

# Slot: serves_datasets 


_Datasets this tool provides access to — the catalog, corpus, database or gazetteer that its browse interface, query endpoint or API exposes (by IDHI URN). Use it whenever the same content is registered twice, once as the data and once as the software over it, so a library catalog's search interface points at the catalog Dataset rather than being modeled as a dataset itself. Use Project.uses_datasets for data a project merely consumes, Dataset.datasets for catalog aggregation and Dataset.derived_from for dataset-to-dataset provenance._



<div data-search-exclude markdown="1">



URI: [dcat:servesDataset](http://www.w3.org/ns/dcat#servesDataset)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Tool](../classes/Tool.md) | A reusable software tool, typically produced by a project |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Dataset](../classes/Dataset.md) |
| Domain Of | [Tool](../classes/Tool.md) |
| Slot URI | [dcat:servesDataset](http://www.w3.org/ns/dcat#servesDataset) |

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
| self | dcat:servesDataset |
| native | idhi:serves_datasets |




## LinkML Source

<details>
```yaml
name: serves_datasets
description: Datasets this tool provides access to — the catalog, corpus, database
  or gazetteer that its browse interface, query endpoint or API exposes (by IDHI URN).
  Use it whenever the same content is registered twice, once as the data and once
  as the software over it, so a library catalog's search interface points at the catalog
  Dataset rather than being modeled as a dataset itself. Use Project.uses_datasets
  for data a project merely consumes, Dataset.datasets for catalog aggregation and
  Dataset.derived_from for dataset-to-dataset provenance.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: dcat:servesDataset
domain_of:
- Tool
range: Dataset
multivalued: true

```
</details></div>