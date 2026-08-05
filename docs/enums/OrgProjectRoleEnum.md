---
search:
  boost: 2.0
---

# Enum: OrgProjectRoleEnum 




_An organization's role in a project (one instance per role)._



<div data-search-exclude markdown="1">

URI: [idhi:enum/OrgProjectRoleEnum](https://idhi_placeholder/linkml/enum/OrgProjectRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| COORDINATOR | None | <span title="Leads/coordinates the project or consortium.">Leads/coordinates the project or consortium</span> |
| PARTNER | None | <span title="Contributes work as a consortium member.">Contributes work as a consortium member</span> |
| FUNDER | None | <span title="Provides funding for the project.">Provides funding for the project</span> |
| HOST | None | <span title="Provides the institutional/administrative home.">Provides the institutional/administrative home</span> |




## Slots

| Name | Description |
| ---  | --- |
| [org_project_role](../slots/org_project_role.md) | <span title="The organization's function in the project: COORDINATOR leads the consortium, PARTNER contributes work, FUNDER provides money, HOST provides the institutional home. Create one relationship instance per role.">The organization's function in the project: COORDINATOR leads the consortium,...</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: OrgProjectRoleEnum
description: An organization's role in a project (one instance per role).
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  COORDINATOR:
    text: COORDINATOR
    description: Leads/coordinates the project or consortium.
  PARTNER:
    text: PARTNER
    description: Contributes work as a consortium member.
  FUNDER:
    text: FUNDER
    description: Provides funding for the project.
  HOST:
    text: HOST
    description: Provides the institutional/administrative home.

```
</details>

</div>