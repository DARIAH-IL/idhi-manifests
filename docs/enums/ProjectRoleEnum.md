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
| DH_LEAD | [https://credit.niso.org/contributor-roles/methodology/](https://credit.niso.org/contributor-roles/methodology/) | <span title="Leads the project's digital-humanities method, data model, research pipeline or digital-edition architecture. Use this for intellectual leadership of the digital approach, distinct from the formal PI and from software implementation.">Leads the project's digital-humanities method, data model, research pipeline ...</span> |
| TECHNICAL_LEAD | [https://credit.niso.org/contributor-roles/software/](https://credit.niso.org/contributor-roles/software/) | <span title="Owns or directs the project's software engineering and technical maintenance. Use this when responsibility exceeds implementation by a DEVELOPER; use DH_LEAD instead for leadership of the scholarly digital method or data model.">Owns or directs the project's software engineering and technical maintenance</span> |
| DEVELOPER | [https://credit.niso.org/contributor-roles/software/](https://credit.niso.org/contributor-roles/software/) | <span title="A team member implementing the project's software under their own or another person's technical direction; use TECHNICAL_LEAD when they own the engineering architecture and maintenance.">A team member implementing the project's software under their own or another ...</span> |
| STUDENT | None | <span title="An enrolled student (BA/MA/PhD) working on the project in any capacity — student status takes precedence over task.">An enrolled student (BA/MA/PhD) working on the project in any capacity — stud...</span> |
| ADVISOR | [https://credit.niso.org/contributor-roles/supervision/](https://credit.niso.org/contributor-roles/supervision/) | <span title="An external mentor or advisory-board member providing ongoing guidance; use CONSULTANT for bounded professional work with a defined deliverable.">An external mentor or advisory-board member providing ongoing guidance; use C...</span> |
| CONSULTANT | None | <span title="An external specialist engaged for bounded professional work, such as designing an initial data model. Use ADVISOR for mentorship or board guidance and CONTRIBUTOR only when the work cannot be described more specifically; no established CRediT role exactly matches consultancy.">An external specialist engaged for bounded professional work, such as designi...</span> |
| CONTRIBUTOR | None | <span title="Fallback for any other named involvement.">Fallback for any other named involvement</span> |




## Slots

| Name | Description |
| ---  | --- |
| [participation_role](../slots/participation_role.md) | <span title="The person's function within the project team. Use PRINCIPAL_INVESTIGATOR only for the formally designated PI(s); DH_LEAD for digital method and architecture, TECHNICAL_LEAD for ownership of software engineering, DEVELOPER for implementation, CONSULTANT for bounded external professional work, RESEARCHER for scholarly research, STUDENT for enrolled students, ADVISOR for mentorship, and CONTRIBUTOR only when none of the specific values fits.">The person's function within the project team</span> |










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
  DH_LEAD:
    text: DH_LEAD
    description: Leads the project's digital-humanities method, data model, research
      pipeline or digital-edition architecture. Use this for intellectual leadership
      of the digital approach, distinct from the formal PI and from software implementation.
    meaning: https://credit.niso.org/contributor-roles/methodology/
  TECHNICAL_LEAD:
    text: TECHNICAL_LEAD
    description: Owns or directs the project's software engineering and technical
      maintenance. Use this when responsibility exceeds implementation by a DEVELOPER;
      use DH_LEAD instead for leadership of the scholarly digital method or data model.
    meaning: https://credit.niso.org/contributor-roles/software/
  DEVELOPER:
    text: DEVELOPER
    description: A team member implementing the project's software under their own
      or another person's technical direction; use TECHNICAL_LEAD when they own the
      engineering architecture and maintenance.
    meaning: https://credit.niso.org/contributor-roles/software/
  STUDENT:
    text: STUDENT
    description: An enrolled student (BA/MA/PhD) working on the project in any capacity
      — student status takes precedence over task.
  ADVISOR:
    text: ADVISOR
    description: An external mentor or advisory-board member providing ongoing guidance;
      use CONSULTANT for bounded professional work with a defined deliverable.
    meaning: https://credit.niso.org/contributor-roles/supervision/
  CONSULTANT:
    text: CONSULTANT
    description: An external specialist engaged for bounded professional work, such
      as designing an initial data model. Use ADVISOR for mentorship or board guidance
      and CONTRIBUTOR only when the work cannot be described more specifically; no
      established CRediT role exactly matches consultancy.
  CONTRIBUTOR:
    text: CONTRIBUTOR
    description: Fallback for any other named involvement.

```
</details>

</div>