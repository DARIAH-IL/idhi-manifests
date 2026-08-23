---
search:
  boost: 2.0
---

# Enum: DatasetTypeEnum 




_IDHI-governed discovery categories for datasets and dataset-like intellectual objects. Choose the primary form and use tags for secondary characteristics._



<div data-search-exclude markdown="1">

URI: [idhi:enum/DatasetTypeEnum](https://idhi_placeholder/linkml/enum/DatasetTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| DIGITAL_EDITION | None | <span title="A scholarly or documentary edition whose edited texts, apparatus or aligned versions are delivered digitally; use CORPUS for a collection intended primarily for analysis rather than editorial presentation.">A scholarly or documentary edition whose edited texts, apparatus or aligned v...</span> |
| CORPUS | None | <span title="A curated collection of texts, images, recordings or records assembled primarily for research or computational analysis; use IMAGE_COLLECTION when images are the defining intellectual form.">A curated collection of texts, images, recordings or records assembled primar...</span> |
| DATABASE | None | <span title="Structured records designed primarily for querying and ongoing data management; use GAZETTEER for place-centered authority data and METADATA_CATALOG for records describing other resources.">Structured records designed primarily for querying and ongoing data managemen...</span> |
| GAZETTEER | None | <span title="Structured place-name or geographic authority data connecting names, places and often historical attestations; use DATABASE for non-geographic structured data.">Structured place-name or geographic authority data connecting names, places a...</span> |
| IMAGE_COLLECTION | None | <span title="A curated collection whose primary research objects are digital images; use CORPUS when images are one modality in an analytically assembled corpus.">A curated collection whose primary research objects are digital images; use C...</span> |
| ANNOTATION_SET | None | <span title="Standalone annotations, labels or enrichments applied to other data; use CORPUS when annotations are inseparable from the primary collected content.">Standalone annotations, labels or enrichments applied to other data; use CORP...</span> |
| METADATA_CATALOG | None | <span title="Metadata records whose primary purpose is to describe or aggregate other resources; use datasets to link the datasets it catalogs and DATABASE for non-catalog structured records.">Metadata records whose primary purpose is to describe or aggregate other reso...</span> |
| OTHER_RESEARCH_DATA | None | <span title="Research data that fits none of the more specific forms; use only after the digital-edition, corpus, database, gazetteer, image-collection, annotation-set and metadata-catalog values have been considered.">Research data that fits none of the more specific forms; use only after the d...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [dataset_type](../slots/dataset_type.md) | <span title="The dataset's primary intellectual or collection form. Use this for discovery categories such as digital edition, corpus or gazetteer; use media_type for its technical serialization.">The dataset's primary intellectual or collection form</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: DatasetTypeEnum
description: IDHI-governed discovery categories for datasets and dataset-like intellectual
  objects. Choose the primary form and use tags for secondary characteristics.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  DIGITAL_EDITION:
    text: DIGITAL_EDITION
    description: A scholarly or documentary edition whose edited texts, apparatus
      or aligned versions are delivered digitally; use CORPUS for a collection intended
      primarily for analysis rather than editorial presentation.
  CORPUS:
    text: CORPUS
    description: A curated collection of texts, images, recordings or records assembled
      primarily for research or computational analysis; use IMAGE_COLLECTION when
      images are the defining intellectual form.
  DATABASE:
    text: DATABASE
    description: Structured records designed primarily for querying and ongoing data
      management; use GAZETTEER for place-centered authority data and METADATA_CATALOG
      for records describing other resources.
  GAZETTEER:
    text: GAZETTEER
    description: Structured place-name or geographic authority data connecting names,
      places and often historical attestations; use DATABASE for non-geographic structured
      data.
  IMAGE_COLLECTION:
    text: IMAGE_COLLECTION
    description: A curated collection whose primary research objects are digital images;
      use CORPUS when images are one modality in an analytically assembled corpus.
  ANNOTATION_SET:
    text: ANNOTATION_SET
    description: Standalone annotations, labels or enrichments applied to other data;
      use CORPUS when annotations are inseparable from the primary collected content.
  METADATA_CATALOG:
    text: METADATA_CATALOG
    description: Metadata records whose primary purpose is to describe or aggregate
      other resources; use datasets to link the datasets it catalogs and DATABASE
      for non-catalog structured records.
  OTHER_RESEARCH_DATA:
    text: OTHER_RESEARCH_DATA
    description: Research data that fits none of the more specific forms; use only
      after the digital-edition, corpus, database, gazetteer, image-collection, annotation-set
      and metadata-catalog values have been considered.

```
</details>

</div>