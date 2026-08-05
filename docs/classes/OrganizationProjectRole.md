---
search:
  boost: 10.0
---

# Class: OrganizationProjectRole 


_An organization's engagement in a project. Use one instance per role: an organization that both hosts and funds a project gets two instances._



<div data-search-exclude markdown="1">



URI: [cerif:Project_OrganisationUnit](https://w3id.org/cerif/model#Project_OrganisationUnit)





```mermaid
 classDiagram
    class OrganizationProjectRole
    click OrganizationProjectRole href "../../classes/OrganizationProjectRole/"
      Relationship <|-- OrganizationProjectRole
        click Relationship href "../../classes/Relationship/"
      
      OrganizationProjectRole : end_date
        
      OrganizationProjectRole : org_project_role
        
          
    
        
        
        OrganizationProjectRole --> "0..1" OrgProjectRoleEnum : org_project_role
        click OrgProjectRoleEnum href "../../enums/OrgProjectRoleEnum/"
    

        
      OrganizationProjectRole : organization
        
          
    
        
        
        OrganizationProjectRole --> "1" Organization : organization
        click Organization href "../../classes/Organization/"
    

        
      OrganizationProjectRole : project
        
          
    
        
        
        OrganizationProjectRole --> "1" Project : project
        click Project href "../../classes/Project/"
    

        
      OrganizationProjectRole : start_date
        
      
```





## Inheritance
* [Relationship](../classes/Relationship.md)
    * **OrganizationProjectRole**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [cerif:Project_OrganisationUnit](https://w3id.org/cerif/model#Project_OrganisationUnit) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [organization](../slots/organization.md) | 1 <br/> [Organization](../classes/Organization.md) | The organization side of the relationship (by IDHI URN) | direct |
| [project](../slots/project.md) | 1 <br/> [Project](../classes/Project.md) | The project side of the relationship (by IDHI URN) | direct |
| [org_project_role](../slots/org_project_role.md) | 0..1 <br/> [OrgProjectRoleEnum](../enums/OrgProjectRoleEnum.md) | The organization's function in the project: COORDINATOR leads the consortium,... | direct |
| [start_date](../slots/start_date.md) | 0..1 <br/> [Date](../types/Date.md) | Start of the event, of the project's runtime, or of a relationship's validity... | [Relationship](../classes/Relationship.md) |
| [end_date](../slots/end_date.md) | 0..1 <br/> [Date](../types/Date.md) | End of the event, project runtime or relationship | [Relationship](../classes/Relationship.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Project](../classes/Project.md) | [organization_roles](../slots/organization_roles.md) | range | [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | cerif:Project_OrganisationUnit |
| native | idhi:OrganizationProjectRole |






## LinkML Source

<!-- TODO: investigate https://stackoverflow.com/questions/37606292/how-to-create-tabbed-code-blocks-in-mkdocs-or-sphinx -->

### Direct

<details>
```yaml
name: OrganizationProjectRole
description: 'An organization''s engagement in a project. Use one instance per role:
  an organization that both hosts and funds a project gets two instances.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: Relationship
slots:
- organization
- project
- org_project_role
class_uri: cerif:Project_OrganisationUnit

```
</details>

### Induced

<details>
```yaml
name: OrganizationProjectRole
description: 'An organization''s engagement in a project. Use one instance per role:
  an organization that both hosts and funds a project gets two instances.'
from_schema: https://idhi.co.il/linkml/idhi
is_a: Relationship
attributes:
  organization:
    name: organization
    description: The organization side of the relationship (by IDHI URN).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    owner: OrganizationProjectRole
    domain_of:
    - Affiliation
    - OrganizationProjectRole
    - FacilityAffiliation
    range: Organization
    required: true
  project:
    name: project
    description: The project side of the relationship (by IDHI URN).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    owner: OrganizationProjectRole
    domain_of:
    - ProjectParticipation
    - OrganizationProjectRole
    range: Project
    required: true
  org_project_role:
    name: org_project_role
    description: 'The organization''s function in the project: COORDINATOR leads the
      consortium, PARTNER contributes work, FUNDER provides money, HOST provides the
      institutional home. Create one relationship instance per role.'
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:roleName
    owner: OrganizationProjectRole
    domain_of:
    - OrganizationProjectRole
    range: OrgProjectRoleEnum
  start_date:
    name: start_date
    description: Start of the event, of the project's runtime, or of a relationship's
      validity (e.g. when a person joined a project or organization).
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:startDate
    owner: OrganizationProjectRole
    domain_of:
    - Project
    - Event
    - Relationship
    range: date
  end_date:
    name: end_date
    description: End of the event, project runtime or relationship. Omit for ongoing
      relationships and open-ended projects.
    from_schema: https://idhi.co.il/linkml/idhi
    rank: 1000
    slot_uri: schema:endDate
    owner: OrganizationProjectRole
    domain_of:
    - Project
    - Event
    - Relationship
    range: date
class_uri: cerif:Project_OrganisationUnit

```
</details></div>