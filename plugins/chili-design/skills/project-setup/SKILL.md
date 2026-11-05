---
name: project-setup
description: Set up a client design project for the Chili design workflows — an existing product (finds it in Jira/Figma) or a new project (manual input). Use when the designer asks to set up a project (in any language, e.g. «setup project») or types /project-setup, or when new-task reports that the project is not configured. Writes CLAUDE.md and context/*.md to the project folder and saves the context to the attached Claude Project.
argument-hint: "[optional: project name]"
---

# Project setup

Designer-facing text in this file (questions, options, messages) is written in English — say it in `language.chat` (default Russian).

Writing: short, no filler — `../../references/writing.md` (applies to chat, plans, reports, annotations).

Output: a configured project folder that `new-task` and the workflow skills read, plus the same `context/*.md` saved to the attached Claude Project so the project description is always available in new chats. The project folder is the folder the designer connected or opened for this project (it may be empty). Ask questions in Russian. Never invent facts; leave `<fill>` and list open questions for anything unverified. Never ask for or store secrets, tokens, passwords or personal customer data.

## Step 1 — Project type (ask first)
One AskUserQuestion: «Is this an existing product or a new project?» (header `Project type`)
- `Existing product` → `project_type: existing` → **Path A** (find it in Jira/Figma).
- `New project` → `project_type: greenfield` → **Path B** (manual input, no searches).

## Path A — Existing product
A1. Discover what's reachable: Figma `whoami`; Atlassian `getAccessibleAtlassianResources` (site, cloudId, read/write). If a connector fails, say so and continue.
A2. Plain message: «What is the project or client called? If you know, send a link to the Figma file or Jira project». Search `listJiraProjects` with that name; take Figma links from the answer or from Jira issues. Show what was found as a short list; the designer confirms or corrects (free text). Never list teams/files/projects as AskUserQuestion options when there can be more than 4.
A3. One AskUserQuestion: platforms · default mode (`analyze` / `build` / ask per task) · where to write (this folder (Recommended) / a subfolder).
A4. Pull real data:
- Jira: read 2–3 recent issues (prefer designer task types) → task format, issue types, statuses, Figma links.
- Figma: file keys → `create_session`, `get_metadata` (page list), `get_libraries`.
- Design system: `search_design_system` restricted to the project libraries → token/component naming, themes. Several apps/files (e.g. another role) → separate `products`.

## Path B — New project (manual input)
Do **not** search Jira, Figma or Confluence to discover the project — use only what the designer writes or links. One plain message:
«Tell me about the project:
1. Name
2. Development platform (iOS / Android / Web / several)
3. Domain — product area (fintech, education, e-commerce…)
4. Figma links, if any (or «none»)
5. Is there a design system? (no / yes + link)»
- Figma links given → you may open only those files (`create_session`, `get_metadata`) to record pages. Nothing else.
- No design system → `design_system_ready: false`, `design_system: []`.
- No task tracker yet → `task_tracker.type: none`; tasks come as text.
- Everything not given stays `<fill>` / `[]` and goes to open questions.

## Step 2 — Project description (both paths)
Plain message: «Send a Confluence link (or other project docs) or describe the project in your own words: what the product is, who it is for, key scenarios, constraints. You can answer «later».»
- Confluence link → read it with the Atlassian connector (`getConfluenceContent`), summarise the essentials (product, audience, flows, rules). Connector unavailable → say so and ask for text.
- Free text → use as-is, mark *confirmed by designer*.
- «later» → leave `[fill]`, add to open questions.
Record links in `project.docs` (config) and `source-map.md`.

## Step 3 — Interview, round 2 (AskUserQuestion)
- Output page for AI-generated screens (default **«Playground AI»**) and whether to protect existing screens (default yes).
- UI languages (`language.ui`) — copy inside mockups is written in this language. Page, section, frame names, annotations and labels in Figma are always English.
- User roles (existing products; for new projects only if the designer knows).
- «What must never be invented?» — multiSelect: up to 3 domain-fitting categories (auth/permissions, payments, legal texts, calculation rules…) **plus always last: `Nothing permanent — depends on the task`** → `never_invent: []`; unconfirmed business rules are still open questions.
- Work types to enable. Defaults: existing → feature-update, flow-builder, ui-variations, design-qa; greenfield → research-directions, ui-variations, ui-foundation, flow-builder, design-qa. Optional: motion, store-assets.
- `default_ui_approach`: keep `auto` unless the designer wants a fixed one.
- «Which connectors do tasks usually need?» — multiSelect: Figma · Jira / Confluence · Mobbin → `connectors.default` (default: Figma + Jira / Confluence). Keep `connectors.ask: true` unless the designer wants the default used silently.

## Step 4 — Write files (project folder)
Copy the templates from `templates/` next to this SKILL.md into the project folder (`CLAUDE.md`, `SETUP_CHECKLIST.md`, `context/*.md`) — never overwrite existing files; update them in place. Then fill:
- `context/project-config.md` — YAML in place (keys unchanged).
- `context/project-context.md` — about the project (domain, description, docs), product, roles, JTBD (*derived* vs *confirmed*), flows with Figma references, constraints, open questions. Keep it compact: short bullets and tables, links instead of long text.
- `context/design-system.md` — libraries, token/component naming, key components, constraints (greenfield: what exists so far). Compare with the Chili DS template (`../../references/chili-ds-template.md`): fill «Mapping to Chili DS template» — what matches, what's missing; no DS → «baseline = Chili DS template».
- `context/source-map.md` — verified links (Jira, Figma, Confluence/docs), access level, task format, source precedence.
- `CLAUDE.md` — ≤80 lines: keep the «Role» block as is and replace `<domain>` with the project's domain (e.g. «education / LMS», «fintech»; unknown → «this product's domain»); then project specifics only — don't repeat what the skills already say.
- `SETUP_CHECKLIST.md` — tick only what was actually verified.

## Step 5 — Save the context to the Claude Project
If a Claude Project is attached (Projects tool available): `project_write` each of `context/project-config.md`, `context/project-context.md`, `context/design-system.md`, `context/source-map.md` at the same paths. Confirm only after the tool succeeds. No project attached → say the context is saved only in the folder and suggest attaching the chat to a Claude Project.
No per-task logs — only the project description is kept.

Then show a short summary: what was filled, where it is saved, open questions. Never claim connectors, Confluence or Figma were checked if they were not.

## Step 6 — Smoke test
Offer: «Run a new task on a real task in analyze mode?»
