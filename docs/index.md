# Israeli Digital Humanities Index Schema

A LinkML schema for an index of Digital Humanities (DH) research in Israel. Entities and properties reuse established vocabularies (FOAF, schema.org, Dublin Core Terms, BIBO, DCAT, EDM, SKOS, CERIF); DH projects are classified with TaDiRAH 2.0 research-activity concepts (dynamic enum over the full taxonomy). Free text supports English, Hebrew and Arabic. All entities are identified by IDHI URNs (idhi:<class>:<shortid>); external PIDs are supplementary.

URI: https://idhi.co.il/linkml/idhi

Name: idhi



## Subsets

| Subset | Description |
| --- | --- |
| [ToplevelEntity](subsets/ToplevelEntity.md) | Primary first-class entities in the IDHI index — those that carry their own I... |


## Classes

| Class | Description |
| --- | --- |
| [Entity](classes/Entity.md) | Root class for any identifiable IDHI entity |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Agent](classes/Agent.md) | A person or an organization |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Organization](classes/Organization.md) | An organization of any kind |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Person](classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Dataset](classes/Dataset.md) | A dataset, digital archive or catalog produced or curated by a project: corpo... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Event](classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Facility](classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Project](classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Publication](classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Service](classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tool](classes/Tool.md) | A reusable software tool, typically produced by a project |
| [Funding](classes/Funding.md) | A funding award for a project, identifying the organization that provides it ... |
| [IndexContainer](classes/IndexContainer.md) | Top-level holder for all IDHI records |
| [LangString](classes/LangString.md) | A single language-tagged text value |
| [Relationship](classes/Relationship.md) | Abstract base for reified, role-bearing relationships |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Affiliation](classes/Affiliation.md) | A person's employment or membership at an organization, with a position and d... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Authorship](classes/Authorship.md) | A person's contribution to a publication, with author order and role |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[FacilityAffiliation](classes/FacilityAffiliation.md) | A facility's affiliation with an organization |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[OrganizationProjectRole](classes/OrganizationProjectRole.md) | An organization's engagement in a project |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ProjectParticipation](classes/ProjectParticipation.md) | A person's participation in a project |



## Slots

| Slot | Description |
| --- | --- |
| [additional_urls](slots/additional_urls.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... |
| [address](slots/address.md) | Postal address, multilingual |
| [affiliation_role](slots/affiliation_role.md) | The person's position at the organization (their job/status, not their projec... |
| [affiliations](slots/affiliations.md) | The person's institutional affiliations, as reified Affiliation objects (orga... |
| [author](slots/author.md) | The contributing person (by IDHI URN) |
| [author_order](slots/author_order.md) | Position in the byline; 1 = first author |
| [authorship_role](slots/authorship_role.md) | The kind of contribution |
| [authorships](slots/authorships.md) | The person's publication contributions, as reified Authorship objects carryin... |
| [code_repository](slots/code_repository.md) | Source-code repository URL (GitHub, GitLab |
| [contact_email](slots/contact_email.md) | A published contact address for the entity (office, team or service-desk mail... |
| [datasets](slots/datasets.md) | Datasets aggregated by a Dataset that functions as a catalog (by id) |
| [date_issued](slots/date_issued.md) | Formal publication date (or year-01-01 if only the year is known) |
| [description](slots/description.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... |
| [digital_humanities_activities](slots/digital_humanities_activities.md) | Digital-humanities research activities practiced in this project, tool or ser... |
| [distribution_url](slots/distribution_url.md) | Direct download or access URL for the dataset |
| [documentation_url](slots/documentation_url.md) | User or developer documentation for the tool or service (manual, wiki, API re... |
| [doi](slots/doi.md) | The publication's persistent identifier |
| [emails](slots/emails.md) | Contact email addresses (zero or more) |
| [end_date](slots/end_date.md) | End of the event, project runtime or relationship |
| [event_type](slots/event_type.md) | The kind of scholarly event |
| [events](slots/events.md) | All Event records in the index |
| [facilities](slots/facilities.md) | All Facility records in the index |
| [facility](slots/facility.md) | The facility side of the relationship (by IDHI URN) |
| [facility_affiliations](slots/facility_affiliations.md) | The organization(s) hosting or owning this facility, as reified FacilityAffil... |
| [family_name](slots/family_name.md) | Family (last) name, in the person's preferred romanization |
| [funding](slots/funding.md) | Funding awards received by the project |
| [funding_amount](slots/funding_amount.md) | Amount awarded by the funding organization, if public, in ILS unless noted in... |
| [funding_organization](slots/funding_organization.md) | The organization that provides this funding award (by IDHI URN) |
| [given_name](slots/given_name.md) | Given (first) name, in the person's preferred romanization |
| [homepage](slots/homepage.md) | Public landing page of the entity, if one exists |
| [id](slots/id.md) | The entity's primary identifier: an IDHI URN of the form |
| [language](slots/language.md) | BCP-47 language tag of the value (en, he or ar) |
| [license](slots/license.md) | The license under which the tool or dataset is released |
| [location](slots/location.md) | Place name where the organization, facility or event is physically situated (... |
| [member](slots/member.md) | The person affiliated with the organization (by IDHI URN) |
| [name](slots/name.md) | Multilingual name/title |
| [orcid](slots/orcid.md) | The person's persistent researcher identifier |
| [org_project_role](slots/org_project_role.md) | The organization's function in the project: COORDINATOR leads the consortium,... |
| [organization](slots/organization.md) | The organization side of the relationship (by IDHI URN) |
| [organization_roles](slots/organization_roles.md) | Organizations engaged in the project, as reified OrganizationProjectRole obje... |
| [organization_type](slots/organization_type.md) | The kind of organization |
| [organizations](slots/organizations.md) | All Organization records in the index |
| [outputs_datasets](slots/outputs_datasets.md) | Datasets produced or curated by this project (by id) |
| [outputs_publications](slots/outputs_publications.md) | Publications resulting from this project (by id) |
| [outputs_tools](slots/outputs_tools.md) | Tools produced by this project (by id) |
| [parent_organization](slots/parent_organization.md) | The larger organization this one is part of (e |
| [part_of](slots/part_of.md) | The containing work (book for a chapter, proceedings for a paper), by IDHI UR... |
| [participant](slots/participant.md) | The person taking part in the project (by IDHI URN) |
| [participation_role](slots/participation_role.md) | The person's function within the project team |
| [persons](slots/persons.md) | All Person records in the index |
| [presented_at](slots/presented_at.md) | Event(s) in the index where this publication was presented (by IDHI URN), e |
| [programming_language](slots/programming_language.md) | Main implementation language(s), comma-free single value preferred |
| [project](slots/project.md) | The project side of the relationship (by IDHI URN) |
| [project_participations](slots/project_participations.md) | The person's project involvements, as reified ProjectParticipation objects ca... |
| [projects](slots/projects.md) | All Project records in the index |
| [provider](slots/provider.md) | The organization formally responsible for delivering the service (the one you... |
| [publication](slots/publication.md) | The publication contributed to (by IDHI URN) |
| [publication_type](slots/publication_type.md) | The kind of publication (journal article, book part, conference paper, thesis |
| [publications](slots/publications.md) | All Publication records in the index |
| [published_in](slots/published_in.md) | Name of the journal, book or proceedings the publication appeared in, as free... |
| [publisher](slots/publisher.md) | The organization publishing the dataset or publication (by IDHI URN) |
| [research_disciplines](slots/research_disciplines.md) | Humanities discipline(s) of the project (history, linguistics, archaeology |
| [ror](slots/ror.md) | The organization's persistent registry identifier |
| [same_as](slots/same_as.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... |
| [service_type](slots/service_type.md) | The kind of service offered (digitization, consulting |
| [services](slots/services.md) | All Service records in the index |
| [services_offered](slots/services_offered.md) | Services this facility offers to researchers |
| [start_date](slots/start_date.md) | Start of the event, of the project's runtime, or of a relationship's validity... |
| [studied_periods](slots/studied_periods.md) | Historical period(s) the project studies (e |
| [studied_places](slots/studied_places.md) | Geographic focus of the research (places studied), as free multilingual label... |
| [tags](slots/tags.md) | Free-text tags for discovery, filtering and grouping; usable on any top-level... |
| [themes](slots/themes.md) | Thematic keywords for the dataset, multilingual |
| [tool_type](slots/tool_type.md) | The delivery form of the tool (web app, library, CLI |
| [tools](slots/tools.md) | All Tool records in the index |
| [tools_provided](slots/tools_provided.md) | Tools this facility maintains or gives access to (by id) |
| [type](slots/type.md) | Discriminator identifying the record's class; used for polymorphic serializat... |
| [value](slots/value.md) | A localized text, in the language given by 'language' |


## Enumerations

| Enumeration | Description |
| --- | --- |
| [AuthorshipRoleEnum](enums/AuthorshipRoleEnum.md) | The kind of contribution to a publication |
| [DigitalHumanitiesActivityEnum](enums/DigitalHumanitiesActivityEnum.md) | Digital-humanities research activities: Analyzing, Capturing, Creating, Disse... |
| [EventTypeEnum](enums/EventTypeEnum.md) | Kinds of scholarly events |
| [LanguageEnum](enums/LanguageEnum.md) | Languages supported for free-text fields (BCP-47 tags) |
| [LicenseEnum](enums/LicenseEnum.md) | Common licenses for tools and datasets |
| [OrganizationTypeEnum](enums/OrganizationTypeEnum.md) | Kinds of organization |
| [OrgProjectRoleEnum](enums/OrgProjectRoleEnum.md) | An organization's role in a project (one instance per role) |
| [PersonOrgRoleEnum](enums/PersonOrgRoleEnum.md) | A person's position within an organization (job/status) |
| [ProjectRoleEnum](enums/ProjectRoleEnum.md) | A person's role in a project |
| [PublicationTypeEnum](enums/PublicationTypeEnum.md) | The kind of publication, including journal article, book part, conference pap... |
| [ToolServiceTypeEnum](enums/ToolServiceTypeEnum.md) | Delivery forms for tools and kinds of services |


## Types

| Type | Description |
| --- | --- |
| [Boolean](types/Boolean.md) | A binary (true or false) value |
| [Curie](types/Curie.md) | a compact URI |
| [Date](types/Date.md) | a date (year, month and day) in an idealized calendar |
| [DateOrDatetime](types/DateOrDatetime.md) | Either a date or a datetime |
| [Datetime](types/Datetime.md) | The combination of a date and time |
| [Decimal](types/Decimal.md) | A real number with arbitrary precision that conforms to the xsd:decimal speci... |
| [Double](types/Double.md) | A real number that conforms to the xsd:double specification |
| [Float](types/Float.md) | A real number that conforms to the xsd:float specification |
| [Integer](types/Integer.md) | An integer |
| [Jsonpath](types/Jsonpath.md) | A string encoding a JSON Path |
| [Jsonpointer](types/Jsonpointer.md) | A string encoding a JSON Pointer |
| [Ncname](types/Ncname.md) | Prefix part of CURIE |
| [Nodeidentifier](types/Nodeidentifier.md) | A URI, CURIE or BNODE that represents a node in a model |
| [Objectidentifier](types/Objectidentifier.md) | A URI or CURIE that represents an object in the model |
| [Sparqlpath](types/Sparqlpath.md) | A string encoding a SPARQL Property Path |
| [String](types/String.md) | A character string |
| [Time](types/Time.md) | A time object represents a (local) time of day, independent of any particular... |
| [Uri](types/Uri.md) | a complete URI |
| [Uriorcurie](types/Uriorcurie.md) | a URI or a CURIE |
