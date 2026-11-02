---
name: design-validate
description: Technical check of Figma frames — spacing on the scale (2, 4, 8, 12, 16, 20, 24, 32, 40…), named layers, colours/text/spacing bound to tokens and styles. Reports first; fixes only after the designer confirms. Runs automatically at the end of build; also «проверь фрейм», «validate».
argument-hint: "[Figma frame URL(s) or node ids]"
---

# Design validate

Input: $ARGUMENTS — frames to check. When called from a workflow skill at the end of `build`: the frames created in this task.
Run **only on the final result** (not on drafts or intermediate steps). Chat in Russian; layer names in English.

## 1. Run the check (read-only)
- Load the figma-use guidance before `use_figma`. Parse node ids from URLs (`node-id=1-2` → `1:2`).
- Execute `scripts/validate.js` (next to this SKILL.md) via `use_figma`, with `ROOT_IDS` replaced. If `context/project-config.md` has `validation:` — use its `spacing_scale` / `require_spacing_tokens` instead of the defaults.
- Checks: (1) auto-layout gap/padding on the scale; (2) no default layer names (`Frame 12`, `Rectangle 3`, `Group`…); (3) solid fills/strokes bound to colour variables or styles, every text layer has a text style, spacing and radius bound to `Spacing/*` / `Radius/*`, effects use effect styles. Instance insides are skipped (they come from the library); images and gradients are skipped.
- Nothing else — no UX, accessibility or content judgement here (that is `design-qa`).

## 2. Report
Short, per frame, grouped by check; show totals from `counts` (the list is capped). Each line: layer path · node id · what's wrong → proposed fix. Example:
```
Login (12:340) — 5 замечаний
Отступы:   Header / Actions — itemSpacing 18 → 16
Слои:      Form / Frame 27 → «Field group»
Токены:    Card — fill #F3F4F6 → Background/Base/Secondary
           Title — нет текстового стиля → Title 2/Bold
```
Proposed fixes:
- **spacing** — nearest scale value (tie → ask); bind the matching `Spacing/*` token if the project DS has one.
- **names** — propose a meaningful English name from the content/role (`Title`, `Primary button`, `Field group`, `Icon / Close`).
- **colours** — only a variable/style from the project DS with **exactly the same value** (prefer semantic over primitive); several or none → mark «нужно решение».
- **text** — only a text style with the same family, size, weight and line height; otherwise «нужно решение».
- **radius/effects** — same rule: exact match or «нужно решение».
Mark each item `авто` (exact fix known) or `вопрос`. No issues → say so in one line.

## 3. Ask before fixing
One AskUserQuestion «Исправить?» (header `Исправления`): `Исправить все «авто» (Recommended)` · `Выбрать пункты` · `Нет, только отчёт`. «Выбрать пункты» → the designer lists numbers/categories in free text. Without confirmation nothing is changed.

## 4. Fix (only after confirmation)
- Fix **only frames created in this task on the output page** (`output.page_name`). Frames elsewhere (other designers' screens, approved originals) → report only, never fix — even if asked, suggest copying the frame to the output page first.
- Allowed changes: rename layers; set gap/padding to the confirmed value and bind the token; bind colour/text/effect/radius to the confirmed exact-match token/style. Never detach instances, edit main components, change layout structure, sizes or other visual values.
- Then re-run `validate.js` on the same frames and report: fixed (before → after), left open, «нужно решение» items.
