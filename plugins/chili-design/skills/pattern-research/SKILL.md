---
name: pattern-research
description: Research how real apps solve a UI problem using Mobbin (screens, flows, sections) and summarise patterns that fit the project. Use when the designer picks Mobbin as a reference source, chooses «Исследование и направления», or asks for pattern/competitor research.
argument-hint: "[problem or screen to research] [platform] [mode=short|directions]"
---

# Pattern research (Mobbin)

Input: $ARGUMENTS (task context, platforms, project type).

## Rules
- Requires the Mobbin connector. If it's not connected, say so plainly and offer: the designer sends references, or continue with UX principles only. Never pretend Mobbin was searched.
- If a Mobbin search-guidance skill is available (e.g. `mobbin:search`), follow it before searching.
- Mobbin is inspiration, **never business truth** — rules, limits and copy come from the task.
- Keep it bounded: 1–3 searches (screens / flows / sections — whichever matches the problem), platform filter set; don't page endlessly.

## Modes
- `short` (default, called from new-task as a reference source): 5–8 relevant examples → output:
  - Examples: app — what it does well (link to the Mobbin screen when available)
  - Recurring patterns (3–5 bullets) and anti-patterns seen
  - Fit for this project: what to take, what not, why — with short source (NN/g), (WCAG …) where relevant
- `directions` (work type «Исследование и направления», mainly greenfield): same research, plus 2–3 distinct product/visual directions — for each: idea, who it suits, example apps, risks, what it means for UI (density, tone, navigation model). End with a recommendation and open questions for the client.

## Output
Concise; one line per point; short source in parentheses. Offer to save the selected examples to a Mobbin collection only if the designer asks.
