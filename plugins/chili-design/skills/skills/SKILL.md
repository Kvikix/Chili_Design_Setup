---
name: skills
description: Connect skills from other plugins and libraries (UI/UX Pro Max, Mobbin, design, mobile-app-design…) to the current project so new-task and the workflows can offer them. Use when the designer types /skills, asks which skills can be connected, wants to add or remove a skill from the project (in any language, e.g. «подключить скил»), or when project-setup reaches the skills step.
argument-hint: "[optional: add <name> | remove <name> | all]"
---

# Skills — connect external skills to the project

Designer-facing text in this file (questions, options, messages) is written in English — say it in `language.chat` (default Russian).

Writing: short, no filler — `../../references/writing.md`.

The designer's Claude has skills from other plugins and libraries, and every designer has a different set. This skill shows what is available **in this session**, lets the designer choose what this project uses, and records the choice in `context/project-config.md` → `external_skills`. It never installs or enables skills — that is done in Claude settings.

## Step 0 — Load the project
- Find the project config as in `new-task` Step 0 (folder, or the attached Claude Project). Read `external_skills` (missing → `[]`).
- No config → view mode: show the list (Steps 1–2), say the choice can be saved after `project-setup`, stop.

## Step 1 — Collect available skills
Source of truth = what this session can invoke right now:
1. If the `ListSkills` tool exists (load via ToolSearch), call it.
2. Otherwise use the list of available skills already in your context.

Never add a skill that is not in that list; never name skills from memory.

Leave out:
- chili-design's own skills — always on, shown by `menu`.
- Skills about Claude itself, file formats or unrelated domains (artifacts, plugin/skill authoring, setup, usage, docx/pptx/xlsx/pdf, browser automation, Chrome extensions…). Count them as one line «Other: N (not design)»; show them only with `all`.

## Step 2 — Group and describe
Groups (skip empty ones):
- **UI & visual** — styling, design systems, brand, icons, banners
- **Research & references** — real-app patterns, user research
- **Review & QA** — critique, accessibility, platform reviews
- **Copy & handoff** — UX copy, specs for developers
- **Platform** — iOS / Android / web guidance

Each skill: one line — `name` — «use it for…» (≤ 12 words, concrete design terms, from its description) — status:
- `✓` connected to the project
- no mark — available, not connected
- `⚠` in `external_skills` but not installed for this designer

A plugin with many skills (e.g. `ui-ux-pro-max:*`) → main skill on one line, the rest as a short sub-line, so the list stays readable.

## Step 3 — Choose
- `$ARGUMENTS` = `add <name>` / `remove <name>` → skip the menu.
- ≤ 4 candidates → one AskUserQuestion, multiSelect (header `Skills`).
- More → send the numbered list as text and ask: «Send numbers to connect (e.g. 1, 4, 7), "-N" to disconnect, or "ok" to keep as is».

For each newly connected skill ask once «When should I use it?» (one AskUserQuestion, up to 4 skills per call, header = short skill name):
- `As a reference source` → `stage: references` — appears in new-task «Where do references come from?»
- `While building screens` → `stage: build` — the workflow consults it while drawing
- `In review / QA` → `stage: review` — offered after build and in design-qa
- `Only when I ask` → `stage: manual`

`(Recommended)` by group: UI & visual, Research → references; Review & QA → review; Platform → build; Copy & handoff → manual.

## Step 4 — Save
- Show the change in 1–5 lines, then update `external_skills` in `context/project-config.md` in place:
  ```yaml
  external_skills:
    - id: ui-ux-pro-max:ui-ux-pro-max   # exact name from the skill list
      label: UI/UX Pro Max
      use_for: Palettes, styles and font pairings by product type
      stage: references
  ```
- Claude Project attached → `project_write` the same file at the same path. Confirm only after the tool succeeds.
- The config is shared by the team; teammates without a skill are not blocked — `new-task` skips it for them.

## Step 5 — Close
2–3 lines: what is connected, where it is saved, «/menu — all commands · /new-task — start a task».

## Rules
- External skills are inputs, not authorities: they never override the project design system, `never_invent`, output or language rules. Adapt their output to the project DS.
- Never claim a skill is installed for other designers.
