---
name: new-task
description: Intake menu for a new design task in any configured project. Use whenever the designer writes «новая задача», «new task» or /new-task. Builds the menu from context/project-config.md (project type, products, platforms, work types), asks how to work (analysis, wireframe in chat, Figma), the UI approach and reference sources, collects Jira and Figma, then routes to the matching skill.
argument-hint: "[optional: Jira URL or short description]"
---

# New task — intake menu (project-agnostic)

Everything project-specific comes from **`context/project-config.md`**. This skill contains no project names, links or rules of its own.

## Step 0 — Load the project config
- Project folder = the connected folder (or working directory) that contains `context/project-config.md`; if several do, ask which project. Read its YAML block and the project's `CLAUDE.md`. If the folder has no `context/` but a Claude Project is attached, read `context/project-config.md` from the project (`project_read`). Read only the config and `CLAUDE.md` here; other `context/*.md` are read later by the workflow skill, only the sections it needs. If the config is missing or still has `<fill>` values in `products`, stop and say: «Проект ещё не настроен — напишите «настроить проект»» (skill `project-setup`). Do not guess.
- `project_type` missing → treat as `existing`. `design_system_ready` missing → `true`. `work_types[].project_types` missing → item applies to every type.
- Ask questions in `language.chat` (default Russian). If the designer's first message or `$ARGUMENTS` already answers something (Jira link, Figma link, work type, mode, number of variants), skip that question.
- AskUserQuestion allows max 4 questions per call and 2–4 options per question (free text is always available). Skip any question whose answer is fixed by the config.

## Block 1 — Task and way of working (one AskUserQuestion call)
1. **«Что нужно сделать?»** (header `Тип работы`) — `work_types` with `enabled: true` and current `project_type` in `project_types`, in config order. ≤4 → one option each (label + `menu_hint`). >4 → first 3 + `Другое` listing the rest; if chosen, ask a follow-up with the remaining types.
2. **«Какой продукт?»** (header `Продукт`) — `products[].name` + `audience`. Skip if one.
3. **«Платформы?»** (header `Платформы`) — `platform_options`. Skip if one.
4. **«Как работаем?»** (header `Режим`) — skip if `default_mode` ≠ `ask`:
   - `Сначала анализ (Recommended)` → `analyze`: план и вопросы, без отрисовки
   - `Вайрфрейм в чате` → `wireframe`: быстрый набросок прямо в чате, потом можно перенести в Figma
   - `Сразу рисовать в Figma` → `build`: отрисовка на странице «<output.page_name>»
   For `design-qa`, `motion`, `store-assets` skip this question (QA is always `review`).

## Block 2 — UI approach, references, variants
Skip the whole block for `design-qa`, `motion`, `store-assets`.

5. **«Как работаем с UI?»** (header `UI`) — skip if `default_ui_approach` ≠ `auto`:
   - `Строго по дизайн-системе` → `ui=system`: только существующие компоненты и токены. Hide this option if `design_system_ready: false`.
   - `Дизайн-система + улучшения` → `ui=extend`: основа своя, новые компоненты и улучшения — с пометкой `Proposal` в Figma.
   - `Новый визуал` → `ui=free`: свободный креатив, UX-принципы и WCAG остаются обязательными.
   Mark as `(Recommended)`: `system` for existing projects with `feature-update` / `flow-builder`; `extend` for existing `ui-variations`; `free` for greenfield (or `extend` once `design_system_ready: true`).
6. **«Откуда берём референсы?»** (header `Референсы`, **multiSelect**) — only if `ui` ≠ `system`, or always for greenfield:
   - `Мои референсы` — ссылки или картинки, попрошу прислать
   - `Mobbin` — как это сделано в реальных приложениях (skill `pattern-research`)
   - `Вкус ui-craft` — встроенная база принципов и эталонов (skill `ui-craft`)
   Nothing selected → work from the design system (if any) and UX principles only.
7. **«Сколько вариантов?»** (header `Варианты`) — only for `feature-update` and `ui-variations`:
   - feature-update: `1 (Recommended)` · `2` · `3`; ui-variations: `2` · `3 (Recommended)` · `4`. Free text allowed; range 1–5, confirm if more.

Ask Block 2 in one call when possible. Question 6 depends on 5: for existing projects ask 5 and 7 first, then 6 only if `ui` ≠ `system`; for greenfield ask 5, 6, 7 together.

If `Мои референсы` was chosen, ask right away: «Пришлите ссылки или картинки референсов и, если можно, что в них нравится».

## Step 2 — Task source
Ask in plain text: «Пришлите ссылку на задачу (или ключ) или опишите задачу текстом».
- `task_tracker.type: none` → ask only for a text description.
- Tracker link/key matching `task_tracker.key_patterns` → read it via the connector (description + latest comments). Confirm title + 1–2 lines.
- Plain text → use as-is; never claim the tracker was checked. Connector unavailable → say so, ask for the text.
- Extract Figma links from the task.

## Step 3 — Figma source
- Figma link present in the task → use it, don't ask.
- Otherwise ask: «Пришлите ссылку на Figma-экран, с которого начинаем (или "нет", если функция новая)».
- No link → use the product's `figma_file` and find the nearest existing screens with a bounded search (use `figma_pages_of_truth`; never crawl the whole file). Greenfield with no screens yet → skip.

## Step 4 — Summary and hand-off
Send and wait for «ок» or corrections:
```
Задача: <key> — <title>
Тип: <work type> → <skill>
Продукт / платформы: <…>
Исходные экраны: <Figma link(s) | нет>
Режим: analyze | wireframe | build
UI: строго по ДС | ДС + улучшения | новый визуал
Референсы: <мои / Mobbin / вкус ui-craft / нет>
Варианты: N
Куда рисую: <«чат» для вайрфрейма | страница «<output.page_name>» → секция «<section name>»>
Открытые вопросы: <if any>
```

Then run, in this order:
1. **References** (only those selected): `Mobbin` → skill `pattern-research` (short mode: 5–8 examples + patterns); `Мои референсы` → analyse the provided links/images (what to take: layout, hierarchy, typography, colour, density, interaction); `Вкус ui-craft` → skill `ui-craft` (direction only). Summarise the chosen direction in 3–5 lines before designing.
2. **Mode**:
   - `analyze` → invoke the work type's skill with `mode=analyze`.
   - `wireframe` → invoke skill `wireframe` with the task context, `variants`, and the work type's skill as `handoff`. When the designer says «перенеси в Figma» (or similar), invoke the `handoff` skill with `mode=build` and the approved wireframe as the structure.
   - `build` → invoke the work type's skill with `mode=build`.
3. Always pass: `ui=<system|extend|free>`, `refs=<summary from step 1>`, `variants=N`, product, platforms, Figma sources. Work types with `skill: none` → work from `CLAUDE.md` and ask the extra questions in `asks`.

## Output rules (all workflows)
- New screens only on the page `output.page_name` (default «Playground AI») of the selected product's Figma file; create the page if missing and tell the designer. One Section per task, named by `output.section_naming` (English).
- Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.
- If `output.protect_existing: true` — never edit, move or delete existing screens; duplicate into the task Section and edit the copy. Edit originals only on explicit request in this chat.
- `ui=system` → only the product's `design_system` libraries. `ui=extend` → library first; every new component/style is labelled `Proposal`. `ui=free` → new visual allowed. In all cases respect `themes`, UX principles and WCAG 2.2 AA.
- Never invent anything listed in `never_invent`, and never invent business rules in any mode — take them from the task or list as open questions.
- Report Figma links only after the tool confirms the write.
- Project context: when the designer confirms new project facts (flow, rule, component, link) or says «обнови контекст», update the relevant `context/*.md` in the folder and in the attached Claude Project (`project_write`); show the change in 1–3 lines first. No per-task logs.
