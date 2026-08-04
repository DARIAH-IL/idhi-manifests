---
search:
  boost: 10.0
---

# Class: Catalog 


_A digital archive / catalog of resources (DCAT Catalog), i.e. a curated collection of datasets and records with its own identity, such as a digital archive portal._



<div data-search-exclude markdown="1">



URI: [dcat:Catalog](http://www.w3.org/ns/dcat#Catalog)





```mermaid
 classDiagram
    class Catalog
    click Catalog href "../../classes/Catalog/"
      NamedThing <|-- Catalog
        click NamedThing href "../../classes/NamedThing/"
      
      Catalog : datasets
        
          
    
        
        
        Catalog --> "*" Dataset : datasets
        click Dataset href "../../classes/Dataset/"
    

        
      Catalog : description
        
          
    
        
        
        Catalog --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Catalog : homepage
        
      Catalog : id
        
      Catalog : identifiers
        
      Catalog : name
        
          
    
        
        
        Catalog --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Catalog : publisher
        
          
    
        
        
        Catalog --> "0..1" Organization : publisher
        click Organization href "../../classes/Organization/"
    

        
      Catalog : same_as
        
      Catalog : themes
        
          
    
        
        
        Catalog --> "*" LangString : themes
        click LangString href "../../classes/LangString/"
    

        
      Catalog : type
        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * **Catalog**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [dcat:Catalog](http://www.w3.org/ns/dcat#Catalog) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [datasets](../slots/datasets.md) | * <br/> [Dataset](../classes/Dataset.md) | The datasets this catalog aggregates (by id) | direct |
| [publisher](../slots/publisher.md) | 0..1 <br/> [Organization](../classes/Organization.md) | The organization publishing the catalog, dataset or publication (by IDHI URN) | direct |
| [themes](../slots/themes.md) | * <br/> [LangString](../classes/LangString.md) | Thematic keywords for the catalog/dataset, multilingual | direct |
| [type](../slots/type.md) | 1 <br/> [Uriorcurie](../types/Uriorcurie.md) | Discriminator carrying the class URI; used for polymorphic serialization and ... | [NamedThing](../classes/NamedThing.md) |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [NamedThing](../classes/NamedThing.md) |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | [NamedThing](../classes/NamedThing.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [NamedThing](../classes/NamedThing.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [NamedThing](../classes/NamedThing.md) |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | [NamedThing](../classes/NamedThing.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [NamedThing](../classes/NamedThing.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [IndexContainer](../classes/IndexContainer.md) | [catalogs](../slots/catalogs.md) | range | [Catalog](../classes/Catalog.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | dcat:Catalog |
| native | idhi:Catalog |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Catalog
description: A digital archive / catalog of resources (DCAT Catalog), i.e. a curated
  collection of datasets and records with its own identity, such as a digital archive
  portal.
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slots:
- datasets
- publisher
- themes
slot_usage:
  type:
    name: type
    equals_string: idhi:Catalog
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:catalog:{shortid}$
      interpolated: true
class_uri: dcat:Catalog

```
</details>

### Induced

<details>
```yaml
name: Catalog
description: A digital archive / catalog of resources (DCAT Catalog), i.e. a curated
  collection of datasets and records with its own identity, such as a digital archive
  portal.
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slot_usage:
  type:
    name: type
    equals_string: idhi:Catalog
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:catalog:{shortid}$
      interpolated: true
attributes:
  datasets:
    name: datasets
    description: The datasets this catalog aggregates (by id).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:dataset
    owner: Catalog
    domain_of:
    - Catalog
    - IndexContainer
    range: Dataset
    multivalued: true
  publisher:
    name: publisher
    description: The organization publishing the catalog, dataset or publication (by
      IDHI URN).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:publisher
    owner: Catalog
    domain_of:
    - Publication
    - Catalog
    - Dataset
    range: Organization
  themes:
    name: themes
    description: Thematic keywords for the catalog/dataset, multilingual.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcat:theme
    owner: Catalog
    domain_of:
    - Catalog
    - Dataset
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  type:
    name: type
    description: Discriminator carrying the class URI; used for polymorphic serialization
      and deserialization.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: rdf:type
    owner: Catalog
    domain_of:
    - NamedThing
    range: uriorcurie
    required: true
    equals_string: idhi:Catalog
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
    owner: Catalog
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:catalog:{shortid}$
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
    owner: Catalog
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
    owner: Catalog
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
    owner: Catalog
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
    owner: Catalog
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
    owner: Catalog
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: dcat:Catalog

```
</details></div>