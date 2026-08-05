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
| AUTHOR | None | Byline author (the default) |
| EDITOR | None | Editor of a volume or collection |
| TRANSLATOR | None | Translator of the work |
| CONTRIBUTOR | None | Named non-byline contribution |




## Slots

| Name | Description |
| ---  | --- |
| [authorship_role](../slots/authorship_role.md) | The kind of contribution |










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