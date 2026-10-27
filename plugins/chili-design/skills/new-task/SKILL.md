---
name: new-task
description: Intake menu for a new design task in any configured project. Use whenever the designer writes «новая задача», «new task» or /new-task. Builds the menu from context/project-config.md (products, platforms, work types, Jira, Figma), collects Jira and Figma, then routes to the matching workflow skill.
argument-hint: "[optional: Jira URL or short description]"
---

# New task — intake menu (project-agnostic)

Everything project-specific comes from **`context/project-config.md`**. This skill contains no project names, links or rules of its own.

## Step 0 — Load the project config
- Project folder = the connected folder (or working directory) that contains `context/project-config.md`; if several do, ask which project. Read its YAML block and the project's `CLAUDE.md`. If it is missing or still has `<fill>` values in `products`, stop and say: «Проект ещё не настроен — напишите «настроить проект»» (skill `project-setup`). Do not guess.
- Ask questions in `language.chat` from the config (default: Russian).
- If the designer's first message or `$ARGUMENTS` already answers something (Jira link, Figma link, work type), skip that question.

## Step 1 — Menu (one AskUserQuestion call, max 4 questions, 2–4 options each)
Build questions only from the config; skip a question when the config has a single value for it (use that value silently).

1. **«Что нужно сделать?»** (header `Тип работы`) — from `work_types` where `enabled: true`, in config order.
   - ≤4 enabled → one option each (label + `menu_hint` as description).
   - >4 enabled → first 3 as options, 4th option `Другое` with the remaining labels in its description; if chosen, ask Step 1b with the remaining types.
2. **«Какой продукт?»** (header `Продукт`) — from `products[].name` (+ `audience` as description). Skip if one product.
3. **«Платформы?»** (header `Платформы`) — from `platform_options`. Skip if one option.
4. **«С чего начать?»** (header `Режим`) — `Сначала анализ (Recommended)` → analyze; `Сразу рисовать` → build. If `default_mode` is `analyze` or `build`, skip and use it.

### Step 1c — Number of variants (only for `feature-update` and `ui-variations`)
Skip if the designer already gave a number. Otherwise one AskUserQuestion, header `Варианты`, «Сколько вариантов дизайна экрана сделать?»:
- feature-update: `1 (Recommended)` — одно решение по задаче · `2` · `3` (custom number via free text)
- ui-variations: `2` · `3 (Recommended)` · `4` (custom number via free text)
Allowed range 1–5; if more is requested, confirm it's intended (each variant costs time and tokens). Pass it to the skill as `variants=N`.

## Step 2 — Task source
Ask in plain text: «Пришлите ссылку на задачу (или ключ) или опишите задачу текстом».
- Tracker link/key matching `task_tracker.key_patterns` → read it via the connector (description + latest comments). Confirm title + 1–2 lines.
- Plain text → use as-is; never claim the tracker was checked.
- Connector unavailable → say so, ask for the text.
- Extract Figma links from the task.

## Step 3 — Figma source
- Figma link present in the task → use it, don't ask.
- Otherwise ask: «Пришлите ссылку на Figma-экран, с которого начинаем (или "нет", если функция новая)».
- No link → use the selected product's `figma_file` and find the nearest existing screens with a bounded search (use `figma_pages_of_truth` if listed; never crawl the whole file).

## Step 4 — Summary and hand-off
Send and wait for «ок» or corrections:
```
Задача: <key> — <title>
Тип: <work type> → <skill>
Продукт / платформы: <…>
Исходные экраны: <Figma link(s)>
Куда рисую: страница «<output.page_name>» → секция «<section name>»
Варианты: N (feature-update, ui-variations)
Режим: analyze | build
Открытые вопросы: <if any>
```
Then invoke the chosen work type's skill from this plugin (`feature-update`, `flow-builder`, `ui-variations`, `design-qa`) and pass it the collected context; it reads the project's `context/*.md` as needed. If the work type has `skill: none`, work from `CLAUDE.md` rules and ask the extra questions listed in its `asks` field.

## Output rules (all workflows)
- New screens only on the page `output.page_name` of the selected product's Figma file; create the page if missing and tell the designer.
- One Section per task, named by `output.section_naming`.
- If `output.protect_existing: true` — never edit, move or delete existing screens; duplicate into the task Section and edit the copy. Edit originals only on explicit request in this chat.
- Use only the product's `design_system` libraries; respect `themes`.
- Never invent anything listed in `never_invent` — take it from the task or list as an open question.
- Report Figma links only after the tool confirms the write.
