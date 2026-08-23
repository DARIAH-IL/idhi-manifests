---
search:
  boost: 2.0
---

# Enum: OrganizationTypeEnum 




_Kinds of organization. Canonical discriminator for Organization; pick the value matching the organization's PRIMARY nature._



<div data-search-exclude markdown="1">

URI: [idhi:enum/OrganizationTypeEnum](https://idhi_placeholder/linkml/enum/OrganizationTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| ACADEMIC_INSTITUTION | [schema:CollegeOrUniversity](http://schema.org/CollegeOrUniversity) | <span title="A degree-granting university or college.">A degree-granting university or college</span> |
| GLAM_INSTITUTION | None | <span title="A gallery, library, archive or museum.">A gallery, library, archive or museum</span> |
| RESEARCH_CENTER | [schema:ResearchOrganization](http://schema.org/ResearchOrganization) | <span title="A research center or institute, whether independent or within a university (if within one, also set parent_organization).">A research center or institute, whether independent or within a university (i...</span> |
| FUNDER | [schema:FundingScheme](http://schema.org/FundingScheme) | <span title="A body whose primary role is funding research.">A body whose primary role is funding research</span> |
| COMPANY | [schema:Corporation](http://schema.org/Corporation) | <span title="A commercial company.">A commercial company</span> |
| NON_PROFIT | [schema:NGO](http://schema.org/NGO) | <span title="A non-profit organization / NGO.">A non-profit organization / NGO</span> |
| INFORMAL_GROUP | None | <span title="A named collective without formal incorporation or institutional status. Use this only when the collective itself needs an Organization record; represent independent practitioners as Person records, and leave a project host-less when no organization hosts it. No established organization-type term captures this distinction closely enough for an external meaning.">A named collective without formal incorporation or institutional status</span> |




## Slots

| Name | Description |
| ---  | --- |
| [organization_type](../slots/organization_type.md) | <span title="The kind of organization. Always set it.">The kind of organization</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: OrganizationTypeEnum
description: Kinds of organization. Canonical discriminator for Organization; pick
  the value matching the organization's PRIMARY nature.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  ACADEMIC_INSTITUTION:
    text: ACADEMIC_INSTITUTION
    description: A degree-granting university or college.
    meaning: schema:CollegeOrUniversity
  GLAM_INSTITUTION:
    text: GLAM_INSTITUTION
    description: A gallery, library, archive or museum.
  RESEARCH_CENTER:
    text: RESEARCH_CENTER
    description: A research center or institute, whether independent or within a university
      (if within one, also set parent_organization).
    meaning: schema:ResearchOrganization
  FUNDER:
    text: FUNDER
    description: A body whose primary role is funding research.
    meaning: schema:FundingScheme
  COMPANY:
    text: COMPANY
    description: A commercial company.
    meaning: schema:Corporation
  NON_PROFIT:
    text: NON_PROFIT
    description: A non-profit organization / NGO.
    meaning: schema:NGO
  INFORMAL_GROUP:
    text: INFORMAL_GROUP
    description: A named collective without formal incorporation or institutional
      status. Use this only when the collective itself needs an Organization record;
      represent independent practitioners as Person records, and leave a project host-less
      when no organization hosts it. No established organization-type term captures
      this distinction closely enough for an external meaning.

```
</details>

</div>