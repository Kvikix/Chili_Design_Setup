# Claude · Design Studio starter

One copy of this folder = one client project.

## New project
1. On GitHub: **Code → Download ZIP**, unzip, rename the folder to the project (e.g. `acme-app/`). Keep the project folder outside this repository — client data must never be pushed here.
2. Open it in Claude (Cowork: connect the folder; Claude Code: open the folder) with Figma and Jira connectors on.
3. Write **«настроить проект»** / **«setup project»** or type **`/project-setup`** → `/project-setup` interviews you, checks connectors and fills `CLAUDE.md` + `context/` (incl. `project-config.md`).
4. Review the files, answer the open questions.

## Every task
Write **«новая задача»** / **«new task»** (any language works — Claude matches the meaning) or type **`/new-task`** (always works) → shows a menu built from `context/project-config.md`, asks for the Jira task and Figma link, then runs the right workflow. New screens go to the «AI-концепты» page, one section per task; existing screens are never edited unless you ask.

## What's generic vs project-specific
- Generic (same for everyone): `.claude/skills/*` (hidden folder — Cmd+Shift+. in Finder), this README.
- Project-specific (filled per project): `CLAUDE.md`, `context/*.md`, `SETUP_CHECKLIST.md`.

To change the menu for one project (labels, enabled work types, output page name), edit `context/project-config.md` — not the skill.
