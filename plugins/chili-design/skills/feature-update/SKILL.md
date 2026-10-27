---
name: feature-update
description: Update existing mobile UI from a Jira issue using approved Figma designs and project components. Choose for small feature, screen, form, label, validation-display or component changes, not a wholly new flow.
argument-hint: "[Jira URL] [Figma source URL (optional — output goes to «AI-концепты»)] [mode=analyze|build]"
---

# Feature update

Input: $ARGUMENTS

1. Determine requested mode; default to `analyze` if missing. Parse Jira and Figma pointers. If Jira connector is unavailable, request/pick up pasted issue text; never imply Jira was read.
2. Read only relevant references from `context/source-map.md`, then only needed product and design-system sections. Inspect target approved frame(s) and necessary instances; do not enumerate all frames in the file.
3. Extract acceptance criteria. Split into CONFIRMED / SUGGESTED CHECKS / OPEN QUESTIONS. Identify directly affected variants and states without assuming new business rules.
4. For `analyze`: return scope, relevant frames, proposed minimal edits, missing requirements and execution plan. Do not write.
5. For `build`: create draft copies or new frames only on the «AI-концепты» page, in the task Section, never change existing originals unless the designer explicitly asks. Reuse design system components and tokens. If uncertain behavior materially affects design, stop that portion and flag it; continue safe specified parts.
6. Perform targeted spot checks: task coverage, states touched, component and spacing consistency, text overflow on changed elements. Do not start broad accessibility/localization/responsive audits without a reason or a request.
7. Return created links (only if confirmed), completed vs blocked items, and outstanding questions.

Efficiency: prefer edits over full regeneration; batch independent actions when tools support it; limit explorations and avoid looping until visually perfect. Stop after a bounded correction pass and report remaining items.
