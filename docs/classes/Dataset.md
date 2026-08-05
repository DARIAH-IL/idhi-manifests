---
search:
  boost: 10.0
---

# Class: Dataset 


_A dataset, digital archive or catalog produced or curated by a project: corpora, databases, image collections, annotation sets and collections of metadata records. Use Dataset for both research data and catalogs that describe other resources; a catalog can link the datasets it aggregates through datasets._



<div data-search-exclude markdown="1">



URI: [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset)





```mermaid
 classDiagram
    class Dataset
    click Dataset href "../../classes/Dataset/"
      Entity <|-- Dataset
        click Entity href "../../classes/Entity/"
      
      Dataset : datasets
        
          
    
        
        
        Dataset --> "*" Dataset : datasets
        click Dataset href "../../classes/Dataset/"
    

        
      Dataset : date_issued
        
      Dataset : description
        
          
    
        
        
        Dataset --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Dataset : distribution_url
        
      Dataset : homepage
        
      Dataset : id
        
      Dataset : license
        
          
    
        
        
        Dataset --> "0..1" LicenseEnum : license
        click LicenseEnum href "../../enums/LicenseEnum/"
    

        
      Dataset : name
        
          
    
        
        
        Dataset --> "1..*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Dataset : publisher
        
          
    
        
        
        Dataset --> "0..1" Organization : publisher
        click Organization href "../../classes/Organization/"
    

        
      Dataset : same_as
        
      Dataset : tags
        
      Dataset : themes
        
          
    
        
        
        Dataset --> "*" LangString : themes
        click LangString href "../../classes/LangString/"
    

        
      Dataset : type
        
      
```





## Inheritance
* [Entity](../classes/Entity.md)
    * **Dataset**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [name](../slots/name.md) | 1..* <br/> [LangString](../classes/LangString.md) | Multilingual name/title | direct |
| [datasets](../slots/datasets.md) | * <br/> [Dataset](../classes/Dataset.md) | Datasets aggregated by a Dataset that functions as a catalog (by id) | direct |
| [publisher](../slots/publisher.md) | 0..1 <br/> [Organization](../classes/Organization.md) | The organization publishing the dataset or publication (by IDHI URN) | direct |
| [license](../slots/license.md) | 0..1 <br/> [LicenseEnum](../enums/LicenseEnum.md) | The license under which the tool or dataset is released | direct |
| [date_issued](../slots/date_issued.md) | 0..1 <br/> [Date](../types/Date.md) | Formal publication date (or year-01-01 if only the year is known) | direct |
| [distribution_url](../slots/distribution_url.md) | 0..1 <br/> [Uri](../types/Uri.md) | Direct download or access URL for the dataset | direct |
| [themes](../slots/themes.md) | * <br/> [LangString](../classes/LangString.md) | Thematic keywords for the dataset, multilingual | direct |
| [type](../slots/type.md) | 1 <br/> [Curie](../types/Curie.md) | Discriminator identifying the record's class; used for polymorphic serializat... | [Entity](../classes/Entity.md) |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [Entity](../classes/Entity.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [Entity](../classes/Entity.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [Entity](../classes/Entity.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [Entity](../classes/Entity.md) |
| [tags](../slots/tags.md) | * <br/> [String](../types/String.md) | Free-text tags for discovery, filtering and grouping; usable on any top-level... | [Entity](../classes/Entity.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Project](../classes/Project.md) | [outputs_datasets](../slots/outputs_datasets.md) | range | [Dataset](../classes/Dataset.md) |
| [Dataset](../classes/Dataset.md) | [datasets](../slots/datasets.md) | range | [Dataset](../classes/Dataset.md) |
| [IndexContainer](../classes/IndexContainer.md) | [datasets](../slots/datasets.md) | range | [Dataset](../classes/Dataset.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcat:Dataset |
| native | idhi:Dataset |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Dataset
description: 'A dataset, digital archive or catalog produced or curated by a project:
  corpora, databases, image collections, annotation sets and collections of metadata
  records. Use Dataset for both research data and catalogs that describe other resources;
  a catalog can link the datasets it aggregates through datasets.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: Entity
slots:
- name
- datasets
- publisher
- license
- date_issued
- distribution_url
- themes
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:dataset:{shortid}$
      interpolated: true
class_uri: dcat:Dataset

```
</details>

### Induced

<details>
```yaml
name: Dataset
description: 'A dataset, digital archive or catalog produced or curated by a project:
  corpora, databases, image collections, annotation sets and collections of metadata
  records. Use Dataset for both research data and catalogs that describe other resources;
  a catalog can link the datasets it aggregates through datasets.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: Entity
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:dataset:{shortid}$
      interpolated: true
attributes:
  name:
    name: name
    description: Multilingual name/title. Provide at least one language; English,
      Hebrew and Arabic variants are each a separate LangString. Preferably a sortable
      name for organizations; for projects, tools and services, use the name the team
      itself uses.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: skos:prefLabel
    owner: Dataset
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Publication
    - Event
    - Dataset
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
    minimum_cardinality: 1
  datasets:
    name: datasets
    description: Datasets aggregated by a Dataset that functions as a catalog (by
      id).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:dataset
    owner: Dataset
    domain_of:
    - Dataset
    - IndexContainer
    range: Dataset
    multivalued: true
  publisher:
    name: publisher
    description: The organization publishing the dataset or publication (by IDHI URN).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:publisher
    owner: Dataset
    domain_of:
    - Publication
    - Dataset
    range: Organization
  license:
    name: license
    description: The license under which the tool or dataset is released. Required
      for anything advertised as reusable; omit only if genuinely unknown.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:license
    owner: Dataset
    domain_of:
    - Tool
    - Dataset
    range: LicenseEnum
  date_issued:
    name: date_issued
    description: Formal publication date (or year-01-01 if only the year is known).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:issued
    owner: Dataset
    domain_of:
    - Publication
    - Dataset
    range: date
  distribution_url:
    name: distribution_url
    description: Direct download or access URL for the dataset.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:downloadURL
    owner: Dataset
    domain_of:
    - Dataset
    range: uri
  themes:
    name: themes
    description: Thematic keywords for the dataset, multilingual.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:theme
    owner: Dataset
    domain_of:
    - Dataset
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  type:
    name: type
    description: Discriminator identifying the record's class; used for polymorphic
      serialization and deserialization.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: rdf:type
    owner: Dataset
    domain_of:
    - Entity
    range: curie
    required: true
  id:
    name: id
    description: "The entity's primary identifier: an IDHI URN of the form\n  idhi:<class\
      \ name>:<random short alphanumeric id>\ne.g. idhi:person:x7k2m9 or idhi:project:a83bq1.\
      \ Minted by IDHI at record creation and never reused or changed. The class token\
      \ is the lowercase snake_case class name; each concrete class enforces its own\
      \ token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary\
      \ and go in their dedicated slots — never here."
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:identifier
    identifier: true
    owner: Dataset
    domain_of:
    - Entity
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:dataset:{shortid}$
      interpolated: true
  description:
    name: description
    description: Multilingual free-text description (a few sentences aimed at index
      visitors, not internal notes).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:description
    owner: Dataset
    domain_of:
    - Entity
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  homepage:
    name: homepage
    description: Public landing page of the entity, if one exists.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: foaf:homepage
    owner: Dataset
    domain_of:
    - Entity
    range: uri
  same_as:
    name: same_as
    description: URIs of records in OTHER systems describing the same real-world entity
      (Wikidata, PeriodO, GeoNames...). Use for linked-data alignment, not for the
      entity's own pages (use homepage).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:sameAs
    owner: Dataset
    domain_of:
    - Entity
    range: uri
    multivalued: true
  tags:
    name: tags
    description: Free-text tags for discovery, filtering and grouping; usable on any
      top-level entity. Deliberately NOT a controlled enum, but prefer wording that
      matches a concept in an established ontology or thesaurus (e.g. Wikidata, Getty
      AAT, TaDiRAH) so tags can later be reconciled against it.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:keyword
    owner: Dataset
    domain_of:
    - Entity
    range: string
    multivalued: true
class_uri: dcat:Dataset

```
</details></div>