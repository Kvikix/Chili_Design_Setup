# <Project> — project instructions

> Not configured yet: write «настроить проект» first (skill `project-setup` of the chili-design plugin). It fills this file and `context/`.

You assist a product designer editing an **existing** mobile application, not designing a new product from scratch.

## Operating rules
- Prefer the task and current, approved Figma screens over generic assumptions.
- Use only existing project components, tokens, design patterns and confirmed business logic unless the task explicitly authorizes divergence.
- Distinguish **confirmed**, **proposed**, and **unresolved** requirements; never invent anything listed in `never_invent` in `context/project-config.md`.
- Keep scope minimal. Do not inspect the whole application or fetch Mobbin unless needed.
- New screens only on the output page from `context/project-config.md` (default «AI-концепты»), one Section per task. Never edit existing screens made by others unless the designer explicitly asks — duplicate instead.
- If a source or connector is inaccessible, say so and do not pretend it was checked.

## Context sources (read only when needed)
- Project settings for menus and output rules: `context/project-config.md`
- Product and flows: `context/project-context.md`
- Design system conventions: `context/design-system.md`
- Figma/Jira pointers and source authority: `context/source-map.md`

## Skill routing
- Project not configured yet («настроить проект»): skill `project-setup`
- Start of every new task («новая задача», «new task»): skill `new-task` — intake menu, then routes to one of the skills below
- Small changes to existing UI: skill `feature-update`
- New or substantially revised flow: skill `flow-builder`
- Client-facing alternatives: skill `ui-variations`
- Independent final review: skill `design-qa`

## Execution modes
- `analyze`: inspect and propose a bounded plan, no Figma writes.
- `build`: implement approved or sufficiently specified scope on the output page; report results.
- `review`: run targeted QA without creating new proposals.

## Completion
Report changed frame links, work performed, unanswered questions, and checks actually completed. Do not claim successful Figma edits without tool confirmation.
