# Project config

Read by `new-task` and the workflow skills. Filled by `project-setup`. Keep the keys; change only values.

```yaml
project: <fill>
domain: <fill>               # product area: fintech, education, e-commerce…
docs: []                      # Confluence / other links describing the project
project_type: existing        # existing = live product with approved screens | greenfield = new product from scratch
design_system_ready: true     # false for greenfield until a design system exists → «Строго по дизайн-системе» is hidden
language:
  chat: ru            # language of questions to the designer
  ui: [<fill>]        # UI languages, e.g. [lv] — copy inside mockups uses the first one
  design: en          # page, section, frame and layer names, annotations, labels in Figma — always English
task_tracker:
  type: jira          # jira | none (new project without a tracker — tasks come as text)
  site: <fill>        # e.g. company.atlassian.net
  key_patterns: [<fill>]   # e.g. ["EK-\\d+", "EKW-\\d+"]
products:
  - name: <fill>
    audience: <fill>
    jira_projects: [<fill>]
    figma_file: <fill>
    figma_pages_of_truth: []   # optional page names/ids considered approved
    design_system: [<fill>]    # [] for greenfield without a design system yet
platform_options: [<fill>]     # e.g. ["Mob + Web", "Только mob", "Только web"]
themes: [light]
default_mode: ask              # ask | analyze | wireframe | build
default_ui_approach: auto      # auto (system for existing, free for greenfield) | system | extend | free
output:
  page_name: Playground AI
  section_naming: "<KEY> — <short title> — <YYYY-MM-DD>"   # English; no key → "<short title> — <YYYY-MM-DD>"
  protect_existing: true
never_invent: [<fill>]   # [] = nothing permanent, decided per task
work_types:              # project_types: which project types show this item in the menu
  - id: feature-update
    label: Доработка флоу / экрана
    menu_hint: Изменить существующий экран, компонент или участок флоу
    skill: feature-update
    project_types: [existing]
    enabled: true
  - id: research-directions
    label: Исследование и направления
    menu_hint: Паттерны рынка и 2–3 направления для нового продукта
    skill: pattern-research
    project_types: [greenfield]
    enabled: true
  - id: flow-builder
    label: Новый флоу
    menu_hint: Создать или переработать последовательность экранов
    skill: flow-builder
    project_types: [existing, greenfield]
    enabled: true
  - id: ui-variations
    label: Концепты новой функции
    menu_hint: Несколько вариантов решения для клиента
    skill: ui-variations
    project_types: [existing, greenfield]
    enabled: true
  - id: ui-foundation
    label: Создание UI-основы
    menu_hint: Цвета, типографика, сетка и базовые компоненты будущей дизайн-системы
    skill: ui-craft
    project_types: [greenfield]
    enabled: true
  - id: design-qa
    label: Design QA
    menu_hint: Проверить готовые экраны по задаче
    skill: design-qa
    project_types: [existing, greenfield]
    enabled: true
  - id: motion
    label: Motion / визуальные ассеты
    menu_hint: Анимация, графика, иллюстрации
    skill: none
    asks: [style reference, source materials, export format]
    project_types: [existing, greenfield]
    enabled: false
  - id: store-assets
    label: Store assets
    menu_hint: Скриншоты для сторов по шаблону
    skill: none
    asks: [template link, sizes, locales]
    project_types: [existing]
    enabled: false
```
