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
| COORDINATOR | None | Leads/coordinates the project or consortium |
| PARTNER | None | Contributes work as a consortium member |
| FUNDER | None | Provides funding for the project |
| HOST | None | Provides the institutional/administrative home |




## Slots

| Name | Description |
| ---  | --- |
| [org_project_role](../slots/org_project_role.md) | The organization's function in the project: COORDINATOR leads the consortium,... |










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