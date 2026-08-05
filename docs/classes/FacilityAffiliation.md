---
search:
  boost: 10.0
---

# Class: FacilityAffiliation 


_A facility's affiliation with an organization. Use one instance per hosting/owning organization; joint labs get several._



<div data-search-exclude markdown="1">



URI: [cerif:Facility_OrganisationUnit](https://w3id.org/cerif/model#Facility_OrganisationUnit)




```mermaid
 classDiagram
    class FacilityAffiliation
      Relationship <|-- FacilityAffiliation
        click Relationship href "../../classes/Relationship/"
      

      

      FacilityAffiliation : end_date
        
      FacilityAffiliation : facility
        
          
    
        
        
        FacilityAffiliation --> "1" Facility : facility
        
        click Facility href "../../classes/Facility/"
        
    

        
      FacilityAffiliation : organization
        
          
    
        
        
        FacilityAffiliation --> "1" Organization : organization
        
        click Organization href "../../classes/Organization/"
        
    

        
      FacilityAffiliation : start_date
        
      
```




## Inheritance
* [Relationship](../classes/Relationship.md)
    * **FacilityAffiliation**


## Class Properties

| Property | Value |
| --- | --- |
| Class URI | [cerif:Facility_OrganisationUnit](https://w3id.org/cerif/model#Facility_OrganisationUnit) |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [facility](../slots/facility.md) | <span title="Required: exactly one value">1</span> <br/> [Facility](../classes/Facility.md) | <span title="The facility side of the relationship (by IDHI URN).">The facility side of the relationship (by IDHI URN)</span> | direct |
| [organization](../slots/organization.md) | <span title="Required: exactly one value">1</span> <br/> [Organization](../classes/Organization.md) | <span title="The organization side of the relationship (by IDHI URN).">The organization side of the relationship (by IDHI URN)</span> | direct |
| [start_date](../slots/start_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="Start of the event, of the project's runtime, or of a relationship's validity (e.g. when a person joined a project or organization).">Start of the event, of the project's runtime, or of a relationship's validity...</span> | [Relationship](../classes/Relationship.md) |
| [end_date](../slots/end_date.md) | <span title="Optional: at most one value">0..1</span> <br/> [Date](../types/Date.md) | <span title="End of the event, project runtime or relationship. Omit for ongoing relationships and open-ended projects.">End of the event, project runtime or relationship</span> | [Relationship](../classes/Relationship.md) |





## Usages

| used by | used in | type | used |
| ---  | --- | --- | --- |
| [Facility](../classes/Facility.md) | [facility_affiliations](../slots/facility_affiliations.md) | range | [FacilityAffiliation](../classes/FacilityAffiliation.md) |












## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | cerif:Facility_OrganisationUnit |
| native | idhi:FacilityAffiliation |






## LinkML Source

### Direct

<details>
```yaml
name: FacilityAffiliation
description: A facility's affiliation with an organization. Use one instance per hosting/owning
  organization; joint labs get several.
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Relationship
slots:
- facility
- organization
class_uri: cerif:Facility_OrganisationUnit

```
</details>

### Induced

<details>
```yaml
name: FacilityAffiliation
description: A facility's affiliation with an organization. Use one instance per hosting/owning
  organization; joint labs get several.
from_schema: https://idhi_placeholder/linkml/idhi
is_a: Relationship
attributes:
  facility:
    name: facility
    description: The facility side of the relationship (by IDHI URN).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: FacilityAffiliation
    domain_of:
    - FacilityAffiliation
    range: Facility
    required: true
  organization:
    name: organization
    description: The organization side of the relationship (by IDHI URN).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: FacilityAffiliation
    domain_of:
    - Affiliation
    - OrganizationProjectRole
    - FacilityAffiliation
    range: Organization
    required: true
  start_date:
    name: start_date
    description: Start of the event, of the project's runtime, or of a relationship's
      validity (e.g. when a person joined a project or organization).
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    slot_uri: schema:startDate
    owner: FacilityAffiliation
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
    owner: FacilityAffiliation
    domain_of:
    - Project
    - Event
    - Relationship
    range: date
class_uri: cerif:Facility_OrganisationUnit

```
</details></div>