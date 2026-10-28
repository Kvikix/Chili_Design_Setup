---
name: wireframe
description: Draw low-fidelity wireframes right in the chat (not in Figma) to agree on structure fast, iterate by text, then hand off to Figma. Use when the designer picks «Вайрфрейм в чате» in the new-task menu or asks to sketch/wireframe screens or a flow in the chat.
argument-hint: "[task or screen description] [variants=N] [handoff=feature-update|flow-builder|ui-variations]"
---

# Wireframe in chat

Input: $ARGUMENTS (task context, platforms, `variants`, `handoff` skill from new-task).

Goal: agree on structure and flow cheaply before any Figma work. **Never write to Figma in this skill.**

## How to render
- In the Claude app (Cowork / claude.ai): render inline in the chat with the available visual/widget tool; if none, create a single self-contained HTML page (inline SVG, no external assets) and show it.
- In Claude Code (terminal): write `wireframes/<KEY or slug>.html` in the project folder and tell the designer to open it in the browser.
- One canvas per iteration; multiple screens side by side, flows connected with arrows and labelled transitions.

## Style rules
- Low fidelity: greyscale, boxes and lines, no brand colours, no real images (box with ✕ or a short label), one system font.
- Real frame sizes: mobile 375×812, web 1440×900 (scaled down), per selected platforms.
- Real content in the UI language from the task (no lorem ipsum); placeholders only for unknown copy, marked `[copy?]`.
- Labels and annotations on the canvas in English; legend explanations in the chat language.
- Annotate with numbered callouts; below the canvas a short legend: ① what / why (short source in parentheses, e.g. (NN/g), (WCAG 2.5.8)).
- Show key states when relevant to the task: empty, error, loading — as small extra frames.
- `variants` > 1 → label `Variant A / B / C`, same scale, side by side; each with one line on the difference.

## UX basis
Apply `../../references/ux-principles.md` (structure, hierarchy, navigation, forms, states) and `../../references/nngroup.md`. In existing projects respect the structure of approved screens unless the task changes it. Don't invent business rules — mark unknowns as questions on the canvas.

## Iterate
Accept edits in plain words («кнопку вниз», «добавь пустое состояние») and redraw only what changed. Keep a short changelog per iteration.

## Hand-off to Figma
When the designer says «Нравится, перенеси в Figma» (or similar):
1. Write a compact structure spec per screen: blocks top-to-bottom, components to use, states, copy, notes.
2. Invoke the `handoff` skill (from new-task; if none, ask: доработка экрана / новый флоу / концепты) with `mode=build`, the same `ui`, `refs`, `variants` (only the approved variant unless told otherwise) and the structure spec as the source of layout.
