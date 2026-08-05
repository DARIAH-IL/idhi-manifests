---
search:
  boost: 2.0
---

# Enum: LicenseEnum 




_Common licenses for tools and datasets. Extend as needed with canonical meanings._



<div data-search-exclude markdown="1">

URI: [idhi:enum/LicenseEnum](https://idhi_placeholder/linkml/enum/LicenseEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| CC_BY_4_0 | [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/) | Creative Commons Attribution 4 |
| CC_BY_SA_4_0 | [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/) | Creative Commons Attribution-ShareAlike 4 |
| CC0_1_0 | [https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/) | Creative Commons Zero (public domain dedication) |
| MIT | [spdx:MIT](https://spdx.org/licenses/MIT) | MIT License |
| APACHE_2_0 | [spdx:Apache-2.0](https://spdx.org/licenses/Apache-2.0) | Apache License 2 |
| GPL_3_0 | [spdx:GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later) | GNU GPL v3 |




## Slots

| Name | Description |
| ---  | --- |
| [license](../slots/license.md) | The license under which the tool or dataset is released |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: LicenseEnum
description: Common licenses for tools and datasets. Extend as needed with canonical
  meanings.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  CC_BY_4_0:
    text: CC_BY_4_0
    description: Creative Commons Attribution 4.0.
    meaning: https://creativecommons.org/licenses/by/4.0/
  CC_BY_SA_4_0:
    text: CC_BY_SA_4_0
    description: Creative Commons Attribution-ShareAlike 4.0.
    meaning: https://creativecommons.org/licenses/by-sa/4.0/
  CC0_1_0:
    text: CC0_1_0
    description: Creative Commons Zero (public domain dedication).
    meaning: https://creativecommons.org/publicdomain/zero/1.0/
  MIT:
    text: MIT
    description: MIT License.
    meaning: spdx:MIT
  APACHE_2_0:
    text: APACHE_2_0
    description: Apache License 2.0.
    meaning: spdx:Apache-2.0
  GPL_3_0:
    text: GPL_3_0
    description: GNU GPL v3.0 (or later).
    meaning: spdx:GPL-3.0-or-later

```
</details>

</div>