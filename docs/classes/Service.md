---
search:
  boost: 10.0
---

# Class: Service 


_A reusable, human- or organization-mediated service offered by a facility or organization (e.g., digitization on demand, OCR consulting, data curation support). Use Service when the offering requires the provider to act; use Tool for self-service software._



<div data-search-exclude markdown="1">



URI: [schema:Service](http://schema.org/Service)





```mermaid
 classDiagram
    class Service
    click Service href "../../classes/Service/"
      NamedThing <|-- Service
        click NamedThing href "../../classes/NamedThing/"
      
      Service : additional_urls
        
      Service : contact_email
        
      Service : description
        
          
    
        
        
        Service --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Service : digital_humanities_activities
        
          
    
        
        
        Service --> "*" DigitalHumanitiesActivityEnum : digital_humanities_activities
        click DigitalHumanitiesActivityEnum href "../../enums/DigitalHumanitiesActivityEnum/"
    

        
      Service : documentation_url
        
      Service : homepage
        
      Service : id
        
      Service : identifiers
        
      Service : name
        
          
    
        
        
        Service --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Service : provider
        
          
    
        
        
        Service --> "0..1" Organization : provider
        click Organization href "../../classes/Organization/"
    

        
      Service : same_as
        
      Service : service_type
        
          
    
        
        
        Service --> "0..1" ToolServiceTypeEnum : service_type
        click ToolServiceTypeEnum href "../../enums/ToolServiceTypeEnum/"
    

        
      Service : type
        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * **Service**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Service](http://schema.org/Service) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [service_type](../slots/service_type.md) | 0..1 <br/> [ToolServiceTypeEnum](../enums/ToolServiceTypeEnum.md) | The kind of service offered (digitization, consulting | direct |
| [provider](../slots/provider.md) | 0..1 <br/> [Organization](../classes/Organization.md) | The organization formally responsible for delivering the service (the one you... | direct |
| [documentation_url](../slots/documentation_url.md) | 0..1 <br/> [Uri](../types/Uri.md) | User or developer documentation for the tool or service (manual, wiki, API re... | direct |
| [additional_urls](../slots/additional_urls.md) | * <br/> [Uri](../types/Uri.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... | direct |
| [contact_email](../slots/contact_email.md) | 0..1 <br/> [String](../types/String.md) | A published contact address for the entity (office, team or service-desk mail... | direct |
| [digital_humanities_activities](../slots/digital_humanities_activities.md) | * <br/> [DigitalHumanitiesActivityEnum](../enums/DigitalHumanitiesActivityEnum.md) | Digital-humanities research activities practiced in this project, tool or ser... | direct |
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
| [Facility](../classes/Facility.md) | [services_offered](../slots/services_offered.md) | range | [Service](../classes/Service.md) |
| [IndexContainer](../classes/IndexContainer.md) | [services](../slots/services.md) | range | [Service](../classes/Service.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Service |
| native | idhi:Service |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Service
description: A reusable, human- or organization-mediated service offered by a facility
  or organization (e.g., digitization on demand, OCR consulting, data curation support).
  Use Service when the offering requires the provider to act; use Tool for self-service
  software.
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slots:
- service_type
- provider
- documentation_url
- additional_urls
- contact_email
- digital_humanities_activities
slot_usage:
  type:
    name: type
    equals_string: idhi:Service
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:service:{shortid}$
      interpolated: true
class_uri: schema:Service

```
</details>

### Induced

<details>
```yaml
name: Service
description: A reusable, human- or organization-mediated service offered by a facility
  or organization (e.g., digitization on demand, OCR consulting, data curation support).
  Use Service when the offering requires the provider to act; use Tool for self-service
  software.
in_subset:
- toplevel_entity
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slot_usage:
  type:
    name: type
    equals_string: idhi:Service
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:service:{shortid}$
      interpolated: true
attributes:
  service_type:
    name: service_type
    description: The kind of service offered (digitization, consulting...).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:serviceType
    owner: Service
    domain_of:
    - Service
    range: ToolServiceTypeEnum
  provider:
    name: provider
    description: The organization formally responsible for delivering the service
      (the one you'd contact or contract with) — set this even when the service is
      listed under a Facility.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:provider
    owner: Service
    domain_of:
    - Service
    range: Organization
  documentation_url:
    name: documentation_url
    description: User or developer documentation for the tool or service (manual,
      wiki, API reference).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:softwareHelp
    owner: Service
    domain_of:
    - Tool
    - Service
    range: uri
  additional_urls:
    name: additional_urls
    description: Further relevant web pages beyond the homepage (blog, social-media
      profile, registry entry, press coverage...). For records describing the same
      entity in other systems use same_as instead.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: foaf:page
    owner: Service
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Event
    range: uri
    multivalued: true
  contact_email:
    name: contact_email
    description: A published contact address for the entity (office, team or service-desk
      mailbox). For a person's own addresses use 'emails'.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:email
    owner: Service
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Event
    range: string
  digital_humanities_activities:
    name: digital_humanities_activities
    description: Digital-humanities research activities practiced in this project,
      tool or service, as TaDiRAH 2.0 concepts. Prefer the most specific applicable
      concept (e.g. tadirah:topicModeling rather than tadirah:analyzing); multiple
      values are expected. This is the primary DH-facet for discovery.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:subject
    owner: Service
    domain_of:
    - Project
    - Tool
    - Service
    range: DigitalHumanitiesActivityEnum
    multivalued: true
  type:
    name: type
    description: Discriminator carrying the class URI; used for polymorphic serialization
      and deserialization.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: rdf:type
    owner: Service
    domain_of:
    - NamedThing
    range: uriorcurie
    required: true
    equals_string: idhi:Service
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
    owner: Service
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:service:{shortid}$
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
    owner: Service
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
    owner: Service
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
    owner: Service
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
    owner: Service
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
    owner: Service
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: schema:Service

```
</details></div>