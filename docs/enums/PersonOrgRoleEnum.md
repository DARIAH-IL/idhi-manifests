---
search:
  boost: 2.0
---

# Enum: PersonOrgRoleEnum 




_IDHI-governed roles and statuses for a person's formal relationship with an organization. Choose the most specific applicable role, use separate Affiliation instances for distinct concurrent or successive roles, and keep project-specific responsibilities in ProjectParticipation._



<div data-search-exclude markdown="1">

URI: [idhi:enum/PersonOrgRoleEnum](https://idhi_placeholder/linkml/enum/PersonOrgRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| EMPLOYEE | None | <span title="A person employed by the organization when no more specific affiliation role applies; use FACULTY or RESEARCHER for those appointments and CONTRACTOR for external contract work.">A person employed by the organization when no more specific affiliation role ...</span> |
| FACULTY | None | <span title="A person holding a faculty appointment of any academic rank; use this instead of EMPLOYEE even when the appointment includes research, and use RESEARCHER for non-faculty research staff.">A person holding a faculty appointment of any academic rank; use this instead...</span> |
| RESEARCHER | None | <span title="A person holding a non-faculty research appointment, including a research associate or postdoctoral position; use FACULTY for faculty and ProjectParticipation for research performed only within a particular project.">A person holding a non-faculty research appointment, including a research ass...</span> |
| STUDENT | None | <span title="A person formally enrolled at the organization; use INTERN when the organizational relationship is specifically a training placement rather than ordinary enrollment.">A person formally enrolled at the organization; use INTERN when the organizat...</span> |
| INTERN | None | <span title="A person in a time-limited supervised training or work-placement role; do not use merely because an enrolled student works on a project.">A person in a time-limited supervised training or work-placement role; do not...</span> |
| FOUNDER | None | <span title="A person who established or co-established the organization; record OWNER separately when they also hold ownership, and do not use for someone who merely joined early.">A person who established or co-established the organization; record OWNER sep...</span> |
| OWNER | None | <span title="A person with a formal legal or equity ownership interest in the organization; record FOUNDER separately when they also established it, and do not use for managerial responsibility without ownership.">A person with a formal legal or equity ownership interest in the organization...</span> |
| ADVISOR | None | <span title="A person with a formal ongoing advisory relationship to the organization; use ProjectParticipation for advice limited to a project and CONTRACTOR for bounded paid professional work.">A person with a formal ongoing advisory relationship to the organization; use...</span> |
| CONTRACTOR | None | <span title="A person engaged by the organization under an external service or independent-work contract; use EMPLOYEE for staff employment and ADVISOR for an ongoing advisory appointment.">A person engaged by the organization under an external service or independent...</span> |
| VOLUNTEER | None | <span title="A person formally contributing unpaid service to the organization; use MEMBER when the relationship is membership without a defined volunteer role.">A person formally contributing unpaid service to the organization; use MEMBER...</span> |
| MEMBER | None | <span title="A formal member of a center, lab, society or similar organization when no more specific affiliation role applies; do not use as a generic substitute for employment or informal participation.">A formal member of a center, lab, society or similar organization when no mor...</span> |
| FELLOW | None | <span title="A person holding a formally designated fellowship at the organization; use RESEARCHER or STUDENT when no fellowship status exists and MEMBER for membership without a fellowship appointment.">A person holding a formally designated fellowship at the organization; use RE...</span> |
| AFFILIATE | None | <span title="A person with a formal organizational association that is neither employment, enrollment, membership, fellowship nor another listed role; do not use for informal collaboration or project-only participation.">A person with a formal organizational association that is neither employment,...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [affiliation_role](../slots/affiliation_role.md) | <span title="The person's role or status in the organization, not their role in a project. Prefer the most specific applicable value, use EMPLOYEE or MEMBER only when no finer role fits, and create separate Affiliation instances when materially distinct roles coexist or apply during different dates.">The person's role or status in the organization, not their role in a project</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: PersonOrgRoleEnum
description: IDHI-governed roles and statuses for a person's formal relationship with
  an organization. Choose the most specific applicable role, use separate Affiliation
  instances for distinct concurrent or successive roles, and keep project-specific
  responsibilities in ProjectParticipation.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  EMPLOYEE:
    text: EMPLOYEE
    description: A person employed by the organization when no more specific affiliation
      role applies; use FACULTY or RESEARCHER for those appointments and CONTRACTOR
      for external contract work.
  FACULTY:
    text: FACULTY
    description: A person holding a faculty appointment of any academic rank; use
      this instead of EMPLOYEE even when the appointment includes research, and use
      RESEARCHER for non-faculty research staff.
  RESEARCHER:
    text: RESEARCHER
    description: A person holding a non-faculty research appointment, including a
      research associate or postdoctoral position; use FACULTY for faculty and ProjectParticipation
      for research performed only within a particular project.
  STUDENT:
    text: STUDENT
    description: A person formally enrolled at the organization; use INTERN when the
      organizational relationship is specifically a training placement rather than
      ordinary enrollment.
  INTERN:
    text: INTERN
    description: A person in a time-limited supervised training or work-placement
      role; do not use merely because an enrolled student works on a project.
  FOUNDER:
    text: FOUNDER
    description: A person who established or co-established the organization; record
      OWNER separately when they also hold ownership, and do not use for someone who
      merely joined early.
  OWNER:
    text: OWNER
    description: A person with a formal legal or equity ownership interest in the
      organization; record FOUNDER separately when they also established it, and do
      not use for managerial responsibility without ownership.
  ADVISOR:
    text: ADVISOR
    description: A person with a formal ongoing advisory relationship to the organization;
      use ProjectParticipation for advice limited to a project and CONTRACTOR for
      bounded paid professional work.
  CONTRACTOR:
    text: CONTRACTOR
    description: A person engaged by the organization under an external service or
      independent-work contract; use EMPLOYEE for staff employment and ADVISOR for
      an ongoing advisory appointment.
  VOLUNTEER:
    text: VOLUNTEER
    description: A person formally contributing unpaid service to the organization;
      use MEMBER when the relationship is membership without a defined volunteer role.
  MEMBER:
    text: MEMBER
    description: A formal member of a center, lab, society or similar organization
      when no more specific affiliation role applies; do not use as a generic substitute
      for employment or informal participation.
  FELLOW:
    text: FELLOW
    description: A person holding a formally designated fellowship at the organization;
      use RESEARCHER or STUDENT when no fellowship status exists and MEMBER for membership
      without a fellowship appointment.
  AFFILIATE:
    text: AFFILIATE
    description: A person with a formal organizational association that is neither
      employment, enrollment, membership, fellowship nor another listed role; do not
      use for informal collaboration or project-only participation.

```
</details>

</div>