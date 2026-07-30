---
search:
  boost: 10.0
---

# Class: GLAMInstitution 


_A gallery, library, archive or museum._



<div data-search-exclude markdown="1">



URI: [schema:Organization](http://schema.org/Organization)





```mermaid
 classDiagram
    class GLAMInstitution
    click GLAMInstitution href "../../classes/GLAMInstitution/"
      Organization <|-- GLAMInstitution
        click Organization href "../../classes/Organization/"
      
      GLAMInstitution : additional_urls
        
      GLAMInstitution : contact_email
        
      GLAMInstitution : description
        
          
    
        
        
        GLAMInstitution --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      GLAMInstitution : homepage
        
      GLAMInstitution : id
        
      GLAMInstitution : identifiers
        
      GLAMInstitution : location
        
          
    
        
        
        GLAMInstitution --> "0..1" Location : location
        click Location href "../../classes/Location/"
    

        
      GLAMInstitution : name
        
          
    
        
        
        GLAMInstitution --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      GLAMInstitution : organization_type
        
          
    
        
        
        GLAMInstitution --> "0..1" OrganizationTypeEnum : organization_type
        click OrganizationTypeEnum href "../../enums/OrganizationTypeEnum/"
    

        
      GLAMInstitution : parent_organization
        
          
    
        
        
        GLAMInstitution --> "0..1" Organization : parent_organization
        click Organization href "../../classes/Organization/"
    

        
      GLAMInstitution : ror
        
      GLAMInstitution : same_as
        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * [Agent](../classes/Agent.md)
        * [Organization](../classes/Organization.md)
            * **GLAMInstitution**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Organization](http://schema.org/Organization) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [ror](../slots/ror.md) | 0..1 <br/> [Uriorcurie](../types/Uriorcurie.md) | The organization's ROR ID, as CURIE (ROR:04aj4c181) or full URL | [Organization](../classes/Organization.md) |
| [organization_type](../slots/organization_type.md) | 0..1 <br/> [OrganizationTypeEnum](../enums/OrganizationTypeEnum.md) | The kind of organization | [Organization](../classes/Organization.md) |
| [parent_organization](../slots/parent_organization.md) | 0..1 <br/> [Organization](../classes/Organization.md) | The larger organization this one is part of (e | [Organization](../classes/Organization.md) |
| [location](../slots/location.md) | 0..1 <br/> [Location](../classes/Location.md) | Where the organization, facility or event is physically situated | [Organization](../classes/Organization.md) |
| [additional_urls](../slots/additional_urls.md) | * <br/> [Uri](../types/Uri.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... | [Organization](../classes/Organization.md) |
| [contact_email](../slots/contact_email.md) | 0..1 <br/> [String](../types/String.md) | A published contact address for the entity (office, team or service-desk mail... | [Organization](../classes/Organization.md) |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [NamedThing](../classes/NamedThing.md) |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | [NamedThing](../classes/NamedThing.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [NamedThing](../classes/NamedThing.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [NamedThing](../classes/NamedThing.md) |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | [NamedThing](../classes/NamedThing.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [NamedThing](../classes/NamedThing.md) |















## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Organization |
| native | idhi:GLAMInstitution |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: GLAMInstitution
description: A gallery, library, archive or museum.
from_schema: https://idhi.co.il/linkml/idhi
is_a: Organization
class_uri: schema:Organization

```
</details>

### Induced

<details>
```yaml
name: GLAMInstitution
description: A gallery, library, archive or museum.
from_schema: https://idhi.co.il/linkml/idhi
is_a: Organization
attributes:
  ror:
    name: ror
    description: The organization's ROR ID, as CURIE (ROR:04aj4c181) or full URL.
      A supplementary external identifier — the record's primary id is always the
      IDHI URN. Record it whenever the organization is registered in ROR — most universities
      and research institutes are.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:identifier
    owner: GLAMInstitution
    domain_of:
    - Organization
    range: uriorcurie
  organization_type:
    name: organization_type
    description: The kind of organization. This enum value — not the optional subclasses
      — is the canonical discriminator; always set it.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:type
    owner: GLAMInstitution
    domain_of:
    - Organization
    range: OrganizationTypeEnum
  parent_organization:
    name: parent_organization
    description: The larger organization this one is part of (e.g. a department's
      university). Use for formal containment only; looser partnerships belong in
      relationship classes.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:parentOrganization
    owner: GLAMInstitution
    domain_of:
    - Organization
    range: Organization
  location:
    name: location
    description: Where the organization, facility or event is physically situated.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:location
    owner: GLAMInstitution
    domain_of:
    - Organization
    - Facility
    - Event
    range: Location
  additional_urls:
    name: additional_urls
    description: Further relevant web pages beyond the homepage (blog, social-media
      profile, registry entry, press coverage...). For records describing the same
      entity in other systems use same_as instead.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: foaf:page
    owner: GLAMInstitution
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
    owner: GLAMInstitution
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Event
    range: string
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
    owner: GLAMInstitution
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:organization:{shortid}$
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
    owner: GLAMInstitution
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
    owner: GLAMInstitution
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
    owner: GLAMInstitution
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
    owner: GLAMInstitution
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
    owner: GLAMInstitution
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: schema:Organization

```
</details></div>