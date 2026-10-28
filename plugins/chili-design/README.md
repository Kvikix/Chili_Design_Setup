# Chili design setup

Claude plugin **chili-design** for Chili Labs designers working on existing products and new projects: project setup, a «новая задача» intake menu, and workflows for feature updates, flows, UI variations and design QA — with Jira and Figma.

## What's inside

| Skill | Say | What it does |
|---|---|---|
| `project-setup` | «настроить проект» | Existing product → finds it in Jira/Figma; new project → manual input. Asks for a Confluence link or a description. Creates `CLAUDE.md` + `context/` and saves `context/` to the Claude Project |
| `new-task` | «новая задача» / «new task» | Menu: work type, product, platforms, mode → Jira → Figma → runs the right workflow |
| `feature-update` | via menu | Change an existing screen, component or part of a flow; 1 variant by default, more on request |
| `flow-builder` | via menu | New or substantially reworked flow |
| `ui-variations` | via menu | Concepts for a new feature; you choose how many (default 3, up to 5) |
| `design-qa` | via menu | Check finished screens against the task |
| `wireframe` | menu → «Вайрфрейм в чате» | Low-fi wireframes in the chat; «перенеси в Figma» hands off to the design skill |
| `pattern-research` | menu → Mobbin / «Исследование и направления» | Mobbin research: examples, patterns, directions |
| `ui-craft` | menu → «Новый визуал», «ДС + улучшения», «Создание UI-основы» | Strong visual UI from chosen references; UI foundation for new products |

Every design decision and QA finding ends with a short source: (NN/g), (WCAG 2.5.8), (закон Фиттса).

Menu: task type → product → platforms → **how we work** (analysis / wireframe in chat / Figma) → **UI approach** (strict design system / + improvements / new visual) → **references** (mine / Mobbin / ui-craft taste, several allowed) → number of variants. Project type (existing or from scratch) is set once in «настроить проект» and changes the menu defaults.

Rules for every workflow: new screens only on the **«Playground AI»** page (one section per task), existing screens are never edited unless you ask. Copy inside mockups is in the project UI language; page, section, frame names, annotations and labels in Figma are always English. The chat stays in Russian.

Project context (`context/*.md`) is saved in the project folder and in the attached Claude Project, so new chats have it. Say «обнови контекст» when project facts change. No per-task logs.

## Install (once per designer)

You need access to this private repository (ask Viktorija) and to be signed in to GitHub on your computer (GitHub Desktop is enough).

**Claude Code**
```
/plugin marketplace add Kvikix/Chili_Design_Setup
/plugin install chili-design@chili-design-setup
```
Then `/plugin` → **Marketplaces** → `chili-design-setup` → **Enable auto-update**.

**Claude desktop app (Cowork)** — install the `.plugin` file shared by Viktorija, or from the Chili Labs plugin catalog once it's published there.

Also connect the **Figma** and **Atlassian (Jira)** connectors.

## Start a new project
1. Create an empty folder for the project (e.g. `Desktop/acme-app`) and open/connect it in Claude.
2. Write **«настроить проект»**. Answer the questions, review the generated files.
3. For every task write **«новая задача»**.

Project files (`CLAUDE.md`, `context/`) live only in the project folder — never put client data in this repository.

## For the maintainer: updating skills
1. Edit files in `plugins/chili-design/skills/…`.
2. Bump `version` in `plugins/chili-design/.claude-plugin/plugin.json` (e.g. 0.2.0 → 0.2.1) — Claude only detects an update when the version changes.
3. GitHub Desktop → Summary → **Commit to main** → **Push origin**.

## Structure
```
.claude-plugin/marketplace.json        catalog (one plugin)
plugins/chili-design/
  .claude-plugin/plugin.json           name + version
  skills/<skill>/SKILL.md              9 skills
  skills/project-setup/templates/      CLAUDE.md, SETUP_CHECKLIST.md, context/*.md for new projects
  references/ux-principles.md          UX/UI best practices used by the design and QA skills
  references/wcag-2.2.md               WCAG 2.2 AA checklist for designers
  references/nngroup.md                Nielsen Norman Group key guidance (summary)
  references/ui-taste.md               UI craft taste guide (built-in reference base)
```

## Changelog
**0.8.0**
- Figma language: UI copy in the project language; page/section/frame names, annotations and labels (`Variant A`, `Proposal`) always English (`language.design`).
- Default output page renamed to «Playground AI».
- `project-setup`: first question «существующий продукт или новый проект»; new project = manual input (name, platform, domain, Figma links, design system), no Jira/Figma searches.
- `project-setup`: asks for a Confluence link or a free description of the project.
- Context files are saved to the attached Claude Project; `new-task` reads them from there if the folder has none; «обнови контекст» updates them.
- Shorter `CLAUDE.md` template (project specifics only) with a «Role» block: Senior UX/UI Product Designer, UX first, domain filled in by `project-setup`.
