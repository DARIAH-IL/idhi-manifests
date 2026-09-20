---
search:
  boost: 10.0
---

# Class: OrganizationProjectRole 


_An organization's engagement nested in a Project, so the project is inferred from the containing record. Use one instance per role in Project.organization_roles and do not provide the containing project's ID. Record a funder with Project.funding, not with a role here._



<div data-search-exclude markdown="1">



URI: [cerif:Project_OrganisationUnit](https://w3id.org/cerif/model#Project_OrganisationUnit)




```mermaid
 classDiagram
    class OrganizationProjectRole
      Relationship <|-- OrganizationProjectRole
        click Relationship href "../../classes/Relationship/"
      

      

      OrganizationProjectRole : end_date
        
      OrganizationProjectRole : org_project_role
        
          
    
        
        
        OrganizationProjectRole --> "0..1" OrgProjectRoleEnum : org_project_role
        
        click OrgProjectRoleEnum href "../../enums/OrgProjectRoleEnum/"
        
    

        
      OrganizationProjectRole : organization
        
          
    
        
        
        OrganizationProjectRole --> "1" Organization : organization
        
        click Organization href "../../classes/Organization/"
        
    

        
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
| [organization](../slots/organization.md) | <span title="Required: exactly one value">1</span> <br/> [Organization](../classes/Organization.md) | <span title="The organization referenced by a person affiliation or project role (by IDHI URN). The Person or Project containing the relationship supplies its other endpoint.">The organization referenced by a person affiliation or project role (by IDHI ...</span> | direct |
| [org_project_role](../slots/org_project_role.md) | <span title="Optional: at most one value">0..1</span> <br/> [OrgProjectRoleEnum](../enums/OrgProjectRoleEnum.md) | <span title="The organization's function in the project: COORDINATOR leads the consortium, PARTNER contributes work, DATA_PROVIDER supplies source data, and HOST provides the institutional home. Create one relationship instance per role; record a funder with Project.funding, not with a role here.">The organization's function in the project: COORDINATOR leads the consortium,...</span> | direct |
| [start_date](../slots/start_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="Start of the event, of the project's runtime, or of a relationship's validity, such as when participation, affiliation, maintenance responsibility or formal containment began.">Start of the event, of the project's runtime, or of a relationship's validity...</span> | [Relationship](../classes/Relationship.md) |
| [end_date](../slots/end_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="End of the event, project runtime or relationship. Omit for ongoing relationships and open-ended projects.">End of the event, project runtime or relationship</span> | [Relationship](../classes/Relationship.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Project](../classes/Project.md) | [organization_roles](../slots/organization_roles.md) | range | [OrganizationProjectRole](../classes/OrganizationProjectRole.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | cerif:Project_OrganisationUnit |
| native | idhi:OrganizationProjectRole |






## LinkML Source

### Direct

<details>
```yaml
name: OrganizationProjectRole
description: An organization's engagement nested in a Project, so the project is inferred
  from the containing record. Use one instance per role in Project.organization_roles
  and do not provide the containing project's ID. Record a funder with Project.funding,
  not with a role here.
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Relationship
slots:
- organization
- org_project_role
class_uri: cerif:Project_OrganisationUnit

```
</details>

### Induced

<details>
```yaml
name: OrganizationProjectRole
description: An organization's engagement nested in a Project, so the project is inferred
  from the containing record. Use one instance per role in Project.organization_roles
  and do not provide the containing project's ID. Record a funder with Project.funding,
  not with a role here.
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Relationship
attributes:
  organization:
    name: organization
    description: The organization referenced by a person affiliation or project role
      (by IDHI URN). The Person or Project containing the relationship supplies its
      other endpoint.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: OrganizationProjectRole
    domain_of:
    - Affiliation
    - OrganizationProjectRole
    range: Organization
    required: true
  org_project_role:
    name: org_project_role
    description: 'The organization''s function in the project: COORDINATOR leads the
      consortium, PARTNER contributes work, DATA_PROVIDER supplies source data, and
      HOST provides the institutional home. Create one relationship instance per role;
      record a funder with Project.funding, not with a role here.'
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:roleName
    owner: OrganizationProjectRole
    domain_of:
    - OrganizationProjectRole
    range: OrgProjectRoleEnum
  start_date:
    name: start_date
    description: Start of the event, of the project's runtime, or of a relationship's
      validity, such as when participation, affiliation, maintenance responsibility
      or formal containment began.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:startDate
    owner: OrganizationProjectRole
    domain_of:
    - Project
    - Event
    - Relationship
    - Funding
    range: date
  end_date:
    name: end_date
    description: End of the event, project runtime or relationship. Omit for ongoing
      relationships and open-ended projects.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:endDate
    owner: OrganizationProjectRole
    domain_of:
    - Project
    - Event
    - Relationship
    - Funding
    range: date
class_uri: cerif:Project_OrganisationUnit

```
</details></div>