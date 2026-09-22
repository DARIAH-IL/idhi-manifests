---
search:
  boost: 5.0
---

# Slot: related_tools 


_Tools that the containing resource centers on (by IDHI URN): those whose use a training material teaches or demonstrates, and those a service supports, hosts, trains people in or runs on the requester's behalf. Do not use it for software that is merely how the material was produced or how the service is delivered behind the scenes; the test is whether someone who found the tool would want this record returned alongside it._



<div data-search-exclude markdown="1">



URI: [schema:about](http://schema.org/about)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Service](../classes/Service.md) | A reusable, human- or organization-mediated service offered by an organizatio... |  no  |
| [TrainingMaterial](../classes/TrainingMaterial.md) | A tutorial, lesson or other didactic resource that explains how to perform an... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Tool](../classes/Tool.md) |
| Domain Of | [Service](../classes/Service.md), [TrainingMaterial](../classes/TrainingMaterial.md) |
| Slot URI | [schema:about](http://schema.org/about) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |
| Multivalued | Yes |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:about |
| native | idhi:related_tools |




## LinkML Source

<details>
```yaml
name: related_tools
description: 'Tools that the containing resource centers on (by IDHI URN): those whose
  use a training material teaches or demonstrates, and those a service supports, hosts,
  trains people in or runs on the requester''s behalf. Do not use it for software
  that is merely how the material was produced or how the service is delivered behind
  the scenes; the test is whether someone who found the tool would want this record
  returned alongside it.'
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:about
domain_of:
- Service
- TrainingMaterial
range: Tool
multivalued: true

```
</details></div>