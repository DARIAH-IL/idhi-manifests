---
search:
  boost: 2.0
---

# Enum: FundingStatusEnum 




_IDHI-governed values for the current primary way a project is financially or operationally sustained; no established controlled vocabulary covers these project-maintenance states. Historical grants belong in Funding records; choose the value that best describes the project's present circumstances._



<div data-search-exclude markdown="1">

URI: [idhi:enum/FundingStatusEnum](https://idhi_placeholder/linkml/enum/FundingStatusEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| ACTIVE_GRANT_FUNDING | None | <span title="A current time-bounded grant or award is the project's primary support; use INSTITUTIONALLY_SUSTAINED for ongoing core institutional support.">A current time-bounded grant or award is the project's primary support; use I...</span> |
| INSTITUTIONALLY_SUSTAINED | None | <span title="An organization sustains the project through ongoing core resources rather than a distinct active grant; use IN_KIND_ONLY when support is limited to contributed facilities, staff time or services.">An organization sustains the project through ongoing core resources rather th...</span> |
| IN_KIND_ONLY | None | <span title="The project currently receives non-cash support such as facilities, hosting, staff time or services but no direct funding; use VOLUNTEER_RUN when unpaid individual labor is the primary support.">The project currently receives non-cash support such as facilities, hosting, ...</span> |
| VOLUNTEER_RUN | None | <span title="The project is currently developed or maintained primarily through unpaid individual labor; past seed grants should still be recorded separately in funding.">The project is currently developed or maintained primarily through unpaid ind...</span> |
| UNFUNDED | None | <span title="The project currently has neither direct funding nor material institutional, in-kind or volunteer support; do not use this merely because a past grant has ended if active maintenance continues under another model.">The project currently has neither direct funding nor material institutional, ...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [funding_status](../slots/funding_status.md) | <span title="The project's current primary funding or sustainability status at the time the record is maintained. Use this for present support, while funding records preserve past and current award history; update it when the project's circumstances change. This uses an IDHI-specific property because established vocabularies do not provide a controlled current-sustainability status for projects.">The project's current primary funding or sustainability status at the time th...</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: FundingStatusEnum
description: IDHI-governed values for the current primary way a project is financially
  or operationally sustained; no established controlled vocabulary covers these project-maintenance
  states. Historical grants belong in Funding records; choose the value that best
  describes the project's present circumstances.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  ACTIVE_GRANT_FUNDING:
    text: ACTIVE_GRANT_FUNDING
    description: A current time-bounded grant or award is the project's primary support;
      use INSTITUTIONALLY_SUSTAINED for ongoing core institutional support.
  INSTITUTIONALLY_SUSTAINED:
    text: INSTITUTIONALLY_SUSTAINED
    description: An organization sustains the project through ongoing core resources
      rather than a distinct active grant; use IN_KIND_ONLY when support is limited
      to contributed facilities, staff time or services.
  IN_KIND_ONLY:
    text: IN_KIND_ONLY
    description: The project currently receives non-cash support such as facilities,
      hosting, staff time or services but no direct funding; use VOLUNTEER_RUN when
      unpaid individual labor is the primary support.
  VOLUNTEER_RUN:
    text: VOLUNTEER_RUN
    description: The project is currently developed or maintained primarily through
      unpaid individual labor; past seed grants should still be recorded separately
      in funding.
  UNFUNDED:
    text: UNFUNDED
    description: The project currently has neither direct funding nor material institutional,
      in-kind or volunteer support; do not use this merely because a past grant has
      ended if active maintenance continues under another model.

```
</details>

</div>