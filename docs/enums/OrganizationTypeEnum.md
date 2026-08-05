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
| ACADEMIC_INSTITUTION | [schema:CollegeOrUniversity](http://schema.org/CollegeOrUniversity) | A degree-granting university or college |
| GLAM_INSTITUTION | None | A gallery, library, archive or museum |
| RESEARCH_CENTER | [schema:ResearchOrganization](http://schema.org/ResearchOrganization) | A research center or institute, whether independent or within a university (i... |
| FUNDER | [schema:FundingScheme](http://schema.org/FundingScheme) | A body whose primary role is funding research |
| COMPANY | [schema:Corporation](http://schema.org/Corporation) | A commercial company |
| NON_PROFIT | [schema:NGO](http://schema.org/NGO) | A non-profit organization / NGO |




## Slots

| Name | Description |
| ---  | --- |
| [organization_type](../slots/organization_type.md) | The kind of organization |










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

```
</details>

</div>