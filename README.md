# Chili design setup

Claude plugin **chili-design** for Chili Labs designers working on existing apps: project setup, a new-task intake menu, and workflows for feature updates, flows, UI variations and design QA — with Jira and Figma.

## What's inside

| Skill | Say | What it does |
|---|---|---|
| `project-setup` | «setup project» | Interviews you, checks Jira/Figma, creates `CLAUDE.md` + `context/` in the project folder |
| `new-task` | «new task» | Menu: work type, product, platforms, mode → Jira → Figma → runs the right workflow |
| `feature-update` | via menu | Change an existing screen, component or part of a flow; 1 variant by default, more on request |
| `flow-builder` | via menu | New or substantially reworked flow |
| `ui-variations` | via menu | Concepts for a new feature; you choose how many (default 3, up to 5) |
| `design-qa` | via menu | Check finished screens against the task |
| `wireframe` | menu → «Wireframe in chat» | Low-fi wireframes in the chat; «move to Figma» hands off to the design skill |
| `pattern-research` | menu → Mobbin / «Research and directions» | Mobbin research: examples, patterns, directions |
| `design-validate` | auto at the end of build · «validate» | Technical check: spacing scale, layer names, tokens/text styles — report, then fix after confirmation |
| `concise` | «make it shorter» | Rewrites any text short and without filler (Jira, Figma, Slack, client); all skills follow the same writing rules |
| `ui-craft` | menu → «New visual», «DS + improvements», «UI foundation» | Strong visual UI from chosen references; UI foundation for new products |

Every design decision and QA finding ends with a short source: (NN/g), (WCAG 2.5.8), (Fitts's law).

Menu: task type → product → platforms → **how we work** (analysis / wireframe in chat / Figma) → **UI approach** (strict design system / + improvements / new visual) → **references** (mine / Mobbin / ui-craft taste / UI/UX Pro Max, several allowed) → number of variants. Project type (existing or from scratch) is set once in project setup and changes the menu defaults.

Rules for every workflow: new screens only on the **«Playground AI»** page (one section per task), existing screens are never edited unless you ask. UI copy in the project language; names, annotations and labels in Figma in English.

## Install (once per designer)

You need access to this private repository (ask Viktorija) and to be signed in to GitHub on your computer (GitHub Desktop is enough).

**Claude Code**
```
/plugin marketplace add Kvikix/Chili_Design_Setup
/plugin install chili-design@chili-design-setup
```
Then `/plugin` → **Marketplaces** → `chili-design-setup` → **Enable auto-update**.

**Claude desktop app (Cowork)** — install the `.plugin` file shared by Viktorija, or from the Chili Labs plugin catalog once it's published there.

Also connect the **Figma** and **Atlassian (Jira)** connectors.

## Start a new project
1. Create an empty folder for the project (e.g. `Desktop/acme-app`) and open/connect it in Claude.
2. Ask to **set up the project** («setup project»). Answer the questions, review the generated files.
3. For every task ask for a **new task** («new task»).

Project files (`CLAUDE.md`, `context/`) live only in the project folder — never put client data in this repository.

## For the maintainer: updating skills
1. Edit files in `plugins/chili-design/skills/…`.
2. Bump `version` in `plugins/chili-design/.claude-plugin/plugin.json` (e.g. 0.2.0 → 0.2.1) — Claude only detects an update when the version changes.
3. GitHub Desktop → Summary → **Commit to main** → **Push origin**.

## Structure
```
.claude-plugin/marketplace.json        catalog (one plugin)
plugins/chili-design/
  .claude-plugin/plugin.json           name + version
  skills/<skill>/SKILL.md              6 skills
  skills/project-setup/templates/      CLAUDE.md, SETUP_CHECKLIST.md, context/*.md for new projects
  references/ux-principles.md          UX/UI best practices used by the design and QA skills
  references/wcag-2.2.md               WCAG 2.2 AA checklist for designers
  references/nngroup.md                Nielsen Norman Group key guidance (summary)
  references/ui-taste.md               UI craft taste guide (built-in reference base)
```
