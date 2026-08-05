---
search:
  boost: 2.0
---

# Enum: ProjectRoleEnum 




_A person's role in a project. Where a CRediT (Contributor Roles Taxonomy) concept approximates the role, `meaning:` records it._



<div data-search-exclude markdown="1">

URI: [idhi:enum/ProjectRoleEnum](https://idhi_placeholder/linkml/enum/ProjectRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| PRINCIPAL_INVESTIGATOR | None | The formally designated lead researcher (PI) |
| CO_PI | None | A formally designated co-principal investigator |
| RESEARCHER | [https://credit.niso.org/contributor-roles/investigation/](https://credit.niso.org/contributor-roles/investigation/) | A team member conducting the scholarly research |
| DEVELOPER | [https://credit.niso.org/contributor-roles/software/](https://credit.niso.org/contributor-roles/software/) | A team member building the project's software |
| STUDENT | None | An enrolled student (BA/MA/PhD) working on the project in any capacity — stud... |
| ADVISOR | [https://credit.niso.org/contributor-roles/supervision/](https://credit.niso.org/contributor-roles/supervision/) | An external mentor or advisory-board member |
| CONTRIBUTOR | None | Fallback for any other named involvement |




## Slots

| Name | Description |
| ---  | --- |
| [participation_role](../slots/participation_role.md) | The person's function within the project team |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: ProjectRoleEnum
description: A person's role in a project. Where a CRediT (Contributor Roles Taxonomy)
  concept approximates the role, `meaning:` records it.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  PRINCIPAL_INVESTIGATOR:
    text: PRINCIPAL_INVESTIGATOR
    description: The formally designated lead researcher (PI).
  CO_PI:
    text: CO_PI
    description: A formally designated co-principal investigator.
  RESEARCHER:
    text: RESEARCHER
    description: A team member conducting the scholarly research.
    meaning: https://credit.niso.org/contributor-roles/investigation/
  DEVELOPER:
    text: DEVELOPER
    description: A team member building the project's software.
    meaning: https://credit.niso.org/contributor-roles/software/
  STUDENT:
    text: STUDENT
    description: An enrolled student (BA/MA/PhD) working on the project in any capacity
      — student status takes precedence over task.
  ADVISOR:
    text: ADVISOR
    description: An external mentor or advisory-board member.
    meaning: https://credit.niso.org/contributor-roles/supervision/
  CONTRIBUTOR:
    text: CONTRIBUTOR
    description: Fallback for any other named involvement.

```
</details>

</div>