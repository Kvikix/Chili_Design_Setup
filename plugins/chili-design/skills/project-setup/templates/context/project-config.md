# Project config

Labels and hints are English; the menu shows them in `language.chat`. Read by `new-task` and the workflow skills. Filled by `project-setup`. Keep the keys; change only values.

```yaml
project: <fill>
domain: <fill>               # product area: fintech, education, e-commerce…
docs: []                      # Confluence / other links describing the project
project_type: existing        # existing = live product with approved screens | greenfield = new product from scratch
design_system_ready: true     # false for greenfield until a design system exists → «Strictly design system» is hidden
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
platform_options: [<fill>]     # e.g. ["Mob + Web", "Mob only", "Web only"]
themes: [light]
connectors:
  ask: true                    # ask «Which connectors?» in every new task; false = use default silently
  default: [figma, atlassian]  # figma | atlassian | mobbin — preselected (Recommended) in the menu
external_skills: []           # filled by /project-skills — skills from other plugins connected to this project
#  - id: ui-ux-pro-max:ui-ux-pro-max   # exact name from the skill list
#    label: UI/UX Pro Max
#    use_for: Palettes, styles and font pairings by product type
#    stage: references                  # references | build | review | manual
default_mode: ask              # ask | analyze | wireframe | build
default_ui_approach: auto      # auto (system for existing, free for greenfield) | system | extend | free
output:
  page_name: Playground AI
  section_naming: "<KEY> — <short title> — <YYYY-MM-DD>"   # English; no key → "<short title> — <YYYY-MM-DD>"
  protect_existing: true
validation:              # used by design-validate
  spacing_scale: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40]   # above the last value: multiples of 8
  require_spacing_tokens: true                         # gap/padding/radius must be bound to Spacing/Radius tokens
never_invent: [<fill>]   # [] = nothing permanent, decided per task
work_types:              # project_types: which project types show this item in the menu
  - id: feature-update
    label: Screen / flow update
    menu_hint: Change an existing screen, component or part of a flow
    skill: feature-update
    project_types: [existing]
    enabled: true
  - id: research-directions
    label: Research and directions
    menu_hint: Market patterns and 2–3 directions for a new product
    skill: pattern-research
    project_types: [greenfield]
    enabled: true
  - id: flow-builder
    label: New flow
    menu_hint: Create or rework a sequence of screens
    skill: flow-builder
    project_types: [existing, greenfield]
    enabled: true
  - id: ui-variations
    label: Feature concepts
    menu_hint: Several solution options for the client
    skill: ui-variations
    project_types: [existing, greenfield]
    enabled: true
  - id: ui-foundation
    label: UI foundation
    menu_hint: Colours, typography, grid and core components of the future design system
    skill: ui-craft
    project_types: [greenfield]
    enabled: true
  - id: design-qa
    label: Design QA
    menu_hint: Check finished screens against the task
    skill: design-qa
    project_types: [existing, greenfield]
    enabled: true
  - id: motion
    label: Motion / visual assets
    menu_hint: Animation, graphics, illustrations
    skill: none
    asks: [style reference, source materials, export format]
    project_types: [existing, greenfield]
    enabled: false
  - id: store-assets
    label: Store assets
    menu_hint: Store screenshots from a template
    skill: none
    asks: [template link, sizes, locales]
    project_types: [existing]
    enabled: false
```
