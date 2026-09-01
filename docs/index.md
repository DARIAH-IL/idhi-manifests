# Israeli Digital Humanities Index Schema

A LinkML schema for an index of Digital Humanities (DH) research in Israel. Entities and properties reuse established vocabularies (FOAF, schema.org, Dublin Core Terms, BIBO, DCAT, PROV, EDM, SKOS, CERIF); DH projects are classified with TaDiRAH 2.0 research-activity concepts (dynamic enum over the full taxonomy). Free text supports any syntactically valid BCP-47 language tag. All entities are identified by IDHI URNs (idhi:<class>:<shortid>); external PIDs are supplementary.

URI: https://idhi_placeholder/linkml/idhi

Name: idhi



## Classes

| Class | Description |
| --- | --- |
| [Entity](classes/Entity.md) | Root class for any identifiable IDHI entity |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Agent](classes/Agent.md) | A person or an organization |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Organization](classes/Organization.md) | An organization of any kind |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Person](classes/Person.md) | A human agent in the DH index: researcher, developer, librarian, student, etc |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Dataset](classes/Dataset.md) | A dataset or dataset-like intellectual object produced or curated by a projec... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Event](classes/Event.md) | A scholarly event: conference, workshop, seminar, lecture, hackathon or exhib... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Facility](classes/Facility.md) | A physical or virtual facility such as a DH lab, digitization studio or resea... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Project](classes/Project.md) | A Digital Humanities research project, classified by its research activities ... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Publication](classes/Publication.md) | An academic publication: journal article, book, chapter, conference paper, th... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Service](classes/Service.md) | A reusable, human- or organization-mediated service offered by a facility or ... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tool](classes/Tool.md) | A reusable software tool, typically produced by a project |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TrainingMaterial](classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |
| [Funding](classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |
| [IndexContainer](classes/IndexContainer.md) | Top-level holder for all IDHI records |
| [LangString](classes/LangString.md) | A single language-tagged text value |
| [Relationship](classes/Relationship.md) | Abstract base for reified relationships that carry their own role or validity... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Affiliation](classes/Affiliation.md) | A person's employment or membership at an organization, nested in a Person so... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Authorship](classes/Authorship.md) | A person's contribution nested in a Publication, so the publication is inferr... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[EventAgentRole](classes/EventAgentRole.md) | A person or organization involved in the containing Event in a defined capaci... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[FacilityAffiliation](classes/FacilityAffiliation.md) | A facility's affiliation with an organization, nested in a Facility so the fa... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[OrganizationProjectRole](classes/OrganizationProjectRole.md) | An organization's engagement nested in a Project, so the project is inferred ... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[OrganizationStructure](classes/OrganizationStructure.md) | Formal containment of the containing Organization within a larger parent orga... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ProjectParticipation](classes/ProjectParticipation.md) | A person's participation nested in a Project, so the project is inferred from... |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ResourceContribution](classes/ResourceContribution.md) | A person or organization contributing to the containing Tool or Dataset in a ... |



## Slots

| Slot | Description |
| --- | --- |
| [additional_urls](slots/additional_urls.md) | Further relevant web pages beyond the homepage (blog, social-media profile, r... |
| [address](slots/address.md) | Postal address, multilingual |
| [affiliation_role](slots/affiliation_role.md) | The person's position at the organization (their job/status, not their projec... |
| [affiliations](slots/affiliations.md) | The containing person's institutional affiliations, as reified Affiliation ob... |
| [author](slots/author.md) | The person contributing to the containing publication (by IDHI URN) |
| [author_order](slots/author_order.md) | Position in the byline; 1 = first author |
| [authorship_role](slots/authorship_role.md) | The kind of contribution |
| [authorships](slots/authorships.md) | People who contributed to the containing publication, as reified Authorship o... |
| [byte_size](slots/byte_size.md) | Total size of the described dataset distribution in bytes |
| [code_repository](slots/code_repository.md) | Source-code repository URL (GitHub, GitLab |
| [contact_email](slots/contact_email.md) | A published contact address for the entity (office, team or service-desk mail... |
| [contributor](slots/contributor.md) | The person or organization contributing to the containing Tool or Dataset (by... |
| [creators](slots/creators.md) | People or organizations responsible for creating the training material (by ID... |
| [dataset_type](slots/dataset_type.md) | The dataset's primary intellectual or collection form |
| [datasets](slots/datasets.md) | Datasets aggregated by a Dataset that functions as a catalog (by id) |
| [date_issued](slots/date_issued.md) | Formal publication date (or year-01-01 if only the year is known) |
| [derived_from](slots/derived_from.md) | Source datasets from which this dataset was re-OCRed, cleaned, transformed, s... |
| [description](slots/description.md) | Multilingual free-text description (a few sentences aimed at index visitors, ... |
| [digital_humanities_activities](slots/digital_humanities_activities.md) | Digital-humanities research activities practiced in this project, tool, servi... |
| [distribution_url](slots/distribution_url.md) | Direct download or access URL for the dataset |
| [documentation_url](slots/documentation_url.md) | User or developer documentation for the tool or service (manual, wiki, API re... |
| [doi](slots/doi.md) | The publication, dataset, tool or training material's DOI persistent identifi... |
| [educational_level](slots/educational_level.md) | Expected learner level, as multilingual text such as beginner, intermediate o... |
| [emails](slots/emails.md) | Contact email addresses (zero or more) |
| [end_date](slots/end_date.md) | End of the event, project runtime or relationship |
| [event_agent](slots/event_agent.md) | The person or organization involved in the containing event (by IDHI URN) |
| [event_agent_role](slots/event_agent_role.md) | The capacity in which the agent is involved in the containing event |
| [event_agent_roles](slots/event_agent_roles.md) | People and organizations involved in the containing event, with their role an... |
| [event_type](slots/event_type.md) | The kind of scholarly event |
| [events](slots/events.md) | All Event records in the index |
| [extent](slots/extent.md) | Technical extent statements such as record, item, issue, image or file counts |
| [facilities](slots/facilities.md) | All Facility records in the index |
| [facility_affiliation_role](slots/facility_affiliation_role.md) | The organization's relationship to the containing facility |
| [facility_affiliations](slots/facility_affiliations.md) | The organizations hosting or owning the containing facility, as reified Facil... |
| [family_name](slots/family_name.md) | Family (last) name as multilingual text |
| [funding](slots/funding.md) | Funding awards received by the project |
| [funding_amount](slots/funding_amount.md) | Amount awarded by the funding organization, if public, in the currency given ... |
| [funding_currency](slots/funding_currency.md) | Currency of funding_amount |
| [funding_organization](slots/funding_organization.md) | The organization that provides this funding award (by IDHI URN) |
| [funding_program](slots/funding_program.md) | Multilingual name of the broader funding programme or scheme under which the ... |
| [funding_status](slots/funding_status.md) | The project's current primary funding or sustainability status at the time th... |
| [funding_url](slots/funding_url.md) | Public landing page for the individual award or its authoritative funding rec... |
| [given_name](slots/given_name.md) | Given (first) name as multilingual text |
| [grant_name](slots/grant_name.md) | Official multilingual title of the individual grant or award |
| [grant_number](slots/grant_number.md) | Identifier assigned to the grant by its funding organization |
| [homepage](slots/homepage.md) | Public landing page of the entity, if one exists |
| [id](slots/id.md) | The entity's primary identifier: an IDHI URN of the form |
| [image](slots/image.md) | A representative image embedded as Base64-encoded binary content |
| [in_languages](slots/in_languages.md) | Languages substantially represented in a dataset or in which instructional co... |
| [language](slots/language.md) | BCP-47 language tag of the value, such as en, he, ar, de, yi or lad |
| [learning_outcomes](slots/learning_outcomes.md) | Knowledge or skills a learner should gain by completing the material, as mult... |
| [license](slots/license.md) | The license under which the tool, dataset or training material is released |
| [location](slots/location.md) | Place name where the organization, facility or event is physically situated (... |
| [material_url](slots/material_url.md) | Direct landing or access URL for the instructional resource |
| [media_type](slots/media_type.md) | Technical media type of the primary dataset distribution or training resource... |
| [name](slots/name.md) | The multilingual name or title used to identify the entity |
| [orcid](slots/orcid.md) | The person's persistent researcher identifier |
| [org_project_role](slots/org_project_role.md) | The organization's function in the project: COORDINATOR leads the consortium,... |
| [organization](slots/organization.md) | The organization referenced by a person affiliation, facility affiliation or ... |
| [organization_roles](slots/organization_roles.md) | Organizations engaged in the containing project, as reified OrganizationProje... |
| [organization_structure](slots/organization_structure.md) | Formal parent relationships of the containing organization, with the parent a... |
| [organization_type](slots/organization_type.md) | The kind of organization |
| [organizations](slots/organizations.md) | All Organization records in the index |
| [outputs_datasets](slots/outputs_datasets.md) | Datasets produced or curated by this project (by id) |
| [outputs_publications](slots/outputs_publications.md) | Publications resulting from this project (by id) |
| [outputs_tools](slots/outputs_tools.md) | Tools produced by this project (by id) |
| [outputs_training_materials](slots/outputs_training_materials.md) | Training materials produced by this project (by IDHI URN); use only for proje... |
| [parent_organization](slots/parent_organization.md) | The larger organization containing the current child organization (by IDHI UR... |
| [part_of](slots/part_of.md) | The containing work (book for a chapter, proceedings for a paper), by IDHI UR... |
| [part_of_training_material](slots/part_of_training_material.md) | The larger training material of which this resource is a module or lesson (by... |
| [participant](slots/participant.md) | The person taking part in the containing project (by IDHI URN) |
| [participation_role](slots/participation_role.md) | The person's function within the project team |
| [persons](slots/persons.md) | All Person records in the index |
| [prerequisites](slots/prerequisites.md) | Knowledge, skills, software or prior material learners should have before sta... |
| [presented_at](slots/presented_at.md) | Event(s) in the index where this publication was presented (by IDHI URN), e |
| [programming_languages](slots/programming_languages.md) | Implementation languages, as technical labels such as Python or JavaScript |
| [project_participations](slots/project_participations.md) | People involved in the containing project, as reified ProjectParticipation ob... |
| [projects](slots/projects.md) | All Project records in the index |
| [provider](slots/provider.md) | The organization formally responsible for delivering the service (the one you... |
| [publication_type](slots/publication_type.md) | The kind of publication (journal article, book part, conference paper, thesis |
| [publications](slots/publications.md) | All Publication records in the index |
| [published_in](slots/published_in.md) | Name of the journal, book or proceedings the publication appeared in, as free... |
| [publisher](slots/publisher.md) | The organization formally publishing the dataset, publication or training mat... |
| [related_datasets](slots/related_datasets.md) | Datasets used as the subject or worked example of the material (by IDHI URN) |
| [related_publications](slots/related_publications.md) | Publications that are counterparts or direct scholarly companions of the data... |
| [related_services](slots/related_services.md) | Services that the material explains how to access or use (by IDHI URN) |
| [related_tools](slots/related_tools.md) | Tools whose use the material teaches or demonstrates (by IDHI URN) |
| [research_disciplines](slots/research_disciplines.md) | Humanities discipline(s) of the project (history, linguistics, archaeology |
| [resource_contribution_role](slots/resource_contribution_role.md) | The contributor's responsibility for the containing Tool or Dataset |
| [resource_contributions](slots/resource_contributions.md) | Named contributions to the containing Tool or Dataset, with contributor, role... |
| [ror](slots/ror.md) | The organization's persistent registry identifier |
| [same_as](slots/same_as.md) | URIs of records in OTHER systems describing the same real-world entity (Wikid... |
| [service_type](slots/service_type.md) | The kind of service offered (digitization, consulting |
| [services](slots/services.md) | All Service records in the index |
| [services_offered](slots/services_offered.md) | Services this facility offers to researchers |
| [start_date](slots/start_date.md) | Start of the event, of the project's runtime, or of a relationship's validity... |
| [studied_periods](slots/studied_periods.md) | Historical period(s) the project studies (e |
| [studied_places](slots/studied_places.md) | Geographic focus of the research (places studied), as free multilingual label... |
| [tags](slots/tags.md) | Free-text tags for discovery, filtering and grouping; usable on any top-level... |
| [target_audiences](slots/target_audiences.md) | Intended learner groups, as multilingual labels such as researchers, libraria... |
| [themes](slots/themes.md) | Thematic keywords for the dataset, multilingual |
| [tool_type](slots/tool_type.md) | The delivery form of the tool (web app, library, CLI |
| [tools](slots/tools.md) | All Tool records in the index |
| [tools_provided](slots/tools_provided.md) | Tools this facility maintains or gives access to (by id) |
| [training_material_type](slots/training_material_type.md) | The material's primary didactic form |
| [training_materials](slots/training_materials.md) | All TrainingMaterial records in the index, including tutorials, lessons and o... |
| [type](slots/type.md) | Discriminator identifying the record's class; used for polymorphic serializat... |
| [uses_datasets](slots/uses_datasets.md) | Existing datasets used as research inputs by the containing project (by IDHI ... |
| [uses_services](slots/uses_services.md) | Services used by the containing project (by IDHI URN) |
| [uses_tools](slots/uses_tools.md) | Tools used to conduct the containing project (by IDHI URN) |
| [value](slots/value.md) | A localized text, in the language given by 'language' |


## Enumerations

| Enumeration | Description |
| --- | --- |
| [AuthorshipRoleEnum](enums/AuthorshipRoleEnum.md) | The kind of contribution to a publication |
| [CurrencyEnum](enums/CurrencyEnum.md) | Currencies in which a funding award amount may be expressed, as ISO 4217 code... |
| [DatasetTypeEnum](enums/DatasetTypeEnum.md) | IDHI-governed discovery categories for datasets and dataset-like intellectual... |
| [DigitalHumanitiesActivityEnum](enums/DigitalHumanitiesActivityEnum.md) | Digital-humanities research activities: Analyzing, Capturing, Creating, Disse... |
| [EventAgentRoleEnum](enums/EventAgentRoleEnum.md) | IDHI-governed roles for people and organizations involved in events |
| [EventTypeEnum](enums/EventTypeEnum.md) | Kinds of scholarly events |
| [FacilityAffiliationRoleEnum](enums/FacilityAffiliationRoleEnum.md) | IDHI-governed roles distinguishing the organizations connected to a facility |
| [FundingStatusEnum](enums/FundingStatusEnum.md) | IDHI-governed values for the current primary way a project is financially or ... |
| [LicenseEnum](enums/LicenseEnum.md) | Common licenses for tools, datasets and training materials |
| [OrganizationTypeEnum](enums/OrganizationTypeEnum.md) | Kinds of organization |
| [OrgProjectRoleEnum](enums/OrgProjectRoleEnum.md) | An organization's role in a project (one instance per role) |
| [PersonOrgRoleEnum](enums/PersonOrgRoleEnum.md) | A person's position within an organization (job/status) |
| [ProjectRoleEnum](enums/ProjectRoleEnum.md) | A person's role in a project |
| [PublicationTypeEnum](enums/PublicationTypeEnum.md) | The kind of publication, including journal article, book part, conference pap... |
| [ResourceContributionRoleEnum](enums/ResourceContributionRoleEnum.md) | Roles for named contributions to tools and datasets |
| [ToolServiceTypeEnum](enums/ToolServiceTypeEnum.md) | Delivery forms for tools and kinds of services |
| [TrainingMaterialTypeEnum](enums/TrainingMaterialTypeEnum.md) | Didactic forms of training material |


## Types

| Type | Description |
| --- | --- |
| [Base64binary](types/Base64binary.md) | Binary content represented as a Base64-encoded string |
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


## Subsets

| Subset | Description |
| --- | --- |
| [ToplevelEntity](subsets/ToplevelEntity.md) | Primary first-class entities in the IDHI index — those that carry their own I... |
