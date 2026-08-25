---
search:
  boost: 5.0
---

# Slot: funding_currency 


_Currency of funding_amount. Record it whenever the amount is present and the currency is known; omit it when no amount is recorded._



<div data-search-exclude markdown="1">



URI: [schema:currency](http://schema.org/currency)
<!-- no inheritance hierarchy -->





## Applicable Classes

| Name | Description | Modifies Slot |
| --- | --- | --- |
| [Funding](../classes/Funding.md) | A distinct funding award for a project, identifying the organization that pro... |  no  |






## Properties

### Type and Range

| Property | Value |
| --- | --- |
| Range | [CurrencyEnum](../enums/CurrencyEnum.md) |
| Domain Of | [Funding](../classes/Funding.md) |
| Slot URI | [schema:currency](http://schema.org/currency) |

### Cardinality and Requirements

| Property | Value |
| --- | --- |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi




## Mappings

| Mapping Type | Mapped Value |
| ---  | ---  |
| self | schema:currency |
| native | idhi:funding_currency |




## LinkML Source

<details>
```yaml
name: funding_currency
description: Currency of funding_amount. Record it whenever the amount is present
  and the currency is known; omit it when no amount is recorded.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
slot_uri: schema:currency
domain_of:
- Funding
range: CurrencyEnum

```
</details></div>