---
search:
  boost: 2.0
---

# Enum: AuthorshipRoleEnum 




_The kind of contribution to a publication._



<div data-search-exclude markdown="1">

URI: [idhi:enum/AuthorshipRoleEnum](https://idhi_placeholder/linkml/enum/AuthorshipRoleEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| AUTHOR | None | <span title="Byline author (the default).">Byline author (the default)</span> |
| EDITOR | None | <span title="Editor of a volume or collection.">Editor of a volume or collection</span> |
| TRANSLATOR | None | <span title="Translator of the work.">Translator of the work</span> |
| CONTRIBUTOR | None | <span title="Named non-byline contribution.">Named non-byline contribution</span> |




## Slots

| Name | Description |
| ---  | --- |
| [authorship_role](../slots/authorship_role.md) | <span title="The kind of contribution. AUTHOR is the default for byline authors; use EDITOR/TRANSLATOR for edited volumes and translations; CONTRIBUTOR for named non-byline contributions.">The kind of contribution</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: AuthorshipRoleEnum
description: The kind of contribution to a publication.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  AUTHOR:
    text: AUTHOR
    description: Byline author (the default).
  EDITOR:
    text: EDITOR
    description: Editor of a volume or collection.
  TRANSLATOR:
    text: TRANSLATOR
    description: Translator of the work.
  CONTRIBUTOR:
    text: CONTRIBUTOR
    description: Named non-byline contribution.

```
</details>

</div>