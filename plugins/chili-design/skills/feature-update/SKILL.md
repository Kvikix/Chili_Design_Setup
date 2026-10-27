---
name: feature-update
description: Update existing mobile UI from a Jira issue using approved Figma designs and project components. Choose for small feature, screen, form, label, validation-display or component changes, not a wholly new flow.
argument-hint: "[Jira URL] [Figma source URL (optional — output goes to «AI-концепты»)] [mode=analyze|build] [variants=1..5]"
---

# Feature update

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (закон …) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

1. Determine requested mode; default to `analyze` if missing. Determine `variants` (default 1, max 5). Parse Jira and Figma pointers. If Jira connector is unavailable, request/pick up pasted issue text; never imply Jira was read.
2. Read only relevant references from `context/source-map.md`, then only needed product and design-system sections. Inspect target approved frame(s) and necessary instances; do not enumerate all frames in the file.
3. Extract acceptance criteria. Split into CONFIRMED / SUGGESTED CHECKS / OPEN QUESTIONS. Identify directly affected variants and states without assuming new business rules.
4. For `analyze`: return scope, relevant frames, proposed minimal edits, missing requirements and execution plan. If `variants` > 1, describe each variant in one or two lines — how it solves the task differently, its trade-off and source — all variants must satisfy the same confirmed requirements. Do not write.
5. For `build`: create draft copies or new frames only on the «AI-концепты» page, in the task Section (with `variants` > 1: one row per variant, labelled «Вариант A», «Вариант B»… with a one-line rationale and source), never change existing originals unless the designer explicitly asks. Reuse design system components and tokens. If uncertain behavior materially affects design, stop that portion and flag it; continue safe specified parts.
6. Perform targeted spot checks: task coverage, states touched, component and spacing consistency, text overflow on changed elements. Do not start broad accessibility/localization/responsive audits without a reason or a request.
7. Return created links (only if confirmed), completed vs blocked items, and outstanding questions.

Efficiency: prefer edits over full regeneration; batch independent actions when tools support it; limit explorations and avoid looping until visually perfect. Stop after a bounded correction pass and report remaining items.
