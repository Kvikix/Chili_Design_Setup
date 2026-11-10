# Chili design setup

Claude plugin **chili-design** for Chili Labs designers working on existing products and new projects: project setup, a new-task intake menu, and workflows for feature updates, flows, UI variations and design QA — with Jira and Figma.

## What's inside

| Skill | Say | What it does |
|---|---|---|
| `project-setup` | «setup project» | Existing product → finds it in Jira/Figma; new project → manual input. Asks for a Confluence link or a description. Creates `CLAUDE.md` + `context/` and saves `context/` to the Claude Project |
| `new-task` | «new task» | Menu: work type, product, platforms, mode → Jira → Figma → runs the right workflow |
| `feature-update` | via menu | Change an existing screen, component or part of a flow; 1 variant by default, more on request |
| `flow-builder` | via menu | New or substantially reworked flow |
| `ui-variations` | via menu | Concepts for a new feature; you choose how many (default 3, up to 5) |
| `design-qa` | via menu | Check finished screens against the task |
| `wireframe` | menu → «Wireframe in chat» | Low-fi wireframes in the chat; «move to Figma» hands off to the design skill |
| `pattern-research` | menu → Mobbin / «Research and directions» | Mobbin research: examples, patterns, directions |
| `design-validate` | auto at the end of build · «validate» | Spacing on the scale, named layers, tokens and text styles bound — report first, fixes after confirmation, only on Playground AI frames |
| `concise` | «make it shorter» | Rewrites any text short and without filler (Jira, Figma, Slack, client); all skills follow the same writing rules |
| `ui-craft` | menu → «New visual», «DS + improvements», «UI foundation» | Strong visual UI from chosen references; UI foundation for new products |
| `menu` | «/menu», «what can you do» | All commands, connected skills and other skills available to you — one line each |
| `project-skills` | «/project-skills», «connect a skill» | Connect skills from other plugins (UI/UX Pro Max, Mobbin, design…) to the project → `external_skills` |

Every design decision and QA finding ends with a short source: (NN/g), (WCAG 2.5.8), (Fitts's law).

Menu: task type → product → platforms → **how we work** (analysis / wireframe in chat / Figma) → **UI approach** (strict design system / + improvements / new visual) → **references** (mine / Mobbin / ui-craft taste / UI/UX Pro Max, several allowed) → number of variants. Project type (existing or from scratch) is set once in project setup and changes the menu defaults.

Rules for every workflow: new screens only on the **«Playground AI»** page (one section per task), existing screens are never edited unless you ask. Copy inside mockups is in the project UI language; page, section, frame names, annotations and labels in Figma are always English. The chat stays in Russian.

Project context (`context/*.md`) is saved in the project folder and in the attached Claude Project, so new chats have it. Ask to update the context when project facts change. No per-task logs.

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
  skills/<skill>/SKILL.md              13 skills
  skills/project-setup/templates/      CLAUDE.md, SETUP_CHECKLIST.md, context/*.md for new projects
  references/ux-principles.md          UX/UI best practices used by the design and QA skills
  references/wcag-2.2.md               WCAG 2.2 AA checklist for designers
  references/nngroup.md                Nielsen Norman Group key guidance (summary)
  references/taste/index.md            Taste library index: which file to read when
  references/taste/core.md             UI craft taste guide (visual craft, anti «AI-generic»)
  references/taste/patterns/*.md       UX flow patterns: forms, search-filter, onboarding, auth, permissions, subscription-iap, payment-checkout (iOS / Android / Flutter notes)
  references/taste/platform/*.md       surfaces (sheet/modal/dialog rules), navigation, ios-native, android-native, flutter
  references/taste/creative.md         creative exploration: levels, axes, techniques, guardrails
  references/taste/chili/craft.md      opt-in: measured radii, spacing, type, components from Chili projects
  references/taste/chili/ideas.md      opt-in: idea bank from Chili projects
  references/taste/chili/projects/*.md   project cards: balcia, totherescue, rover, ganbei, twino
  references/writing.md                Writing rules: short, no filler, length limits
  references/chili-ds-template.md      Chili mobile DS template: tokens, type scale, spacing, effects, grids, component naming
```

## Changelog
**0.17.1**
- Skill `skills` renamed to `project-skills`: `/skills` is a built-in Claude command (lists all skills), so the bare name collided. Commands are documented in short form (`/menu`, `/project-skills`) with the always-working full form `/chili-design:<skill>`.

**0.17.0**
- Chili projects are now an **opt-in reference** («Chili projects» in new-task), not a default style; `house-style.md` removed.
- New `chili/craft.md` (measured from Figma tokens/layers: spacing, radii, typography, colour roles, component specs + calibration ranges) and `chili/ideas.md` (idea bank: principle + remix). Project cards updated with real tokens.
- New `taste/creative.md`: creativity levels safe / bold / wild, axes to vary, techniques, scorecard, guardrails, anti-generic check. ui-craft step 1b, ui-variations builds variants by axes and levels, new-task asks «How creative?».

**0.16.0**
- Taste library `chili/`: project cards (Balcia, ToTheRescue, Rover, Ganbei, Twino — from approved Figma screens) and `house-style.md` (recurring Chili solutions: visual DNA, navigation, filters, forms, commerce, overlays, states, copy, known inconsistencies).
- `ui-craft` reads house style + the closest project cards; citations «(Chili: <project>)».

**0.15.0**
- Taste library `platform/`: `surfaces.md` (which surface to use; bottom sheet rules — one sheet at a time, next step continues inside it, otherwise full-screen modal/push; dialog, toast, menu rules; layering limits), `navigation.md`, `ios-native.md`, `android-native.md`, `flutter.md` (platform strategy, cheap vs expensive, adaptive widgets, handoff).
- `feature-update`, `flow-builder`, `ui-variations` follow `surfaces.md` for every overlay; `design-qa` checks layering limits and platform behaviour.

**0.14.0**
- `ui-taste.md` → taste library `references/taste/`: `index.md`, `core.md` (former ui-taste), 7 pattern files (forms, search-filter, onboarding, auth, permissions, subscription-iap, payment-checkout) with flow, states, iOS/Android/Flutter notes, anti-patterns and QA checklist.
- `ui-craft` reads the index and only the relevant files; `feature-update`, `flow-builder`, `ui-variations` use pattern files for covered flows; `design-qa` uses their QA checklists.
- Placeholders for `platform/` and `chili/` (house style from Chili projects).

**0.13.0**
- New `menu`: list of chili-design commands, skills connected to the project and other skills available in the session.
- New `skills`: connect skills from other plugins/libraries to the project; saved as `external_skills` (id, label, use_for, stage: references | build | review | manual).
- `project-setup`: Step 3b runs `skills`. `new-task`: checks connected skills are installed for the designer (missing → skipped with a note), builds the references question from them, passes build/review skills to the workflows.

**0.12.1**
- Version bump so installed copies pick up the English-only files (0.12.0 installs could keep the older Russian text).

**0.12.0**
- `new-task`: question «Which connectors does this task need?» (Figma · Jira / Confluence · Mobbin). Unselected connectors are not used in the task; the summary reminds to switch them off in the chat to save context.
- Config: `connectors.ask` / `connectors.default`; `project-setup` asks for the usual set.
- All plugin files are English only; designer-facing questions and messages are said in `language.chat` (default Russian). Triggers work in any language.

**0.8.0**
- Figma language: UI copy in the project language; page/section/frame names, annotations and labels (`Variant A`, `Proposal`) always English (`language.design`).
- Default output page renamed to «Playground AI».
- `project-setup`: first question «existing product or new project»; new project = manual input (name, platform, domain, Figma links, design system), no Jira/Figma searches.
- `project-setup`: asks for a Confluence link or a free description of the project.
- Context files are saved to the attached Claude Project; `new-task` reads them from there if the folder has none; asking to update the context updates them.
- Shorter `CLAUDE.md` template (project specifics only) with a «Role» block: Senior UX/UI Product Designer, UX first, domain filled in by `project-setup`.
