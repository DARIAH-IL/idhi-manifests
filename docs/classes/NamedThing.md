---
search:
  boost: 10.0
---

# Class: NamedThing 


_Root class for any identifiable IDHI entity. Provides the IDHI URN id, multilingual name/description, homepage and alternate identifiers. Never instantiated directly; every concrete entity inherits from it and constrains the id's class token via slot_usage._



<div data-search-exclude markdown="1">


* __NOTE__: this is an abstract class and should not be instantiated directly


URI: [schema:Thing](http://schema.org/Thing)





```mermaid
 classDiagram
    class NamedThing
    click NamedThing href "../../classes/NamedThing/"
      NamedThing <|-- Agent
        click Agent href "../../classes/Agent/"
      NamedThing <|-- Facility
        click Facility href "../../classes/Facility/"
      NamedThing <|-- Project
        click Project href "../../classes/Project/"
      NamedThing <|-- Tool
        click Tool href "../../classes/Tool/"
      NamedThing <|-- Service
        click Service href "../../classes/Service/"
      NamedThing <|-- Publication
        click Publication href "../../classes/Publication/"
      NamedThing <|-- Event
        click Event href "../../classes/Event/"
      NamedThing <|-- Location
        click Location href "../../classes/Location/"
      NamedThing <|-- TimePeriod
        click TimePeriod href "../../classes/TimePeriod/"
      NamedThing <|-- Catalog
        click Catalog href "../../classes/Catalog/"
      NamedThing <|-- Dataset
        click Dataset href "../../classes/Dataset/"
      
      NamedThing : description
        
          
    
        
        
        NamedThing --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      NamedThing : homepage
        
      NamedThing : id
        
      NamedThing : identifiers
        
      NamedThing : name
        
          
    
        
        
        NamedThing --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      NamedThing : same_as
        
      
```





## Inheritance
* **NamedThing**
    * [Agent](../classes/Agent.md)
    * [Facility](../classes/Facility.md)
    * [Project](../classes/Project.md)
    * [Tool](../classes/Tool.md)
    * [Service](../classes/Service.md)
    * [Publication](../classes/Publication.md)
    * [Event](../classes/Event.md)
    * [Location](../classes/Location.md)
    * [TimePeriod](../classes/TimePeriod.md)
    * [Catalog](../classes/Catalog.md)
    * [Dataset](../classes/Dataset.md)


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Thing](http://schema.org/Thing) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | direct |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | direct |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | direct |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | direct |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | direct |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | direct |















## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Thing |
| native | idhi:NamedThing |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: NamedThing
description: Root class for any identifiable IDHI entity. Provides the IDHI URN id,
  multilingual name/description, homepage and alternate identifiers. Never instantiated
  directly; every concrete entity inherits from it and constrains the id's class token
  via slot_usage.
from_schema: https://idhi.co.il/linkml/idhi
abstract: true
slots:
- id
- name
- description
- homepage
- identifiers
- same_as
class_uri: schema:Thing

```
</details>

### Induced

<details>
```yaml
name: NamedThing
description: Root class for any identifiable IDHI entity. Provides the IDHI URN id,
  multilingual name/description, homepage and alternate identifiers. Never instantiated
  directly; every concrete entity inherits from it and constrains the id's class token
  via slot_usage.
from_schema: https://idhi.co.il/linkml/idhi
abstract: true
attributes:
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
    owner: NamedThing
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
  name:
    name: name
    description: Multilingual name/title. Provide at least one language; English,
      Hebrew and Arabic variants are each a separate LangString. Preferably a sortable
      name (e.g. "Smith, John" rather than "John Smith") for people and organizations;
      for projects, tools and services, use the name the team itself uses.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: skos:prefLabel
    owner: NamedThing
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
    owner: NamedThing
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
    owner: NamedThing
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
    owner: NamedThing
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
    owner: NamedThing
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: schema:Thing

```
</details></div>