# Project config

Read by `/new-task` and the workflow skills. Filled by `/project-setup`. Keep the keys; change only values.

```yaml
project: <fill>
language:
  chat: ru            # language of questions to the designer
  ui: [<fill>]        # UI languages, e.g. [lv]
task_tracker:
  type: jira
  site: <fill>        # e.g. company.atlassian.net
  key_patterns: [<fill>]   # e.g. ["EK-\\d+", "EKW-\\d+"]
products:
  - name: <fill>
    audience: <fill>
    jira_projects: [<fill>]
    figma_file: <fill>
    figma_pages_of_truth: []   # optional page names/ids considered approved
    design_system: [<fill>]
platform_options: [<fill>]     # e.g. ["Mob + Web", "Только mob", "Только web"]
themes: [light]
default_mode: ask              # ask | analyze | build
output:
  page_name: AI-концепты
  section_naming: "<KEY> — <short title> — <YYYY-MM-DD>"
  protect_existing: true
never_invent: [<fill>]
work_types:
  - id: feature-update
    label: Доработка флоу / экрана
    menu_hint: Изменить существующий экран, компонент или участок флоу
    skill: feature-update
    enabled: true
  - id: flow-builder
    label: Новый флоу
    menu_hint: Создать или переработать последовательность экранов
    skill: flow-builder
    enabled: true
  - id: ui-variations
    label: Концепты новой функции
    menu_hint: 2–3 варианта решения для клиента
    skill: ui-variations
    enabled: true
  - id: design-qa
    label: Design QA
    menu_hint: Проверить готовые экраны по задаче
    skill: design-qa
    enabled: true
  - id: motion
    label: Motion / визуальные ассеты
    menu_hint: Анимация, графика, иллюстрации
    skill: none
    asks: [style reference, source materials, export format]
    enabled: false
  - id: store-assets
    label: Store assets
    menu_hint: Скриншоты для сторов по шаблону
    skill: none
    asks: [template link, sizes, locales]
    enabled: false
```
