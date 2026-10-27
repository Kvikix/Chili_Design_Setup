# UX/UI principles for Chili design workflows

Apply when designing (feature-update, flow-builder, ui-variations) and when reviewing (design-qa).
**Priority:** task requirements → project design system and approved patterns → these principles. If a principle conflicts with the project's approved pattern, keep the pattern and mention the trade-off; don't silently diverge.

## How to argue decisions (required)
- Every notable design decision, variant trade-off and QA finding ends with a short source in parentheses — nothing more: **(NN/g)**, **(WCAG 1.4.3)**, **(закон Фиттса)**, **(HIG)**, **(Material)**.
- Examples: «Кнопка "Сохранить" внизу на всю ширину (закон Фиттса)» · «Нет empty state у списка (NN/g)» · «Контраст подписи 2.8:1 в тёмной теме (WCAG 1.4.3)».
- No article titles, no explanations of the source, max two sources per line.
- Never invent a source; cite only what is covered in these files.

## 1. Clarity and hierarchy
- One primary action per screen; secondary actions visually weaker. Destructive actions never styled as primary.
- Most important information first (top, larger, higher contrast); scannable headings, short labels.
- Group related content (proximity, cards, sections); consistent spacing from the design system's scale.
- Progressive disclosure: show the essential, hide advanced options behind expand/«Подробнее».

## 2. States — design every state the change touches
Default · loading (skeleton for content, spinner only for short actions) · empty (explains why + next action) · error (what happened + how to fix + retry) · success/confirmation · disabled (and why) · offline/no permission · partial data / very long data · first-time vs returning user · subscriber vs non-subscriber if relevant.

## 3. Feedback and control (NN/g heuristics — details in `nngroup.md`)
- Visible system status: immediate response to every tap (pressed state, progress).
- Prevent errors before reporting them: constraints, sensible defaults, inline validation on blur, not on every keystroke.
- Undo or confirmation for destructive / irreversible actions; confirmation dialogs name the action («Удалить тест?» → «Удалить»), not «OK».
- Recognition over recall: show options, recent items, current filters/period.
- Consistency: same element = same behaviour across the app and between mob and web.

## 4. Forms and input
- Visible labels (placeholder is not a label); helper text for format rules.
- Right keyboard type (numeric, email, date picker); autofill where possible.
- Error message next to the field, in plain language, says how to fix it.
- Primary button reachable (bottom on mobile), keeps working state clear while submitting.

## 5. Navigation and flows
- User always knows where they are and how to go back; back never loses entered data without warning.
- Minimise steps; each step has one purpose; show progress in multi-step flows.
- Entry and exit points defined; deep links / notifications land on a meaningful screen.

## 6. Mobile ergonomics and platforms
- Touch targets ≥ 44×44 pt (iOS) / 48×48 dp (Android), ≥ 8 pt between targets.
- Key actions in the thumb zone; avoid critical actions in top corners on large phones.
- Respect safe areas, system bars, keyboard overlap.
- Platform conventions where the app follows them (iOS HIG / Material): back navigation, sheets, pickers, switches.
- Web: hover and focus states, keyboard navigation, sensible max content width.

## 7. Accessibility (WCAG 2.2 AA — full checklist in `wcag-2.2.md`)
- Contrast: text ≥ 4.5:1, large text (≥ 18 pt / 14 pt bold) and UI icons/borders ≥ 3:1 — in **every theme** (light and dark).
- Never rely on colour alone (add icon, text or pattern for status: error, success, marks).
- Text scales (Dynamic Type / font scaling ~200%) without clipping; layouts use Auto Layout, not fixed heights for text.
- Meaningful order and labels for screen readers; icons-only buttons need an accessible name.
- WCAG 2.2 additions to check every time: focus not hidden by sticky bars (2.4.11), drag actions have a tap alternative (2.5.7), target size (2.5.8), help in a consistent place (3.2.6), no re-entering the same data (3.3.7), login without memory tests — allow paste, biometrics (3.3.8).

## 8. Content and microcopy
- Plain, specific, action-oriented: buttons say what happens («Сохранить изменения», not «OK»).
- Same term for the same thing everywhere; follow the project's terminology and UI language.
- Leave ~30–40 % extra space for translations and long names; truncate with ellipsis + full text available.
- Numbers, dates, currency in the project's locale format.

## 9. Responsive and localisation readiness
- Check smallest and largest supported widths (e.g. 320 / 375 / 430 pt mobile; 1280 / 1440 px web) when layout changes.
- Long strings, long names, 0 / 1 / many items, maximum counts.

## 10. When proposing alternatives (ui-variations)
- Variants differ in approach (structure, interaction, information density), not just styling.
- For each: user benefit, trade-off, risk, effort (new components? dev complexity?).
- Reference patterns from real apps (Mobbin) only when asked or clearly useful; cite the source; never treat them as business truth.

## 11. Laws of UX (cite as «закон Фиттса», «закон Хика» …)
- **Fitts** — time to hit a target depends on its size and distance: big, close targets for frequent/primary actions.
- **Hick** — more choices = slower decisions: reduce and group options, highlight the recommended one.
- **Jakob** — users expect your app to work like the apps they already use: prefer familiar patterns.
- **Miller / chunking** — working memory is limited: chunk information (cards, groups, ~5–9 items), don't rely on recall.
- **Tesler (conservation of complexity)** — complexity can't vanish; move it from the user to the system (defaults, prefill).
- **Doherty threshold** — feedback within ~400 ms keeps users engaged: optimistic UI, skeletons.
- **Peak-end** — people judge an experience by its peak and its end: design success states and endings carefully.
- **Goal-gradient** — motivation grows near the goal: show progress in multi-step flows.
- **Von Restorff (isolation)** — the item that differs is remembered: use emphasis for one thing only.
- **Serial position** — first and last items are remembered best: put key items at the ends of lists/nav.
- **Aesthetic-usability** — polished UI is perceived as easier to use, but can hide usability problems in tests.
- **Postel** — be liberal in what you accept (input formats), strict in what you send.
- **Gestalt: proximity, similarity, common region** — grouping by spacing, look and containers communicates relationships.

## Output habit
One line per decision or finding, ending with the short source in parentheses. Don't lecture.
