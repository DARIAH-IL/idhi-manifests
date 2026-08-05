---
search:
  boost: 10.0
---

# Class: IndexContainer 


_Top-level holder for all IDHI records. Big entities live exactly once in these lists; everything else references them by their IDHI URN._



<div data-search-exclude markdown="1">



URI: [idhi:class/IndexContainer](https://idhi_placeholder/linkml/class/IndexContainer)




```mermaid
 classDiagram
    class IndexContainer
      

      

      IndexContainer : datasets
        
          
    
        
        
        IndexContainer --> "*" Dataset : datasets
        
        click Dataset href "../../classes/Dataset/"
        
    

        
      IndexContainer : events
        
          
    
        
        
        IndexContainer --> "*" Event : events
        
        click Event href "../../classes/Event/"
        
    

        
      IndexContainer : facilities
        
          
    
        
        
        IndexContainer --> "*" Facility : facilities
        
        click Facility href "../../classes/Facility/"
        
    

        
      IndexContainer : organizations
        
          
    
        
        
        IndexContainer --> "*" Organization : organizations
        
        click Organization href "../../classes/Organization/"
        
    

        
      IndexContainer : persons
        
          
    
        
        
        IndexContainer --> "*" Person : persons
        
        click Person href "../../classes/Person/"
        
    

        
      IndexContainer : projects
        
          
    
        
        
        IndexContainer --> "*" Project : projects
        
        click Project href "../../classes/Project/"
        
    

        
      IndexContainer : publications
        
          
    
        
        
        IndexContainer --> "*" Publication : publications
        
        click Publication href "../../classes/Publication/"
        
    

        
      IndexContainer : services
        
          
    
        
        
        IndexContainer --> "*" Service : services
        
        click Service href "../../classes/Service/"
        
    

        
      IndexContainer : tools
        
          
    
        
        
        IndexContainer --> "*" Tool : tools
        
        click Tool href "../../classes/Tool/"
        
    

        
      
```



## Class Properties

| Property | Value |
| --- | --- |
| Tree Root | Yes |


## Slots

| Name | Cardinality and Range | Description | Inheritance |
| ---  | --- | --- | --- |
| [persons](../slots/persons.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Person](../classes/Person.md) | <span title="All Person records in the index.">All Person records in the index</span> | direct |
| [organizations](../slots/organizations.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Organization](../classes/Organization.md) | <span title="All Organization records in the index.">All Organization records in the index</span> | direct |
| [projects](../slots/projects.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Project](../classes/Project.md) | <span title="All Project records in the index.">All Project records in the index</span> | direct |
| [facilities](../slots/facilities.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Facility](../classes/Facility.md) | <span title="All Facility records in the index.">All Facility records in the index</span> | direct |
| [tools](../slots/tools.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Tool](../classes/Tool.md) | <span title="All Tool records in the index.">All Tool records in the index</span> | direct |
| [services](../slots/services.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Service](../classes/Service.md) | <span title="All Service records in the index.">All Service records in the index</span> | direct |
| [publications](../slots/publications.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Publication](../classes/Publication.md) | <span title="All Publication records in the index.">All Publication records in the index</span> | direct |
| [events](../slots/events.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Event](../classes/Event.md) | <span title="All Event records in the index.">All Event records in the index</span> | direct |
| [datasets](../slots/datasets.md) | <span title="Optional: zero or more values allowed">*</span> <br/> [Dataset](../classes/Dataset.md) | <span title="All Dataset records in the index, including digital archives and catalogs.">All Dataset records in the index, including digital archives and catalogs</span> | direct |















## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | idhi:IndexContainer |
| native | idhi:IndexContainer |






## LinkML Source

### Direct

<details>
```yaml
name: IndexContainer
description: Top-level holder for all IDHI records. Big entities live exactly once
  in these lists; everything else references them by their IDHI URN.
from_schema: https://idhi_placeholder/linkml/idhi
attributes:
  persons:
    name: persons
    description: All Person records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Person
    multivalued: true
    inlined_as_list: true
  organizations:
    name: organizations
    description: All Organization records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Organization
    multivalued: true
    inlined_as_list: true
  projects:
    name: projects
    description: All Project records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Project
    multivalued: true
    inlined_as_list: true
  facilities:
    name: facilities
    description: All Facility records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Facility
    multivalued: true
    inlined_as_list: true
  tools:
    name: tools
    description: All Tool records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Tool
    multivalued: true
    inlined_as_list: true
  services:
    name: services
    description: All Service records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Service
    multivalued: true
    inlined_as_list: true
  publications:
    name: publications
    description: All Publication records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Publication
    multivalued: true
    inlined_as_list: true
  events:
    name: events
    description: All Event records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    domain_of:
    - IndexContainer
    range: Event
    multivalued: true
    inlined_as_list: true
  datasets:
    name: datasets
    description: All Dataset records in the index, including digital archives and
      catalogs.
    from_schema: https://idhi_placeholder/linkml/idhi
    domain_of:
    - Dataset
    - IndexContainer
    range: Dataset
    multivalued: true
    inlined_as_list: true
tree_root: true

```
</details>

### Induced

<details>
```yaml
name: IndexContainer
description: Top-level holder for all IDHI records. Big entities live exactly once
  in these lists; everything else references them by their IDHI URN.
from_schema: https://idhi_placeholder/linkml/idhi
attributes:
  persons:
    name: persons
    description: All Person records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Person
    multivalued: true
    inlined: true
    inlined_as_list: true
  organizations:
    name: organizations
    description: All Organization records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Organization
    multivalued: true
    inlined: true
    inlined_as_list: true
  projects:
    name: projects
    description: All Project records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Project
    multivalued: true
    inlined: true
    inlined_as_list: true
  facilities:
    name: facilities
    description: All Facility records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Facility
    multivalued: true
    inlined: true
    inlined_as_list: true
  tools:
    name: tools
    description: All Tool records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Tool
    multivalued: true
    inlined: true
    inlined_as_list: true
  services:
    name: services
    description: All Service records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Service
    multivalued: true
    inlined: true
    inlined_as_list: true
  publications:
    name: publications
    description: All Publication records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Publication
    multivalued: true
    inlined: true
    inlined_as_list: true
  events:
    name: events
    description: All Event records in the index.
    from_schema: https://idhi_placeholder/linkml/idhi
    rank: 1000
    owner: IndexContainer
    domain_of:
    - IndexContainer
    range: Event
    multivalued: true
    inlined: true
    inlined_as_list: true
  datasets:
    name: datasets
    description: All Dataset records in the index, including digital archives and
      catalogs.
    from_schema: https://idhi_placeholder/linkml/idhi
    owner: IndexContainer
    domain_of:
    - Dataset
    - IndexContainer
    range: Dataset
    multivalued: true
    inlined: true
    inlined_as_list: true
tree_root: true

```
</details></div>