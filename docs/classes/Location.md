---
search:
  boost: 10.0
---

# Class: Location 


_A place, optionally with geographic coordinates. Used both for where things ARE (org/facility/event location) and for places STUDIED by a project (studied_places)._



<div data-search-exclude markdown="1">



URI: [schema:Place](http://schema.org/Place)





```mermaid
 classDiagram
    class Location
    click Location href "../../classes/Location/"
      NamedThing <|-- Location
        click NamedThing href "../../classes/NamedThing/"
      
      Location : address
        
          
    
        
        
        Location --> "*" LangString : address
        click LangString href "../../classes/LangString/"
    

        
      Location : description
        
          
    
        
        
        Location --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Location : homepage
        
      Location : id
        
      Location : identifiers
        
      Location : latitude
        
      Location : longitude
        
      Location : name
        
          
    
        
        
        Location --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Location : same_as
        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * **Location**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Place](http://schema.org/Place) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [latitude](../slots/latitude.md) | 0..1 <br/> [Float](../types/Float.md) | WGS84 latitude in decimal degrees | direct |
| [longitude](../slots/longitude.md) | 0..1 <br/> [Float](../types/Float.md) | WGS84 longitude in decimal degrees | direct |
| [address](../slots/address.md) | * <br/> [LangString](../classes/LangString.md) | Postal address, multilingual | direct |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [NamedThing](../classes/NamedThing.md) |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | [NamedThing](../classes/NamedThing.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [NamedThing](../classes/NamedThing.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [NamedThing](../classes/NamedThing.md) |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | [NamedThing](../classes/NamedThing.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [NamedThing](../classes/NamedThing.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Organization](../classes/Organization.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [AcademicInstitution](../classes/AcademicInstitution.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [GLAMInstitution](../classes/GLAMInstitution.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [ResearchCenter](../classes/ResearchCenter.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [Funder](../classes/Funder.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [Company](../classes/Company.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [NonProfit](../classes/NonProfit.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [Facility](../classes/Facility.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [Project](../classes/Project.md) | [studied_places](../slots/studied_places.md) | range | [Location](../classes/Location.md) |
| [Event](../classes/Event.md) | [location](../slots/location.md) | range | [Location](../classes/Location.md) |
| [IndexContainer](../classes/IndexContainer.md) | [locations](../slots/locations.md) | range | [Location](../classes/Location.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Place |
| native | idhi:Location |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Location
description: A place, optionally with geographic coordinates. Used both for where
  things ARE (org/facility/event location) and for places STUDIED by a project (studied_places).
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slots:
- latitude
- longitude
- address
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:location:{shortid}$
      interpolated: true
class_uri: schema:Place

```
</details>

### Induced

<details>
```yaml
name: Location
description: A place, optionally with geographic coordinates. Used both for where
  things ARE (org/facility/event location) and for places STUDIED by a project (studied_places).
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:location:{shortid}$
      interpolated: true
attributes:
  latitude:
    name: latitude
    description: WGS84 latitude in decimal degrees.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: wgs84:lat
    owner: Location
    domain_of:
    - Location
    range: float
  longitude:
    name: longitude
    description: WGS84 longitude in decimal degrees.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: wgs84:long
    owner: Location
    domain_of:
    - Location
    range: float
  address:
    name: address
    description: Postal address, multilingual.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:address
    owner: Location
    domain_of:
    - Location
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
    owner: Location
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:location:{shortid}$
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
    owner: Location
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
    owner: Location
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
    owner: Location
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
    owner: Location
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
    owner: Location
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: schema:Place

```
</details></div>