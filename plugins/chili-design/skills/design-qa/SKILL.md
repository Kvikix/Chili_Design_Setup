---
name: design-qa
description: Review updated Figma screens against a Jira issue and approved design system; report defects and gaps without editing. Use before designer approval or development handoff.
argument-hint: "[Jira URL] [Figma frame or draft page URL]"
---

# Design QA

Writing: short, no filler — `../../references/writing.md` (applies to chat, plans, reports, annotations).

Input: $ARGUMENTS

UX quality: check against `../../references/ux-principles.md` (relative to this SKILL.md) — states, accessibility (contrast in every theme, touch targets, colour-only meaning, text scaling), forms, navigation, microcopy. Accessibility against WCAG 2.2 AA (`../../references/wcag-2.2.md`). Every finding ends with a short source in parentheses — (NN/g), (WCAG 2.5.8), (Fitts's law); use NN/g severity logic for blocker / should fix / optional (`../../references/nngroup.md`). If the change touches a flow covered by the taste library (`../../references/taste/index.md`), also check against that pattern file's «QA checklist». Always check overlays against `../../references/taste/platform/surfaces.md` §7 (layering limits: no sheet over sheet, no dialog over dialog, no blocking errors in toasts, no input lost on dismiss) and platform behaviour against the stack file in `taste/platform/`. Only for elements touched by the task unless a full audit is requested. Token hygiene: project DS first; Chili DS template (`../../references/chili-ds-template.md`, §9) for hardcoded values, wrong token layer, missing states, off-4px spacing.

1. Read task acceptance criteria and specified frames only. Compare with approved patterns and necessary components.
2. For the technical part (spacing scale, layer names, tokens/styles bound) run skill `design-validate` in report-only mode — QA never fixes.
3. Check scope, state coverage relevant to task, component reuse, typography/spacing consistency, copy overflow, obvious interaction gaps, and language (UI copy in `language.ui`; names, annotations, labels in English).
4. Classify findings: blocker / should fix / optional improvement. Distinguish observed issues from hypotheses.
5. Report verified checks, things not testable in Figma, and questions for PM/dev.
6. Do not edit design or expand to a full app audit unless explicitly requested.

Output a concise checklist with frame references and clear evidence. Never claim accessibility, localization or device testing was completed unless it was actually performed.
