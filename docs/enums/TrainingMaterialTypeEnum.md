---
search:
  boost: 2.0
---

# Enum: TrainingMaterialTypeEnum 




_Didactic forms of training material. Choose the form that describes the learner's intended mode of engagement rather than the resource's technical format._



<div data-search-exclude markdown="1">

URI: [idhi:enum/TrainingMaterialTypeEnum](https://idhi_placeholder/linkml/enum/TrainingMaterialTypeEnum)

## Permissible Values
| Value | Meaning | Description |
| --- | --- | --- |
| TUTORIAL | [schema:HowTo](http://schema.org/HowTo) | <span title="A step-by-step explanation of how to complete an action; use LESSON when conceptual instruction or stated outcomes are primary.">A step-by-step explanation of how to complete an action; use LESSON when conc...</span> |
| LESSON | None | <span title="A bounded unit designed to achieve learning outcomes; use TUTORIAL for primarily procedural, step-by-step guidance.">A bounded unit designed to achieve learning outcomes; use TUTORIAL for primar...</span> |
| COURSE_MATERIAL | None | <span title="A syllabus, module collection or resource pack supporting a structured course; use LESSON for one bounded instructional unit.">A syllabus, module collection or resource pack supporting a structured course...</span> |
| WORKSHOP_MATERIAL | None | <span title="Exercises, slides or instructions designed for a facilitated workshop; use COURSE_MATERIAL for a longer structured course.">Exercises, slides or instructions designed for a facilitated workshop; use CO...</span> |
| SELF_PACED_EXERCISE | None | <span title="A practical activity intended for independent completion; use TUTORIAL when guided explanation rather than learner practice is primary.">A practical activity intended for independent completion; use TUTORIAL when g...</span> |
| OTHER_DIDACTIC_RESOURCE | None | <span title="A teaching resource that fits none of the more specific forms; use only after the specific values have been considered.">A teaching resource that fits none of the more specific forms; use only after...</span> |




## Slots

| Name | Description |
| ---  | --- |
| [training_material_type](../slots/training_material_type.md) | <span title="The material's primary didactic form. Choose the single value that best describes how learners engage with it, not its file format.">The material's primary didactic form</span> |










## Identifier and Mapping Information





### Schema Source


* from schema: https://idhi_placeholder/linkml/idhi






## LinkML Source

<details>
```yaml
name: TrainingMaterialTypeEnum
description: Didactic forms of training material. Choose the form that describes the
  learner's intended mode of engagement rather than the resource's technical format.
from_schema: https://idhi_placeholder/linkml/idhi
rank: 1000
permissible_values:
  TUTORIAL:
    text: TUTORIAL
    description: A step-by-step explanation of how to complete an action; use LESSON
      when conceptual instruction or stated outcomes are primary.
    meaning: schema:HowTo
  LESSON:
    text: LESSON
    description: A bounded unit designed to achieve learning outcomes; use TUTORIAL
      for primarily procedural, step-by-step guidance.
  COURSE_MATERIAL:
    text: COURSE_MATERIAL
    description: A syllabus, module collection or resource pack supporting a structured
      course; use LESSON for one bounded instructional unit.
  WORKSHOP_MATERIAL:
    text: WORKSHOP_MATERIAL
    description: Exercises, slides or instructions designed for a facilitated workshop;
      use COURSE_MATERIAL for a longer structured course.
  SELF_PACED_EXERCISE:
    text: SELF_PACED_EXERCISE
    description: A practical activity intended for independent completion; use TUTORIAL
      when guided explanation rather than learner practice is primary.
  OTHER_DIDACTIC_RESOURCE:
    text: OTHER_DIDACTIC_RESOURCE
    description: A teaching resource that fits none of the more specific forms; use
      only after the specific values have been considered.

```
</details>

</div>