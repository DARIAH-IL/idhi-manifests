---
search:
  boost: 10.0
---

# Class: Project 


_A Digital Humanities research project, classified by its research activities and disciplines. This is the central entity of the index; people, organizations, outputs and studied periods/places all hang off it._



<div data-search-exclude markdown="1">



URI: [foaf:Project](https://xmlns.com/foaf/spec/#term_Project)





```mermaid
 classDiagram
    class Project
    click Project href "../../classes/Project/"
      Entity <|-- Project
        click Entity href "../../classes/Entity/"
      
      Project : additional_urls
        
      Project : contact_email
        
      Project : description
        
          
    
        
        
        Project --> "*" LangString : description
        click LangString href "../../classes/LangString/"
    

        
      Project : digital_humanities_activities
        
          
    
        
        
        Project --> "*" DigitalHumanitiesActivityEnum : digital_humanities_activities
        click DigitalHumanitiesActivityEnum href "../../enums/DigitalHumanitiesActivityEnum/"
    

        
      Project : end_date
        
      Project : funding
        
          
    
        
        
        Project --> "*" Funding : funding
        click Funding href "../../classes/Funding/"
    

        
      Project : homepage
        
      Project : id
        
      Project : name
        
          
    
        
        
        Project --> "1..*" LangString : name
        click LangString href "../../classes/LangString/"
    

        
      Project : organization_roles
        
          
    
        
        
        Project --> "*" OrganizationProjectRole : organization_roles
        click OrganizationProjectRole href "../../classes/OrganizationProjectRole/"
    

        
      Project : outputs_datasets
        
          
    
        
        
        Project --> "*" Dataset : outputs_datasets
        click Dataset href "../../classes/Dataset/"
    

        
      Project : outputs_publications
        
          
    
        
        
        Project --> "*" Publication : outputs_publications
        click Publication href "../../classes/Publication/"
    

        
      Project : outputs_tools
        
          
    
        
        
        Project --> "*" Tool : outputs_tools
        click Tool href "../../classes/Tool/"
    

        
      Project : project_participations
        
          
    
        
        
        Project --> "*" ProjectParticipation : project_participations
        click ProjectParticipation href "../../classes/ProjectParticipation/"
    

        
      Project : research_disciplines
        
          
    
        
        
        Project --> "*" LangString : research_disciplines
        click LangString href "../../classes/LangString/"
    

        
      Project : same_as
        
      Project : start_date
        
      Project : studied_periods
        
          
    
        
        
        Project --> "*" LangString : studied_periods
        click LangString href "../../classes/LangString/"
    

        
      Project : studied_places
        
          
    
        
        
        Project --> "*" LangString : studied_places
        click LangString href "../../classes/LangString/"
    

        
      Project : tags
        
      Project : type
        
      
```





## Inheritance
* [Entity](../classes/Entity.md)
    * **Project**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [foaf:Project](https://xmlns.com/foaf/spec/#term_Project) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [name](../slots/name.md) | 1..* <br/> [LangString](../classes/LangString.md) | Multilingual name/title | direct |
| [digital_humanities_activities](../slots/digital_humanities_activities.md) | * <br/> [DigitalHumanitiesActivityEnum](../enums/DigitalHumanitiesActivityEnum.md) | Digital-humanities research activities practiced in this project, tool or ser... | direct |
| [research_disciplines](../slots/research_disciplines.md) | * <br/> [LangString](../classes/LangString.md) | Humanities discipline(s) of the project (history, linguistics, archaeology | direct |
| [start_date](../slots/start_date.md) | 0..1 <br/> [Date](../types/Date.md) | Start of the event, of the project's runtime, or of a relationship's validity... | direct |
| [end_date](../slots/end_date.md) | 0..1 <br/> [Date](../types/Date.md) | End of the event, project runtime or relationship | direct |
| [studied_periods](../slots/studied_periods.md) | * <br/> [LangString](../classes/LangString.md) | Historical period(s) the project studies (e | direct |
| [studied_places](../slots/studied_places.md) | * <br/> [LangString](../classes/LangString.md) | Geographic focus of the research (places studied), as free multilingual label... | direct |
| [project_participations](../slots/project_participations.md) | * <br/> [ProjectParticipation](../classes/ProjectParticipation.md) | The person's project involvements, as reified ProjectParticipation objects ca... | direct |
| [organization_roles](../slots/organization_roles.md) | * <br/> [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | Organizations engaged in the project, as reified OrganizationProjectRole obje... | direct |
| [outputs_tools](../slots/outputs_tools.md) | * <br/> [Tool](../classes/Tool.md) | Tools produced by this project (by id) | direct |
| [outputs_datasets](../slots/outputs_datasets.md) | * <br/> [Dataset](../classes/Dataset.md) | Datasets produced or curated by this project (by id) | direct |
| [outputs_publications](../slots/outputs_publications.md) | * <br/> [Publication](../classes/Publication.md) | Publications resulting from this project (by id) | direct |
| [funding](../slots/funding.md) | * <br/> [Funding](../classes/Funding.md) | Funding awards received by the project | direct |
| [additional_urls](../slots/additional_urls.md) | * <br/> [Uri](../types/Uri.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... | direct |
| [contact_email](../slots/contact_email.md) | 0..1 <br/> [String](../types/String.md) | A published contact address for the entity (office, team or service-desk mail... | direct |
| [type](../slots/type.md) | 1 <br/> [Curie](../types/Curie.md) | Discriminator identifying the record's class; used for polymorphic serializat... | [Entity](../classes/Entity.md) |
| [id](../slots/id.md) | 1 <br/> [String](../types/String.md) | The entity's primary identifier: an IDHI URN of the form | [Entity](../classes/Entity.md) |
| [description](../slots/description.md) | * <br/> [LangString](../classes/LangString.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... | [Entity](../classes/Entity.md) |
| [homepage](../slots/homepage.md) | 0..1 <br/> [Uri](../types/Uri.md) | Public landing page of the entity, if one exists | [Entity](../classes/Entity.md) |
| [same_as](../slots/same_as.md) | * <br/> [Uri](../types/Uri.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... | [Entity](../classes/Entity.md) |
| [tags](../slots/tags.md) | * <br/> [String](../types/String.md) | Free-text tags for discovery, filtering and grouping; usable on any top-level... | [Entity](../classes/Entity.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [ProjectParticipation](../classes/ProjectParticipation.md) | [project](../slots/project.md) | range | [Project](../classes/Project.md) |
| [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | [project](../slots/project.md) | range | [Project](../classes/Project.md) |
| [IndexContainer](../classes/IndexContainer.md) | [projects](../slots/projects.md) | range | [Project](../classes/Project.md) |








## In Subsets


* [ToplevelEntity](../subsets/ToplevelEntity.md)






## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | foaf:Project |
| native | idhi:Project |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: Project
description: A Digital Humanities research project, classified by its research activities
  and disciplines. This is the central entity of the index; people, organizations,
  outputs and studied periods/places all hang off it.
in_subset:
- toplevel_entity
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Entity
slots:
- name
- digital_humanities_activities
- research_disciplines
- start_date
- end_date
- studied_periods
- studied_places
- project_participations
- organization_roles
- outputs_tools
- outputs_datasets
- outputs_publications
- funding
- additional_urls
- contact_email
slot_usage:
  type:
    name: type
    equals_string: idhi:Project
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:project:{shortid}$
      interpolated: true
class_uri: foaf:Project

```
</details>

### Induced

<details>
```yaml
name: Project
description: A Digital Humanities research project, classified by its research activities
  and disciplines. This is the central entity of the index; people, organizations,
  outputs and studied periods/places all hang off it.
in_subset:
- toplevel_entity
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Entity
slot_usage:
  type:
    name: type
    equals_string: idhi:Project
  id:
    name: id
    structured_pattern:
      syntax: ^idhi:project:{shortid}$
      interpolated: true
attributes:
  name:
    name: name
    description: Multilingual name/title. Provide at least one language; English,
      Hebrew and Arabic variants are each a separate LangString. Preferably a sortable
      name for organizations; for projects, tools and services, use the name the team
      itself uses.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: skos:prefLabel
    owner: Project
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
  digital_humanities_activities:
    name: digital_humanities_activities
    description: Digital-humanities research activities practiced in this project,
      tool or service. Prefer the most specific applicable activity; multiple values
      are expected. This is the primary DH-facet for discovery.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:subject
    owner: Project
    domain_of:
    - Project
    - Tool
    - Service
    range: DigitalHumanitiesActivityEnum
    multivalued: true
  research_disciplines:
    name: research_disciplines
    description: Humanities discipline(s) of the project (history, linguistics, archaeology...).
      Free multilingual text for now; a controlled vocabulary is a planned upgrade.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:subject
    owner: Project
    domain_of:
    - Project
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  start_date:
    name: start_date
    description: Start of the event, of the project's runtime, or of a relationship's
      validity (e.g. when a person joined a project or organization).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:startDate
    owner: Project
    domain_of:
    - Project
    - Event
    - Relationship
    range: date
  end_date:
    name: end_date
    description: End of the event, project runtime or relationship. Omit for ongoing
      relationships and open-ended projects.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:endDate
    owner: Project
    domain_of:
    - Project
    - Event
    - Relationship
    range: date
  studied_periods:
    name: studied_periods
    description: Historical period(s) the project studies (e.g. Ottoman period), as
      free multilingual labels — distinct from the project's own start_date/end_date.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:temporal
    owner: Project
    domain_of:
    - Project
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  studied_places:
    name: studied_places
    description: Geographic focus of the research (places studied), as free multilingual
      labels — distinct from where the project team sits.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:spatial
    owner: Project
    domain_of:
    - Project
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  project_participations:
    name: project_participations
    description: The person's project involvements, as reified ProjectParticipation
      objects carrying the role (PI, developer...) and dates.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: Project
    domain_of:
    - Person
    - Project
    range: ProjectParticipation
    multivalued: true
    inlined: true
    inlined_as_list: true
  organization_roles:
    name: organization_roles
    description: Organizations engaged in the project, as reified OrganizationProjectRole
      objects (coordinator, partner, funder, host).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: Project
    domain_of:
    - Project
    range: OrganizationProjectRole
    multivalued: true
    inlined: true
    inlined_as_list: true
  outputs_tools:
    name: outputs_tools
    description: Tools produced by this project (by id).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:producer
    owner: Project
    domain_of:
    - Project
    range: Tool
    multivalued: true
  outputs_datasets:
    name: outputs_datasets
    description: Datasets produced or curated by this project (by id).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: Project
    domain_of:
    - Project
    range: Dataset
    multivalued: true
  outputs_publications:
    name: outputs_publications
    description: Publications resulting from this project (by id).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: Project
    domain_of:
    - Project
    range: Publication
    multivalued: true
  funding:
    name: funding
    description: Funding awards received by the project. Use one entry for each funding
      organization and award.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: Project
    domain_of:
    - Project
    range: Funding
    multivalued: true
    inlined: true
    inlined_as_list: true
  additional_urls:
    name: additional_urls
    description: Further relevant web pages beyond the homepage (blog, social-media
      profile, registry entry, press coverage...). For records describing the same
      entity in other systems use same_as instead.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: foaf:page
    owner: Project
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
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:email
    owner: Project
    domain_of:
    - Organization
    - Facility
    - Project
    - Tool
    - Service
    - Event
    range: string
  type:
    name: type
    description: Discriminator identifying the record's class; used for polymorphic
      serialization and deserialization.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: rdf:type
    owner: Project
    domain_of:
    - Entity
    range: curie
    required: true
    equals_string: idhi:Project
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
    owner: Project
    domain_of:
    - Entity
    range: string
    required: true
    pattern: ^idhi:[a-z_]+:[0-9a-z]{4,12}$
    structured_pattern:
      syntax: ^idhi:project:{shortid}$
      interpolated: true
  description:
    name: description
    description: Multilingual free-text description (a few sentences aimed at index
      visitors, not internal notes).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: dcterms:description
    owner: Project
    domain_of:
    - Entity
    range: LangString
    multivalued: true
    inlined: true
    inlined_as_list: true
  homepage:
    name: homepage
    description: Public landing page of the entity, if one exists.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: foaf:homepage
    owner: Project
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
    owner: Project
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
    owner: Project
    domain_of:
    - Entity
    range: string
    multivalued: true
class_uri: foaf:Project

```
</details></div>