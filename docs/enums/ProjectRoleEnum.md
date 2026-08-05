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
| PRINCIPAL_INVESTIGATOR | None | <span title="The formally designated lead researcher (PI).">The formally designated lead researcher (PI)</span> |
| CO_PI | None | <span title="A formally designated co-principal investigator.">A formally designated co-principal investigator</span> |
| RESEARCHER | [https://credit.niso.org/contributor-roles/investigation/](https://credit.niso.org/contributor-roles/investigation/) | <span title="A team member conducting the scholarly research.">A team member conducting the scholarly research</span> |
| DEVELOPER | [https://credit.niso.org/contributor-roles/software/](https://credit.niso.org/contributor-roles/software/) | <span title="A team member building the project's software.">A team member building the project's software</span> |
| STUDENT | None | <span title="An enrolled student (BA/MA/PhD) working on the project in any capacity — student status takes precedence over task.">An enrolled student (BA/MA/PhD) working on the project in any capacity — stud...</span> |
| ADVISOR | [https://credit.niso.org/contributor-roles/supervision/](https://credit.niso.org/contributor-roles/supervision/) | <span title="An external mentor or advisory-board member.">An external mentor or advisory-board member</span> |
| CONTRIBUTOR | None | <span title="Fallback for any other named involvement.">Fallback for any other named involvement</span> |




## Slots

| Name | Description |
| ---  | --- |
| [participation_role](../slots/participation_role.md) | <span title="The person's function within the project team. Use PRINCIPAL_INVESTIGATOR only for the formally designated PI(s); day-to-day scholarly work is RESEARCHER, software work is DEVELOPER, enrolled students are STUDENT regardless of their task, external mentors are ADVISOR, and CONTRIBUTOR is the fallback for anything else.">The person's function within the project team</span> |










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