---
search:
  boost: 2.0
---

# Enum: OrgProjectRoleEnum 




_An organization's or facility's role in a project (one instance per role)._



<div data-search-exclude markdown="1">

URI: [idhi:enum/OrgProjectRoleEnum](https://idhi_placeholder/linkml/enum/OrgProjectRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| COORDINATOR | None | <span title="Leads/coordinates the project or consortium.">Leads/coordinates the project or consortium</span> |
| PARTNER | None | <span title="Contributes work as a consortium member.">Contributes work as a consortium member</span> |
| DATA_PROVIDER | [schema:provider](http://schema.org/provider) | <span title="Supplies a source collection or data used by the project without thereby acting as its host or coordinator.">Supplies a source collection or data used by the project without thereby acti...</span> |
| HOST | None | <span title="Provides the institutional/administrative home.">Provides the institutional/administrative home</span> |




## Slots

| Name | Description |
| ---  | --- |
| [org_project_role](../slots/org_project_role.md) | <span title="The organization's or facility's function in the project: COORDINATOR leads the consortium, PARTNER contributes work, DATA_PROVIDER supplies source data, and HOST provides the institutional home. Create one relationship instance per role; record a funder with Project.funding, not with a role here.">The organization's or facility's function in the project: COORDINATOR leads t...</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: OrgProjectRoleEnum
description: An organization's or facility's role in a project (one instance per role).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  COORDINATOR:
    text: COORDINATOR
    description: Leads/coordinates the project or consortium.
  PARTNER:
    text: PARTNER
    description: Contributes work as a consortium member.
  DATA_PROVIDER:
    text: DATA_PROVIDER
    description: Supplies a source collection or data used by the project without
      thereby acting as its host or coordinator.
    meaning: schema:provider
  HOST:
    text: HOST
    description: Provides the institutional/administrative home.

```
</details>

</div>