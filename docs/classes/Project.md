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
| [name](../slots/name.md) | <span title="Required: one or more values">1..*</span> <br/> [LangString](../classes/LangString.md) | <span title="Multilingual name/title. Provide at least one language; English, Hebrew and Arabic variants are each a separate LangString. Preferably a sortable name for organizations; for projects, tools and services, use the name the team itself uses.">Multilingual name/title</span> | direct |
| [digital_humanities_activities](../slots/digital_humanities_activities.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [DigitalHumanitiesActivityEnum](../enums/DigitalHumanitiesActivityEnum.md) | <span title="Digital-humanities research activities practiced in this project, tool or service. Prefer the most specific applicable activity; multiple values are expected. This is the primary DH-facet for discovery.">Digital-humanities research activities practiced in this project, tool or ser...</span> | direct |
| [research_disciplines](../slots/research_disciplines.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [LangString](../classes/LangString.md) | <span title="Humanities discipline(s) of the project (history, linguistics, archaeology...). Free multilingual text for now; a controlled vocabulary is a planned upgrade.">Humanities discipline(s) of the project (history, linguistics, archaeology</span> | direct |
| [start_date](../slots/start_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="Start of the event, of the project's runtime, or of a relationship's validity (e.g. when a person joined a project or organization).">Start of the event, of the project's runtime, or of a relationship's validity...</span> | direct |
| [end_date](../slots/end_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="End of the event, project runtime or relationship. Omit for ongoing relationships and open-ended projects.">End of the event, project runtime or relationship</span> | direct |
| [studied_periods](../slots/studied_periods.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [LangString](../classes/LangString.md) | <span title="Historical period(s) the project studies (e.g. Ottoman period), as free multilingual labels — distinct from the project's own start_date/end_date.">Historical period(s) the project studies (e</span> | direct |
| [studied_places](../slots/studied_places.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [LangString](../classes/LangString.md) | <span title="Geographic focus of the research (places studied), as free multilingual labels — distinct from where the project team sits.">Geographic focus of the research (places studied), as free multilingual label...</span> | direct |
| [project_participations](../slots/project_participations.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [ProjectParticipation](../classes/ProjectParticipation.md) | <span title="The person's project involvements, as reified ProjectParticipation objects carrying the role (PI, developer...) and dates.">The person's project involvements, as reified ProjectParticipation objects ca...</span> | direct |
| [organization_roles](../slots/organization_roles.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [OrganizationProjectRole](../classes/OrganizationProjectRole.md) | <span title="Organizations engaged in the project, as reified OrganizationProjectRole objects (coordinator, partner, funder, host).">Organizations engaged in the project, as reified OrganizationProjectRole obje...</span> | direct |
| [outputs_tools](../slots/outputs_tools.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Tool](../classes/Tool.md) | <span title="Tools produced by this project (by id).">Tools produced by this project (by id)</span> | direct |
| [outputs_datasets](../slots/outputs_datasets.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Dataset](../classes/Dataset.md) | <span title="Datasets produced or curated by this project (by id).">Datasets produced or curated by this project (by id)</span> | direct |
| [outputs_publications](../slots/outputs_publications.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Publication](../classes/Publication.md) | <span title="Publications resulting from this project (by id).">Publications resulting from this project (by id)</span> | direct |
| [funding](../slots/funding.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Funding](../classes/Funding.md) | <span title="Funding awards received by the project. Use one entry for each funding organization and award.">Funding awards received by the project</span> | direct |
| [additional_urls](../slots/additional_urls.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Uri](../types/Uri.md) | <span title="Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead.">Further relevant web pages beyond the homepage (blog, social-media profile, r...</span> | direct |
| [contact_email](../slots/contact_email.md) | <span title="Optional: at most one value">0..1</span> <br/> [String](../types/String.md) | <span title="A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'.">A published contact address for the entity (office, team or service-desk mail...</span> | direct |
| [type](../slots/type.md) | <span title="Required: exactly one value">1</span> <br/> [Curie](../types/Curie.md) | <span title="Discriminator identifying the record's class; used for polymorphic serialization and deserialization.">Discriminator identifying the record's class; used for polymorphic serializat...</span> | [Entity](../classes/Entity.md) |
| [id](../slots/id.md) | <span title="Required: exactly one value">1</span> <br/> [String](../types/String.md) | <span title="The entity's primary identifier: an IDHI URN of the form&#10;  idhi:&lt;class name>:&lt;random short alphanumeric id>&#10;e.g. idhi:person:x7k2m9 or idhi:project:a83bq1. Minted by IDHI at record creation and never reused or changed. The class token is the lowercase snake_case class name; each concrete class enforces its own token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never here.">The entity's primary identifier: an IDHI URN of the form</span> | [Entity](../classes/Entity.md) |
| [description](../slots/description.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [LangString](../classes/LangString.md) | <span title="Multilingual free-text description (a few sentences aimed at index visitors, not internal notes).">Multilingual free-text description (a few sentences aimed at index visitors, ...</span> | [Entity](../classes/Entity.md) |
| [homepage](../slots/homepage.md) | <span title="Optional: at most one value">0..1</span> <br/> [Uri](../types/Uri.md) | <span title="Public landing page of the entity, if one exists.">Public landing page of the entity, if one exists</span> | [Entity](../classes/Entity.md) |
| [same_as](../slots/same_as.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Uri](../types/Uri.md) | <span title="URIs of records in OTHER systems describing the same real-world entity (Wikidata, PeriodO, GeoNames...). Use for linked-data alignment, not for the entity's own pages (use homepage).">URIs of records in OTHER systems describing the same real-world entity (Wikid...</span> | [Entity](../classes/Entity.md) |
| [tags](../slots/tags.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [String](../types/String.md) | <span title="Free-text tags for discovery, filtering and grouping; usable on any top-level entity. Deliberately NOT a controlled enum, but prefer wording that matches a concept in an established ontology or thesaurus (e.g. Wikidata, Getty AAT, TaDiRAH) so tags can later be reconciled against it.">Free-text tags for discovery, filtering and grouping; usable on any top-level...</span> | [Entity](../classes/Entity.md) |





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