---
search:
  boost: 5.0
---

# Slot: funding_url 


_Public landing page for the individual award or its authoritative funding record. Use the funding organization's homepage on the Organization record instead when no award-specific page exists._



<div data-search-exclude markdown="1">



URI: [schema:url](http://schema.org/url)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [Uri](../types/Uri.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [schema:url](http://schema.org/url) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:url |
| native | idhi:funding_url |




## LinkML Source

<details>
```yaml
name: funding_url
description: Public landing page for the individual award or its authoritative funding
  record. Use the funding organization's homepage on the Organization record instead
  when no award-specific page exists.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:url
domain_of:
- Funding
range: uri

```
</details></div>