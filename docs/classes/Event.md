---
search:
  boost: 10.0
---

# Class: Event 


_A scholarly event: conference, workshop, seminar, lecture, hackathon or exhibition. Use Event for time-bounded gatherings; recurring series should be modeled as one Event per occurrence._



<div data-search-exclude markdown="1">



URI: [schema:Event](http://schema.org/Event)





```mermaid
 classDiagram
    class Event
    click Event href "../../classes/Event/"
      NamedThing <|-- Event
        click NamedThing href "../../classes/NamedThing/"
      
      Event : additional_urls
        
      Event : contact_email
        
      Event : description
        
          
    
        
        
        Event --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Event : end_date
        
      Event : event_type
        
          
    
        
        
        Event --> "0..1" EventTypeEnum : event_type
        click EventTypeEnum href "../../enums/EventTypeEnum/"
    

        
      Event : homepage
        
      Event : id
        
      Event : identifiers
        
      Event : location
        
          
    
        
        
        Event --> "0..1" Location : location
        click Location href "../../classes/Location/"
    

        
      Event : name
        
          
    
        
        
        Event --> "*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Event : same_as
        
      Event : start_date
        
      
```





## Inheritance
* [NamedThing](../classes/NamedThing.md)
    * **Event**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [schema:Event](http://schema.org/Event) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [event_type](../slots/event_type.md) | 0..1 <br/> [EventTypeEnum](../enums/EventTypeEnum.md) | The kind of scholarly event | direct |
| [start_date](../slots/start_date.md) | 0..1 <br/> [Date](../types/Date.md) | Start of the event or of a relationship's validity (e | direct |
| [end_date](../slots/end_date.md) | 0..1 <br/> [Date](../types/Date.md) | End of the event, relationship or time period | direct |
| [location](../slots/location.md) | 0..1 <br/> [Location](../classes/Location.md) | Where the organization, facility or event is physically situated | direct |
| [additional_urls](../slots/additional_urls.md) | * <br/> [Uri](../types/Uri.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... | direct |
| [contact_email](../slots/contact_email.md) | 0..1 <br/> [String](../types/String.md) | A published contact address for the entity (office, team or service-desk mail... | direct |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [NamedThing](../classes/NamedThing.md) |
| [name](../slots/name.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual name/title | [NamedThing](../classes/NamedThing.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [NamedThing](../classes/NamedThing.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [NamedThing](../classes/NamedThing.md) |
| [identifiers](../slots/identifiers.md) | * <br/> [Uriorcurie](../types/Uriorcurie.md) | Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated... | [NamedThing](../classes/NamedThing.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [NamedThing](../classes/NamedThing.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Publication](../classes/Publication.md) | [presented_at](../slots/presented_at.md) | range | [Event](../classes/Event.md) |
| [IndexContainer](../classes/IndexContainer.md) | [events](../slots/events.md) | range | [Event](../classes/Event.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:Event |
| native | idhi:Event |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Event
description: 'A scholarly event: conference, workshop, seminar, lecture, hackathon
  or exhibition. Use Event for time-bounded gatherings; recurring series should be
  modeled as one Event per occurrence.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slots:
- event_type
- start_date
- end_date
- location
- additional_urls
- contact_email
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:event:{shortid}$
      interpolated: true
class_uri: schema:Event

```
</details>

### Induced

<details>
```yaml
name: Event
description: 'A scholarly event: conference, workshop, seminar, lecture, hackathon
  or exhibition. Use Event for time-bounded gatherings; recurring series should be
  modeled as one Event per occurrence.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: NamedThing
slot_usage:
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:event:{shortid}$
      interpolated: true
attributes:
  event_type:
    name: event_type
    description: The kind of scholarly event.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: dcterms:type
    owner: Event
    domain_of:
    - Event
    range: EventTypeEnum
  start_date:
    name: start_date
    description: Start of the event or of a relationship's validity (e.g. when a person
      joined a project or organization).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:startDate
    owner: Event
    domain_of:
    - Event
    - Relationship
    range: date
  end_date:
    name: end_date
    description: End of the event, relationship or time period. Omit for ongoing relationships
      and open-ended periods.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:endDate
    owner: Event
    domain_of:
    - Event
    - TimePeriod
    - Relationship
    range: date
  location:
    name: location
    description: Where the organization, facility or event is physically situated.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:location
    owner: Event
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
    owner: Event
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
    owner: Event
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
    owner: Event
    domain_of:
    - NamedThing
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:event:{shortid}$
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
    owner: Event
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
    owner: Event
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
    owner: Event
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
    owner: Event
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
    owner: Event
    domain_of:
    - NamedThing
    range: uri
    multivalued: true
class_uri: schema:Event

```
</details></div>