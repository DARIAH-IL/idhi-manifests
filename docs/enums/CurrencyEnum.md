---
search:
  boost: 2.0
---

# Enum: CurrencyEnum 




_Currencies in which a funding award amount may be expressed, as ISO 4217 codes. The list covers the currencies relevant to IDHI records; extend it before recording an award in another currency._



<div data-search-exclude markdown="1">

URI: [idhi:enum/CurrencyEnum](https://idhi_placeholder/linkml/enum/CurrencyEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| ILS | [http://www.wikidata.org/entity/Q131309](http://www.wikidata.org/entity/Q131309) | <span title="Israeli new shekel, the default currency for awards from Israeli funders when none is stated.">Israeli new shekel, the default currency for awards from Israeli funders when...</span> |
| USD | [http://www.wikidata.org/entity/Q4917](http://www.wikidata.org/entity/Q4917) | <span title="United States dollar; use for awards denominated in dollars, not for converted approximations of another currency.">United States dollar; use for awards denominated in dollars, not for converte...</span> |
| EUR | [http://www.wikidata.org/entity/Q4916](http://www.wikidata.org/entity/Q4916) | <span title="Euro; use for awards denominated in euros, such as European Union programme grants, not for converted approximations of another currency.">Euro; use for awards denominated in euros, such as European Union programme g...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [funding_currency](../slots/funding_currency.md) | <span title="Currency of funding_amount. Record it whenever the amount is present and the currency is known; omit it when no amount is recorded.">Currency of funding_amount</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: CurrencyEnum
description: Currencies in which a funding award amount may be expressed, as ISO 4217
  codes. The list covers the currencies relevant to IDHI records; extend it before
  recording an award in another currency.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  ILS:
    text: ILS
    description: Israeli new shekel, the default currency for awards from Israeli
      funders when none is stated.
    meaning: http://www.wikidata.org/entity/Q131309
  USD:
    text: USD
    description: United States dollar; use for awards denominated in dollars, not
      for converted approximations of another currency.
    meaning: http://www.wikidata.org/entity/Q4917
  EUR:
    text: EUR
    description: Euro; use for awards denominated in euros, such as European Union
      programme grants, not for converted approximations of another currency.
    meaning: http://www.wikidata.org/entity/Q4916

```
</details>

</div>