---
name: design-qa
description: Review updated Figma screens against a Jira issue and approved design system; report defects and gaps without editing. Use before designer approval or development handoff.
argument-hint: "[Jira URL] [Figma frame or draft page URL]"
---

# Design QA

Input: $ARGUMENTS

UX quality: check against `../../references/ux-principles.md` (relative to this SKILL.md) — states, accessibility (contrast in every theme, touch targets, colour-only meaning, text scaling), forms, navigation, microcopy. Accessibility against WCAG 2.2 AA (`../../references/wcag-2.2.md`). Every finding ends with a short source in parentheses — (NN/g), (WCAG 2.5.8), (закон Фиттса); use NN/g severity logic for blocker / should fix / optional (`../../references/nngroup.md`). Only for elements touched by the task unless a full audit is requested.

1. Read task acceptance criteria and specified frames only. Compare with approved patterns and necessary components.
2. Check scope, state coverage relevant to task, component reuse, typography/spacing consistency, copy overflow and obvious interaction gaps.
3. Classify findings: blocker / should fix / optional improvement. Distinguish observed issues from hypotheses.
4. Report verified checks, things not testable in Figma, and questions for PM/dev.
5. Do not edit design or expand to a full app audit unless explicitly requested.

Output a concise checklist with frame references and clear evidence. Never claim accessibility, localization or device testing was completed unless it was actually performed.
