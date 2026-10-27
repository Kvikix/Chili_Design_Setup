---
argument-hint: "[optional: project name]"
description: Set up a client design project for the Chili design workflows. Use when the designer writes «настроить проект», «setup project» or /project-setup, or when new-task reports that the project is not configured. Interviews the designer, verifies Jira/Figma connectors, and writes CLAUDE.md, context/*.md and context/project-config.md.
name: project-setup
---

# Project setup

Output: a configured project folder that `new-task` and the workflow skills read. The project folder is the folder the designer connected or opened for this project (it may be empty). Never invent facts; leave `<fill>` and list open questions for anything unverified. Never ask for or store secrets, tokens, passwords or personal customer data.

## Step 1 — Discover what's reachable (before asking)
1. Figma: `whoami` → list the designer's teams/plans and seat types.
2. Jira/Atlassian: `getAccessibleAtlassianResources` → site URL, cloudId, access level (read-only vs write).
3. Record which connectors work. If one fails, say so and continue with what's available.

## Step 2 — Interview, round 1
AskUserQuestion shows at most 4 options per question, so never list teams, files or projects as options when there can be more than 4.
1. Ask in a plain message (free text): «Как называется проект или клиент? Если знаете — пришлите ссылку на Figma-файл или Jira-проект».
2. Search for it: `listJiraProjects` with that name; Figma links from the answer or from Jira issues. Show what was found as a short list and ask the designer to confirm or correct (free text).
3. Then one AskUserQuestion call:
- Platforms (iOS + Android / + Web / single platform).
- Default mode: `analyze` / `build` / ask per task.
- Where to write: this folder (recommended) or a copy in a subfolder.

## Step 3 — Pull real data
1. Jira: `listJiraProjects` with the product name → project keys. Read 2–3 recent issues (prefer designer task types) to learn the task format, issue types, statuses, reporters and Figma links.
2. Figma: from those links get file keys → `create_session`, `get_metadata` (page list), `get_libraries` (subscribed libraries).
3. Design system: `search_design_system` restricted to the project libraries (variables, a few key components) → token naming, component naming, themes. If several products/files appear (e.g. separate app for another role), treat them as separate `products`.

## Step 4 — Interview, round 2 (AskUserQuestion)
- Output page name for AI-generated screens (default «AI-концепты») and whether to protect existing screens (default yes).
- User roles.
- UI languages and where final copy comes from.
- «Что никогда нельзя придумывать?» — multiSelect. Options: up to 3 categories that fit this product's domain (derived from Step 3, e.g. auth/permissions, payments, legal texts, calculation rules) **plus always, as the last option: `Нет постоянных — зависит от задачи`**. If only that is chosen, write `never_invent: []`; the general rule still applies — business rules not confirmed by the task are marked as open questions.
- Which work types to enable (default: feature-update, flow-builder, ui-variations, design-qa; optional: motion, store-assets).

## Step 5 — Write files (in the project folder)
First copy the templates from the `templates/` folder next to this SKILL.md into the project folder (`CLAUDE.md`, `SETUP_CHECKLIST.md`, `context/*.md`) — never overwrite files that already exist there; if they exist, update them in place. Then fill:
- `context/project-config.md` — fill the YAML in place (keys unchanged).
- `context/project-context.md` — product, roles, JTBD (mark *derived* vs *confirmed*), flow table with Figma pages and task references, constraints, open questions.
- `context/design-system.md` — libraries, token and component naming, key components, constraints, open questions.
- `context/source-map.md` — verified links, access level per source, task format, source precedence.
- `CLAUDE.md` — ≤100 lines: stable rules, project specifics, skill routing (`/new-task` first). Keep skills out of it.
- `SETUP_CHECKLIST.md` — tick only what was actually verified.
Show a short summary of what was filled and the open questions. Never claim connectors or Figma were checked if they were not.

## Step 6 — Smoke test
Offer: «Запустить «новая задача» на реальной задаче в режиме analyze?»
