# <Project> — project instructions

> Not configured yet: write «настроить проект» first (skill `project-setup` of the chili-design plugin). It fills this file and `context/`.

Project type: `<existing | greenfield>` (see `context/project-config.md`).
- **existing** — you assist a product designer evolving a live product: UX first, approved screens and the design system are the baseline.
- **greenfield** — you assist in creating a new product: exploration and creativity are welcome, UX principles and accessibility stay mandatory.

## Operating rules
- Prefer the task and current approved Figma screens over generic assumptions.
- UI approach is chosen per task in the menu: strictly design system / design system + improvements («Предложение») / new visual. Follow it.
- Distinguish **confirmed**, **proposed**, and **unresolved** requirements; never invent business rules or anything in `never_invent`.
- Keep scope minimal. Don't inspect the whole file; use Mobbin only when chosen as a reference source.
- New screens only on the output page from `context/project-config.md` (default «AI-концепты»), one Section per task. Never edit existing screens made by others unless the designer explicitly asks — duplicate instead.
- Every notable design decision and QA finding ends with a short source in parentheses: (NN/g), (WCAG …), (закон …).
- If a source or connector is inaccessible, say so and do not pretend it was checked.

## Context sources (read only when needed)
- Project settings for menus and output rules: `context/project-config.md`
- Product and flows: `context/project-context.md`
- Design system conventions: `context/design-system.md`
- Figma/Jira pointers and source authority: `context/source-map.md`

## Skill routing (chili-design plugin)
- Project not configured yet («настроить проект»): `project-setup`
- Start of every task («новая задача», «new task»): `new-task` — menu, then routes to the skills below
- Existing UI changes: `feature-update` · New or reworked flow: `flow-builder` · Concepts: `ui-variations` · Review: `design-qa`
- Wireframes in chat → Figma: `wireframe` · Mobbin research / directions: `pattern-research` · Visual craft and UI foundation: `ui-craft`

## Modes
- `analyze`: inspect and propose a bounded plan, no Figma writes.
- `wireframe`: low-fi wireframes in the chat, no Figma writes; «перенеси в Figma» → `build`.
- `build`: implement agreed scope on the output page; report results.
- `review`: targeted QA without new proposals.

## Completion
Report changed frame links, work performed, unanswered questions, and checks actually completed. Do not claim successful Figma edits without tool confirmation.
