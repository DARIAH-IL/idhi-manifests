---
search:
  boost: 5.0
---

# Slot: authorship_role 


_The kind of contribution. AUTHOR is the default for byline authors; use EDITOR/TRANSLATOR for edited volumes and translations; CONTRIBUTOR for named non-byline contributions._



<div data-search-exclude markdown="1">



URI: [schema:roleName](http://schema.org/roleName)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Authorship](../classes/Authorship.md) | A person's contribution to a publication, with author order and role |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [AuthorshipRoleEnum](../enums/AuthorshipRoleEnum.md) |
| Domain Of | [Authorship](../classes/Authorship.md) |
| Slot URI | [schema:roleName](http://schema.org/roleName) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi.co.il/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:roleName |
| native | idhi:authorship_role |




## LinkML Source

<details>
```yaml
name: authorship_role
description: The kind of contribution. AUTHOR is the default for byline authors; use
  EDITOR/TRANSLATOR for edited volumes and translations; CONTRIBUTOR for named non-byline
  contributions.
from_schema: https://idhi.co.il/linkml/idhi
rank: 1000
slot_uri: schema:roleName
domain_of:
- Authorship
range: AuthorshipRoleEnum

```
</details></div>