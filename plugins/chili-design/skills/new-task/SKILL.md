---
name: new-task
description: Intake menu for a new design task in any configured project. Use whenever the designer asks to start a new task (in any language, e.g. «new task») or types /new-task. Builds the menu from context/project-config.md (project type, products, platforms, work types), asks how to work (analysis, wireframe in chat, Figma), the UI approach and reference sources, collects Jira and Figma, then routes to the matching skill.
argument-hint: "[optional: Jira URL or short description]"
---

# New task — intake menu (project-agnostic)

Designer-facing text in this file (questions, options, messages) is written in English — say it in `language.chat` (default Russian).

Writing: short, no filler — `../../references/writing.md` (applies to chat, plans, reports, annotations).

Not a new task but a request to check frames («validate», «check the frame»)  with Figma links → skip the menu and run skill `design-validate`.

Everything project-specific comes from **`context/project-config.md`**. This skill contains no project names, links or rules of its own.

## Step 0 — Load the project config
- Project folder = the connected folder (or working directory) that contains `context/project-config.md`; if several do, ask which project. Read its YAML block and the project's `CLAUDE.md`. If the folder has no `context/` but a Claude Project is attached, read `context/project-config.md` from the project (`project_read`). Read only the config and `CLAUDE.md` here; other `context/*.md` are read later by the workflow skill, only the sections it needs. If the config is missing or still has `<fill>` values in `products`, stop and say: «The project is not set up yet — ask to set up the project» (skill `project-setup`). Do not guess.
- `project_type` missing → treat as `existing`. `design_system_ready` missing → `true`. `work_types[].project_types` missing → item applies to every type. `connectors` missing → `ask: true`, `default: [figma, atlassian]`.
- Ask questions in `language.chat` (default Russian). If the designer's first message or `$ARGUMENTS` already answers something (Jira link, Figma link, work type, mode, number of variants), skip that question.
- AskUserQuestion allows max 4 questions per call and 2–4 options per question (free text is always available). Skip any question whose answer is fixed by the config.

## Block 1 — Task and way of working (one AskUserQuestion call)
1. **«What needs to be done?»** (header `Work type`) — `work_types` with `enabled: true` and current `project_type` in `project_types`, in config order. ≤4 → one option each (label + `menu_hint`). >4 → first 3 + `Other` listing the rest; if chosen, ask a follow-up with the remaining types.
2. **«Which product?»** (header `Product`) — `products[].name` + `audience`. Skip if one.
3. **«Platforms?»** (header `Platforms`) — `platform_options`. Skip if one.
4. **«How do we work?»** (header `Mode`) — skip if `default_mode` ≠ `ask`:
   - `Analysis first (Recommended)` → `analyze`: plan and questions, no drawing
   - `Wireframe in chat` → `wireframe`: quick sketch in the chat, can move to Figma later
   - `Straight to Figma` → `build`: drawing on the page «<output.page_name>»
   For `design-qa`, `motion`, `store-assets` skip this question (QA is always `review`).
5. **«Which connectors does this task need?»** (header `Connectors`, **multiSelect**) — skip if `connectors.ask: false` (then use `connectors.default`). Options (`(Recommended)` on those in `connectors.default`):
   - `Figma` — read and draw mockups
   - `Jira / Confluence` — the task and project docs
   - `Mobbin` — references from real apps
   Placement: in this Block 1 call if it has fewer than 4 questions; otherwise first in the Block 2 call; if Block 2 is skipped, as its own one-question call. Nothing selected → chat and `context/` files only.

## Block 2 — UI approach, references, variants
Skip the whole block for `design-qa`, `motion`, `store-assets`.

6. **«UI approach?»** (header `UI`) — skip if `default_ui_approach` ≠ `auto`:
   - `Strictly design system` → `ui=system`: existing components and tokens only. Hide this option if `design_system_ready: false`.
   - `Design system + improvements` → `ui=extend`: project base; new components and improvements labelled `Proposal` in Figma.
   - `New visual` → `ui=free`: free creative; UX principles and WCAG stay mandatory.
   Mark as `(Recommended)`: `system` for existing projects with `feature-update` / `flow-builder`; `extend` for existing `ui-variations`; `free` for greenfield (or `extend` once `design_system_ready: true`).
7. **«Where do references come from?»** (header `References`, **multiSelect**) — only if `ui` ≠ `system`, or always for greenfield:
   - `My references` — links or images, ask the designer to send them
   - `Mobbin` — how real apps do it (skill `pattern-research`). Hide if Mobbin was not selected in question 5; if asked in the same call, choosing it here turns the Mobbin connector on.
   - `ui-craft taste` — built-in base of principles and benchmarks (skill `ui-craft`)
   - `UI/UX Pro Max` — styles, palettes, font pairings and UX guidelines by product type (skill `ui-ux-pro-max`)
   Nothing selected → work from the design system (if any) and UX principles only.
8. **«How many variants?»** (header `Variants`) — only for `feature-update` and `ui-variations`:
   - feature-update: `1 (Recommended)` · `2` · `3`; ui-variations: `2` · `3 (Recommended)` · `4`. Free text allowed; range 1–5, confirm if more.

Ask Block 2 in one call when possible. Question 7 depends on 6: for existing projects ask 6 and 8 first, then 7 only if `ui` ≠ `system`; for greenfield ask 6, 7, 8 together.

### Connectors for this task
Use only the selected connectors — never call tools of the others in this task, even if a link to them appears:
- **No Figma** → modes `analyze` / `wireframe` only; skip Step 3. If `build` or `design-qa` was chosen, say Figma is needed and ask to turn it on.
- **No Jira / Confluence** → Step 2 takes the task as text; a Jira or Confluence link → ask to paste its text.
- **No Mobbin** → no `pattern-research`; references come from the other sources.
The menu choice limits what Claude uses; it does not unload connectors from the chat. If any connector is off, add one line to the summary: «To save context, turn off <name> in this chat's connector settings».

If `My references` was chosen, ask right away: «Send links or images of the references and, if you can, what you like about them».

## Step 2 — Task source
Ask in plain text: «Send the task link (or key) or describe the task in text».
- `task_tracker.type: none` or Jira / Confluence not selected → ask only for a text description.
- Tracker link/key matching `task_tracker.key_patterns` → read it via the connector (description + latest comments). Confirm title + 1–2 lines.
- Plain text → use as-is; never claim the tracker was checked. Connector unavailable → say so, ask for the text.
- Extract Figma links from the task.

## Step 3 — Figma source
- Figma link present in the task → use it, don't ask.
- Otherwise ask: «Send a link to the Figma screen we start from (or "none" if the feature is new)».
- No link → use the product's `figma_file` and find the nearest existing screens with a bounded search (use `figma_pages_of_truth`; never crawl the whole file). Greenfield with no screens yet → skip.

## Step 4 — Summary and hand-off
Send (labels translated to `language.chat`) and wait for «ok» or corrections:
```
Task: <key> — <title>
Type: <work type> → <skill>
Product / platforms: <…>
Source screens: <Figma link(s) | none>
Connectors: <Figma · Jira/Confluence · Mobbin | chat only>
Mode: analyze | wireframe | build
UI: strictly DS | DS + improvements | new visual
References: <mine / Mobbin / ui-craft taste / UI/UX Pro Max / none>
Variants: N
Output: <chat for a wireframe | page «<output.page_name>» → section «<section name>»>
Open questions: <if any>
```

Then run, in this order:
1. **References** (only those selected): `Mobbin` → skill `pattern-research` (short mode: 5–8 examples + patterns); `My references` → analyse the provided links/images (what to take: layout, hierarchy, typography, colour, density, interaction); `ui-craft taste` → skill `ui-craft` (direction only); `UI/UX Pro Max` → skill `ui-ux-pro-max:ui-ux-pro-max` (separate plugin; if not installed, say so and continue without it) — take style, palette, font pairing and UX guidelines for the product type, then adapt to the project DS. Summarise the chosen direction in 3–5 lines before designing.
2. **Mode**:
   - `analyze` → invoke the work type's skill with `mode=analyze`.
   - `wireframe` → invoke skill `wireframe` with the task context, `variants`, and the work type's skill as `handoff`. When the designer asks to move it to Figma, invoke the `handoff` skill with `mode=build` and the approved wireframe as the structure.
   - `build` → invoke the work type's skill with `mode=build`.
3. Always pass: `ui=<system|extend|free>`, `refs=<summary from step 1>`, `variants=N`, product, platforms, Figma sources. Work types with `skill: none` → work from `CLAUDE.md` and ask the extra questions in `asks`.

## Output rules (all workflows)
- New screens only on the page `output.page_name` (default «Playground AI») of the selected product's Figma file; create the page if missing and tell the designer. One Section per task, named by `output.section_naming` (English).
- Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.
- If `output.protect_existing: true` — never edit, move or delete existing screens; duplicate into the task Section and edit the copy. Edit originals only on explicit request in this chat.
- `ui=system` → only the product's `design_system` libraries. `ui=extend` → library first; every new component/style is labelled `Proposal`. `ui=free` → new visual allowed. In all cases respect `themes`, UX principles and WCAG 2.2 AA.
- Never invent anything listed in `never_invent`, and never invent business rules in any mode — take them from the task or list as open questions.
- Report Figma links only after the tool confirms the write.
- Project context: when the designer confirms new project facts (flow, rule, component, link) or asks to update the context, update the relevant `context/*.md` in the folder and in the attached Claude Project (`project_write`); show the change in 1–3 lines first. No per-task logs.
