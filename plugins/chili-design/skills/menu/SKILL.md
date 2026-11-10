---
name: menu
description: Show everything the designer can use in this project — chili-design commands, skills connected to the project and other skills available in this session — each with a one-line «use it for». Use when the designer types /menu or asks what commands or skills are available, or what Claude can do here (in any language, e.g. «что ты умеешь», «какие есть команды»).
argument-hint: "[optional: chili | ui | research | review | copy | platform | all]"
---

# Menu — what you can use here

Designer-facing text in this file is written in English — say it in `language.chat` (default Russian).

Read-only: never edits files or config, never calls Figma, Jira or Mobbin. One message, no questions.

## Step 0 — Load
- Project config as in `new-task` Step 0 → project name, `external_skills`. No config → first line: «Project is not set up — start with /project-setup».
- Plugin version from `../../.claude-plugin/plugin.json`.

## Step 1 — Collect available skills
Same as `project-skills` Step 1: `ListSkills` if available, otherwise the skill list in your context. Never list a skill that is not there.
- chili-design: use the table below. A chili-design skill in the session but missing from the table → add it with a line from its description. In the table but not in the session → skip it.
- `external_skills` entry not in the session → show with `⚠ not installed for you`.

## Step 2 — Output
`$ARGUMENTS` = group → show only that group. Default: everything except «Other». Max 1 line per skill, ≤ 40 lines total. Show commands the way the designer types them in this app.

```
<Project> · chili-design <version>

Start
  /new-task — start any task: short menu → the right workflow
  /project-setup — set up or update the project context
  /project-skills — connect skills from other libraries to this project
  /menu — this list

Chili workflows (usually started by /new-task)
  /feature-update — change a screen, form or component from a task
  /flow-builder — new or reworked multi-screen flow
  /ui-variations — several concepts for the client
  /wireframe — quick low-fi sketch in chat
  /pattern-research — how real apps solve it (Mobbin)
  /ui-craft — stronger visual: hierarchy, type, colour, states
  /design-qa — check screens against the task
  /design-validate — spacing, tokens, layer names
  /concise — shorten any text

Connected to this project
  ✓ <name> — <use_for> · <stage>
  ⚠ <name> — connected, not installed for you

Also available to you (grouped as in /project-skills)
  UI & visual: <name> — <use it for…>
  Research & references: …
  Review & QA: …
  Copy & handoff: …
  Platform: …
  Other: N skills not about design — /menu all

/project-skills — connect a skill to the project
Command not found by the short name? Type /chili-design:<name>, e.g. /chili-design:new-task
```

Rules: «use it for…» in plain designer terms (≤ 12 words), from the skill's description — never invent capabilities. Plugins with many skills → main skill + short sub-line. Nothing connected → omit that block.
