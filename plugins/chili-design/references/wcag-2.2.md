# WCAG 2.2 — design checklist (level AA)

Standard: **WCAG 2.2** (W3C Recommendation since Oct 2023; also ISO/IEC 40500:2025). It is the current version — WCAG 3.0 is still a working draft and not a standard. Target: **Level AA** (includes A). Cite as «(WCAG 1.4.3)».
Only criteria a designer controls in Figma are listed. ★ = new in 2.2.

## Perceivable
- **1.1.1 Non-text content (A)** — icons-only buttons, images and charts need a text alternative; annotate it for dev.
- **1.3.1 Info and relationships (A)** — structure visible in the design (headings, lists, groups, table headers, form labels) must be real structure, not just styling.
- **1.3.3 Sensory characteristics (A)** — instructions don't rely only on shape, position or colour («нажмите зелёную кнопку справа»).
- **1.3.4 Orientation (AA)** — works in portrait and landscape unless essential.
- **1.3.5 Identify input purpose (AA)** — personal-data fields have a defined purpose (name, email, phone) for autofill.
- **1.4.1 Use of colour (A)** — colour is never the only way to convey status, marks, errors, selected state, links.
- **1.4.3 Contrast minimum (AA)** — text ≥ 4.5:1; large text (≥ 24 px regular / ≥ 18.66 px bold) ≥ 3:1. Check every theme.
- **1.4.4 Resize text (AA)** — text scales to 200 % without loss of content or function.
- **1.4.10 Reflow (AA)** — content works at 320 CSS px width without horizontal scrolling (except maps, tables, etc.).
- **1.4.11 Non-text contrast (AA)** — UI component boundaries, focus indicators, icons, chart parts ≥ 3:1 against adjacent colours.
- **1.4.12 Text spacing (AA)** — layout survives increased line/letter/word/paragraph spacing (no fixed-height text boxes).
- **1.4.13 Content on hover or focus (AA)** — tooltips/popovers are dismissible, hoverable, persistent.

## Operable
- **2.1.1 Keyboard (A)** — (web) every action available by keyboard; design focus order.
- **2.2.1 Timing adjustable (A)** — timeouts can be extended; warn before session expiry.
- **2.3.1 Three flashes (A)** — no flashing more than 3 times per second (animations, Lottie).
- **2.4.2 Page titled (A)** / **2.4.6 Headings and labels (AA)** — descriptive screen titles, headings and labels.
- **2.4.3 Focus order (A)** — logical order matching the visual order.
- **2.4.4 Link purpose (A)** — link/button text makes sense on its own («Подробнее о подписке», not just «Тут»).
- **2.4.7 Focus visible (AA)** — clear focus indicator on every interactive element (web, external keyboards).
- ★ **2.4.11 Focus not obscured (AA)** — focused element is not hidden by sticky headers, bottom bars, banners, cookie bars.
- **2.5.1 Pointer gestures (A)** — multipoint/path gestures (pinch, swipe) have a single-tap alternative.
- **2.5.2 Pointer cancellation (A)** — actions fire on release; user can cancel by moving away.
- **2.5.3 Label in name (A)** — accessible name contains the visible label text.
- ★ **2.5.7 Dragging movements (AA)** — anything done by dragging (reorder, sliders, swipe-to-delete) also works with single taps (e.g. «вверх/вниз» buttons, menu action).
- ★ **2.5.8 Target size minimum (AA)** — targets ≥ 24×24 CSS px or enough spacing. Platform guidance is stricter: use **44×44 pt iOS / 48×48 dp Android** as the project default.

## Understandable
- **3.1.1 / 3.1.2 Language (A/AA)** — screen language and switches of language are defined (e.g. LV UI with EN terms).
- **3.2.1 / 3.2.2 On focus / On input (A)** — focusing or changing a field doesn't unexpectedly navigate or submit.
- **3.2.3 Consistent navigation (AA)** / **3.2.4 Consistent identification (AA)** — same navigation and same names for the same functions across screens.
- ★ **3.2.6 Consistent help (A)** — help/contact/chat entry point is in the same place on every screen that has it.
- **3.3.1 Error identification (A)** — errors are described in text, at the field.
- **3.3.2 Labels or instructions (A)** — visible labels and format hints for inputs.
- **3.3.3 Error suggestion (AA)** — the error message says how to fix it.
- **3.3.4 Error prevention (AA)** — legal/financial/data-changing submissions are reversible, checked, or confirmed.
- ★ **3.3.7 Redundant entry (A)** — don't ask for the same information twice in a flow; prefill or allow selecting it.
- ★ **3.3.8 Accessible authentication (AA)** — login doesn't require a cognitive test (memorising, transcribing codes, puzzles) unless an alternative exists: allow paste and password managers, offer biometrics / magic link / passkeys.

## Robust
- **4.1.2 Name, role, value (A)** — custom components declare role and state (selected, expanded, disabled); annotate for dev.
- **4.1.3 Status messages (AA)** — toasts, «сохранено», counters are announced to screen readers without moving focus.

## Not required at AA but worth applying when cheap (AAA)
2.4.12 Focus not obscured (enhanced), ★ 2.4.13 Focus appearance, 2.5.5 Target size enhanced (44×44), 3.3.9 Accessible authentication (enhanced).
