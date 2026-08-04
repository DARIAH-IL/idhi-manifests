---
search:
  boost: 10.0
---

# Class: Dataset 


_A dataset produced or curated by a project (DCAT Dataset): corpora, databases, image collections, annotation sets, etc._



<div data-search-exclude markdown="1">



URI: [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset)





```mermaid
 classDiagram
    class Dataset
    click Dataset href "../../classes/Dataset/"
      NamedThing <|-- Dataset
        click NamedThing href "../../classes/NamedThing/"
      
      Dataset : date_issued
        
      Dataset : description
        
          
    
        
        
        Dataset --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Dataset : distribution_url
        
      Dataset : homepage
        
      Dataset : id
        
      Dataset : identifiers
        
      Dataset : license
        
          
    
        
        
        Dataset --> "0..1" LicenseEnum : license
        click LicenseEnum href "../../enums/LicenseEnum/"
    

        
      Dataset : name
        
          
    
        
        
        Dataset --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Dataset : publisher
        
          
    
        
        
        Dataset --> "0..1" Organization : publisher
        click Organization href "../../classes/Organization/"
    

        
      Dataset : same_as
        
      Dataset : themes
        
          
    
        
        
        Dataset --> "*" LangString : themes
        click LangString href "../../classes/LangString/"
    

        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * **Dataset**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [publisher](../slots/publisher.md) | 0..1 <br/> [Organization](../classes/Organization.md) | The organization publishing the catalog, dataset or publication (by IDHI URN) | direct |
| [license](../slots/license.md) | 0..1 <br/> [LicenseEnum](../enums/LicenseEnum.md) | The license under which the tool or dataset is released | direct |
| [date_issued](../slots/date_issued.md) | 0..1 <br/> [Date](../types/Date.md) | Formal publication date (or year-01-01 if only the year is known) | direct |
| [distribution_url](../slots/distribution_url.md) | 0..1 <br/> [Uri](../types/Uri.md) | Direct download or access URL for the dataset | direct |
| [themes](../slots/themes.md) | * <br/> [LangString](../classes/LangString.md) | Thematic keywords for the catalog/dataset, multilingual | direct |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [NamedThing](../classes/NamedThing.md) |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | [NamedThing](../classes/NamedThing.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [NamedThing](../classes/NamedThing.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [NamedThing](../classes/NamedThing.md) |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | [NamedThing](../classes/NamedThing.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [NamedThing](../classes/NamedThing.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Project](../classes/Project.md) | [outputs_datasets](../slots/outputs_datasets.md) | range | [Dataset](../classes/Dataset.md) |
| [Catalog](../classes/Catalog.md) | [datasets](../slots/datasets.md) | range | [Dataset](../classes/Dataset.md) |
| [IndexContainer](../classes/IndexContainer.md) | [datasets](../slots/datasets.md) | range | [Dataset](../classes/Dataset.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






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
description: 'A dataset produced or curated by a project (DCAT Dataset): corpora,
  databases, image collections, annotation sets, etc.'
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slots:
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
description: 'A dataset produced or curated by a project (DCAT Dataset): corpora,
  databases, image collections, annotation sets, etc.'
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:dataset:{shortid}$
      interpolated: true
attributes:
  publisher:
    name: publisher
    description: The organization publishing the catalog, dataset or publication (by
      IDHI URN).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:publisher
    owner: Dataset
    domain_of:
    - Publication
    - Catalog
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
    description: Thematic keywords for the catalog/dataset, multilingual.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:theme
    owner: Dataset
    domain_of:
    - Catalog
    - Dataset
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  id:
    name: id
    description: "The entity's primary identifier: an IDHI URN of the form\n  idhi:<class\
      \ name>:<random short alphanumeric id>\ne.g. idhi:person:x7k2m9 or idhi:project:a83bq1.\
      \ Minted by IDHI at record creation and never reused or changed. The class token\
      \ is the lowercase snake_case class name (Organization subclasses use \"organization\"\
      ); each concrete class enforces its own token via slot_usage. External identifiers\
      \ (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never\
      \ here."
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:identifier
    identifier: true
    owner: Dataset
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:dataset:{shortid}$
      interpolated: true
  name:
    name: name
    description: Multilingual name/title. Provide at least one language; English,
      Hebrew and Arabic variants are each a separate LangString. Preferably a sortable
      name (e.g. "Smith, John" rather than "John Smith") for people and organizations;
      for projects, tools and services, use the name the team itself uses.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: skos:prefLabel
    owner: Dataset
    domain_of:
    - NamedThing
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  description:
    name: description
    description: Multilingual free-text description (a few sentences aimed at index
      visitors, not internal notes).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:description
    owner: Dataset
    domain_of:
    - NamedThing
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
    - NamedThing
    range: uri
  identifiers:
    name: identifiers
    description: Additional EXTERNAL identifiers beyond the primary IDHI URN and the
      dedicated ORCID/ROR/DOI slots, as CURIEs/URIs (e.g. Wikidata QIDs, VIAF, ISNI).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:identifier
    owner: Dataset
    domain_of:
    - NamedThing
    range: uriorcurie
    multivalued: true
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
    - NamedThing
    range: uri
    multivalued: true
class_uri: dcat:Dataset

```
</details></div>