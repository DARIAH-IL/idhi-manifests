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
      Entity <|-- Service
        click Entity href "../../classes/Entity/"
      

      

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
        
      Service : image
        
      Service : name
        
          
    
        
        
        Service --> "1..*" LangString : name
        
        click LangString href "../../classes/LangString/"
        
    

        
      Service : provider
        
          
    
        
        
        Service --> "0..1" Organization : provider
        
        click Organization href "../../classes/Organization/"
        
    

        
      Service : same_as
        
      Service : service_type
        
          
    
        
        
        Service --> "0..1" ToolServiceTypeEnum : service_type
        
        click ToolServiceTypeEnum href "../../enums/ToolServiceTypeEnum/"
        
    

        
      Service : tags
        
      Service : type
        
      
```




## Inheritance
* [Entity](../classes/Entity.md)
    * **Service**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Service](http://schema.org/Service) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [name](../slots/name.md) | <span title="Required: one or more values">1..*</span> <br/> [LangString](../classes/LangString.md) | <span title="The multilingual name or title used to identify the entity. Use one LangString per available language and do not repeat a language. Prefer the official localized name for organizations; for projects, tools and services, use localized names supplied by the team rather than translating branded names without authority.">The multilingual name or title used to identify the entity</span> | direct |
| [service_type](../slots/service_type.md) | <span title="Optional: at most one value">0..1</span> <br/> [ToolServiceTypeEnum](../enums/ToolServiceTypeEnum.md) | <span title="The kind of service offered (digitization, consulting...).">The kind of service offered (digitization, consulting</span> | direct |
| [provider](../slots/provider.md) | <span title="Optional: at most one value">0..1</span> <br/> [Organization](../classes/Organization.md) | <span title="The organization formally responsible for delivering the service (the one you'd contact or contract with) — set this even when the service is listed under a Facility.">The organization formally responsible for delivering the service (the one you...</span> | direct |
| [documentation_url](../slots/documentation_url.md) | <span title="Optional: at most one value">0..1</span> <br/> [Uri](../types/Uri.md) | <span title="User or developer documentation for the tool or service (manual, wiki, API reference).">User or developer documentation for the tool or service (manual, wiki, API re...</span> | direct |
| [additional_urls](../slots/additional_urls.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Uri](../types/Uri.md) | <span title="Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead.">Further relevant web pages beyond the homepage (blog, social-media profile, r...</span> | direct |
| [contact_email](../slots/contact_email.md) | <span title="Optional: at most one value">0..1</span> <br/> [String](../types/String.md) | <span title="A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'.">A published contact address for the entity (office, team or service-desk mail...</span> | direct |
| [digital_humanities_activities](../slots/digital_humanities_activities.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [DigitalHumanitiesActivityEnum](../enums/DigitalHumanitiesActivityEnum.md) | <span title="Digital-humanities research activities practiced in this project, tool, service or dataset, or taught by this training material. Prefer the most specific applicable activity; multiple values are expected. This is the primary DH-facet for discovery.">Digital-humanities research activities practiced in this project, tool, servi...</span> | direct |
| [type](../slots/type.md) | <span title="Required: exactly one value">1</span> <br/> [Curie](../types/Curie.md) | <span title="Discriminator identifying the record's class; used for polymorphic serialization and deserialization.">Discriminator identifying the record's class; used for polymorphic serializat...</span> | [Entity](../classes/Entity.md) |
| [id](../slots/id.md) | <span title="Required: exactly one value">1</span> <br/> [String](../types/String.md) | <span title="The entity's primary identifier: an IDHI URN of the form&#10;  idhi:&lt;class name>:&lt;random short alphanumeric id>&#10;e.g. idhi:person:x7k2m9 or idhi:project:a83bq1. Minted by IDHI at record creation and never reused or changed. The class token is the lowercase snake_case class name; each concrete class enforces its own token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never here.">The entity's primary identifier: an IDHI URN of the form</span> | [Entity](../classes/Entity.md) |
| [description](../slots/description.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [LangString](../classes/LangString.md) | <span title="Multilingual free-text description (a few sentences aimed at index visitors, not internal notes).">Multilingual free-text description (a few sentences aimed at index visitors, ...</span> | [Entity](../classes/Entity.md) |
| [image](../slots/image.md) | <span title="Optional: at most one value">0..1</span> <br/> [Base64binary](../types/Base64binary.md) | <span title="A representative image embedded as Base64-encoded binary content. Use for a single image that must travel with the entity record; omit it when no image is available, and use homepage or additional_urls for externally hosted pages rather than encoding a URL here.">A representative image embedded as Base64-encoded binary content</span> | [Entity](../classes/Entity.md) |
| [homepage](../slots/homepage.md) | <span title="Optional: at most one value">0..1</span> <br/> [Uri](../types/Uri.md) | <span title="Public landing page of the entity, if one exists.">Public landing page of the entity, if one exists</span> | [Entity](../classes/Entity.md) |
| [same_as](../slots/same_as.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Uri](../types/Uri.md) | <span title="URIs of records in OTHER systems describing the same real-world entity (Wikidata, PeriodO, GeoNames...). Use for linked-data alignment, not for the entity's own pages (use homepage).">URIs of records in OTHER systems describing the same real-world entity (Wikid...</span> | [Entity](../classes/Entity.md) |
| [tags](../slots/tags.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [String](../types/String.md) | <span title="Free-text tags for discovery, filtering and grouping; usable on any top-level entity. Deliberately NOT a controlled enum, but prefer wording that matches a concept in an established ontology or thesaurus (e.g. Wikidata, Getty AAT, TaDiRAH) so tags can later be reconciled against it.">Free-text tags for discovery, filtering and grouping; usable on any top-level...</span> | [Entity](../classes/Entity.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Facility](../classes/Facility.md) | [services_offered](../slots/services_offered.md) | range | [Service](../classes/Service.md) |
| [Project](../classes/Project.md) | [uses_services](../slots/uses_services.md) | range | [Service](../classes/Service.md) |
| [TrainingMaterial](../classes/TrainingMaterial.md) | [related_services](../slots/related_services.md) | range | [Service](../classes/Service.md) |
| [IndexContainer](../classes/IndexContainer.md) | [services](../slots/services.md) | range | [Service](../classes/Service.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Service |
| native | idhi:Service |






## LinkML Source

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
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Entity
slots:
- name
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
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Entity
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
  name:
    name: name
    description: The multilingual name or title used to identify the entity. Use one
      LangString per available language and do not repeat a language. Prefer the official
      localized name for organizations; for projects, tools and services, use localized
      names supplied by the team rather than translating branded names without authority.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: skos:prefLabel
    owner: Service
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Publication
    - Event
    - Dataset
    - TrainingMaterial
    range: LangString
    required: true
    multivalued: true
    inlined: true
    inlined_as_list: true
  service_type:
    name: service_type
    description: The kind of service offered (digitization, consulting...).
    from_schema: https://idhi_placeholder/linkml/idhi
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
    from_schema: https://idhi_placeholder/linkml/idhi
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
    from_schema: https://idhi_placeholder/linkml/idhi
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
    from_schema: https://idhi_placeholder/linkml/idhi
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
    - TrainingMaterial
    range: uri
    multivalued: true
  contact_email:
    name: contact_email
    description: A published contact address for the entity (office, team or service-desk
      mailbox). For a person's own addresses use 'emails'.
    from_schema: https://idhi_placeholder/linkml/idhi
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
    - TrainingMaterial
    range: string
  digital_humanities_activities:
    name: digital_humanities_activities
    description: Digital-humanities research activities practiced in this project,
      tool, service or dataset, or taught by this training material. Prefer the most
      specific applicable activity; multiple values are expected. This is the primary
      DH-facet for discovery.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:subject
    owner: Service
    domain_of:
    - Project
    - Tool
    - Service
    - Dataset
    - TrainingMaterial
    range: DigitalHumanitiesActivityEnum
    multivalued: true
  type:
    name: type
    description: Discriminator identifying the record's class; used for polymorphic
      serialization and deserialization.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: rdf:type
    owner: Service
    domain_of:
    - Entity
    range: curie
    required: true
    equals_string: idhi:Service
  id:
    name: id
    description: "The entity's primary identifier: an IDHI URN of the form\n  idhi:<class\
      \ name>:<random short alphanumeric id>\ne.g. idhi:person:x7k2m9 or idhi:project:a83bq1.\
      \ Minted by IDHI at record creation and never reused or changed. The class token\
      \ is the lowercase snake_case class name; each concrete class enforces its own\
      \ token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary\
      \ and go in their dedicated slots — never here."
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:identifier
    identifier: true
    owner: Service
    domain_of:
    - Entity
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:service:{shortid}$
      interpolated: true
  description:
    name: description
    description: Multilingual free-text description (a few sentences aimed at index
      visitors, not internal notes).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:description
    owner: Service
    domain_of:
    - Entity
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  image:
    name: image
    description: A representative image embedded as Base64-encoded binary content.
      Use for a single image that must travel with the entity record; omit it when
      no image is available, and use homepage or additional_urls for externally hosted
      pages rather than encoding a URL here.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:image
    owner: Service
    domain_of:
    - Entity
    range: base64binary
  homepage:
    name: homepage
    description: Public landing page of the entity, if one exists.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: foaf:homepage
    owner: Service
    domain_of:
    - Entity
    range: uri
  same_as:
    name: same_as
    description: URIs of records in OTHER systems describing the same real-world entity
      (Wikidata, PeriodO, GeoNames...). Use for linked-data alignment, not for the
      entity's own pages (use homepage).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:sameAs
    owner: Service
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
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcat:keyword
    owner: Service
    domain_of:
    - Entity
    range: string
    multivalued: true
class_uri: schema:Service

```
</details></div>