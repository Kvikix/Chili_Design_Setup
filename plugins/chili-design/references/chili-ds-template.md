# Chili DS template (mobile) — baseline

Source: Figma «Design System Mobile App (Tokens)» — https://www.figma.com/design/u2FkardRqBSEQqGpbDqMcL/Design-System-Mobile-App--Tokens-?node-id=4024-2249
Use as **Chili's default structure**, not as the client's DS.

**Priority:** the project's own design system (`context/design-system.md`, project libraries) > this template > `taste/core.md`. Never replace or rename a client's tokens/styles with these. Use the template to: (1) build a new DS / UI foundation (greenfield), (2) name new tokens/styles consistently, (3) spot gaps in a client DS — always as `Proposal`.
Read only the section you need. Exact values and Light/Dark aliases → open the Figma file (`search_design_system` / variables) rather than guessing.

## 1. Token architecture (3 layers, Figma variables)
| Collection | Modes | Role | Example |
|---|---|---|---|
| `_Primitives` | one | raw values, never bound to UI directly | `Primary/50`, `Neutral/20`, `Spacing/4` |
| `Semantic` | Light / Dark | colour roles, alias primitives, scoped | `Background/Base/Primary`, `Text_Icon/Status/Danger_Primary` |
| `Semantic Spaces` | one | spacing + radius for layout, alias primitives | `Spacing/4`, `Radius/3`, `Radius/Rounded` |
Rules: bind UI to Semantic only; primitives start with `_` (hidden from publishing); scopes — colour roles by fill/text/stroke, `Spacing` → GAP + WIDTH_HEIGHT, `Radius` → CORNER_RADIUS.

## 2. Primitive colours (ramps 10–90, 50 = base)
- `Primary` 50 #773AFF (violet) · `Secondary` 50 #FF2483 (pink)
- `Neutral` 10 #F9FAFB … 90 #1F2937 (cool grey)
- `Success` 50 #29BB6C · `Warning` 50 #FC803A · `Danger` 50 #FF6666, 60 #FF4747
- `Blue` 30–80 (60 #2563EB) · `White/10–100`, `Black/10–100` — alpha steps for overlays
Brand hues are placeholders — a client swaps the ramps, the semantic layer stays.

## 3. Semantic colour roles (Light/Dark)
- `Background/Base/` Primary, Secondary, Tertiary (+ `_Pressed` each), Disabled
- `Background/Brand/` Primary, Secondary, Accent, Accent_Secondary (+ `_Pressed`/`_Hover`)
- `Background/Status/` {Success|Warning|Danger}_{Primary|Secondary}
- `Text_Icon/Base/` Primary, Secondary, Tertiary, Quarterary, White, Black, Disabled
- `Text_Icon/Brand/` Brand_Primary, Brand_Secondary, Accent_Primary, Accent_Secondary
- `Text_Icon/Status/` {Success|Warning|Danger}_{Primary|Secondary}
- `Border/Base/` Primary, Secondary, Tertiary, Disabled · `Border/Brand/…` · `Border/Status/…`
- `Button/{Primary|Secondary|Tertiary|Danger|Danger_Secondary|Link}/` Default, Pressed, Disabled, Text, Text_Disabled
- `Rating/{Star|Heart}_` Default, Hover, Active (star active #FFB605)
Pattern: `Category/Group/Role[_State]`. States: Default, Pressed (mobile), Hover (web), Disabled.

## 4. Spacing & radius (4 px base)
`Spacing/` 0=0 · 0,5=2 · 1=4 · 1,5=6 · 2=8 · 3=12 · 4=16 · 5=20 · 6=24 · 8=32 · 10=40 · 12=48 · 16=64 · 20=80 · 24=96 (primitives go up to 480=1920)
`Radius/` 0, 1=4, 1,5=6, 2=8, 3=12, 4=16, 6=24, 8=32, Rounded=1920 (pill)
Validator scale (`design-validate`): 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, then multiples of 8 — `Spacing/1,5 = 6` stays in the template but is flagged by the validator. Token name = multiplier of 4 (`Spacing/4` = 16 px). Typical: screen side padding 16, list gaps 8–12, section gaps 24–32, card radius 12–16, button radius 12 or Rounded.

## 5. Typography (Inter; iOS-like scale; text styles `Group/Weight`)
| Style | Size / LH | Weights |
|---|---|---|
| Large Title | 34 / 41 | Bold |
| Title 1 | 28 / 34 | Bold |
| Title 2 | 22 / 28 | Bold, Regular |
| Title 3 | 20 / 25 | Bold, Regular |
| Headline | 17 / 22 | Bold, Semibold Italic |
| Body | 17 / 22 | Semibold, Regular |
| Callout | 16 / 21 | Semibold, Regular |
| Subhead | 15 / 20 | Semibold, Regular |
| Footnote | 13 / 18 | Semibold, Regular |
| Caption 1 | 12 / 16 | Medium, Regular |
| Caption 2 | 11 / 13 | Semibold, Regular |
| Caption 3 | 10 / 12 | Semibold, Regular |
Letter spacing 0. Line height in px. Body text ≥ 15–17; Caption 3 only for non-essential labels (WCAG 1.4.4 — check scaling).

## 6. Effects
- `Shadow/` XXS (0 1 2, 5%) · XS (0 1 2 6% + 0 1 3 10%) · S (0 2 4 −2 6% + 0 4 8 −2 10%) · M (0 4 6 −2 4% + 0 12 16 −4 10%) · L (0 8 8 −4 4% + 0 20 24 −4 10%) · XL (0 24 48 −12 20%) — colour #121212
- `Blur/` S 4 · M 8 · L 16 · XL 24 (background blur)
- `Focus Shadows/` Violet Big (spread 4) · Violet Mini (spread 2) — Primary 50 @ 40% (WCAG 2.4.7/2.4.11)

## 7. Grids
Mobile 4 col, gutter 16, margin 24 · Tablet 6 col, gutter 24, margin 56 · Desktop 12 col, gutter 24, margin 72 (stretch).

## 8. Components & naming
Pages: BASE (Color Scheme, Typography, Grids, Shadows, Icons, Flags) · NATIVE (iOS 26, Android, Keyboards, Bottom Sheets) · GENERAL (Buttons, Inputs, Cell, Selection, Header, TabBar, Tab & Segmented Control, Badge/tag/chips) · DATA DISPLAY (Date picker, Image grid, Loader, Tooltip, Progress Bar, Slider) · USER ENGAGEMENT (Messages) · ADDITIONAL (Avatar, Charts) · FLOW TEMPLATES (Authorization, Onboarding, Settings, Biometry, Paywall).
Key component sets and variant props:
- **Button Standart** — Type (Primary / Secondary / Secondary outlined / Tertiary / Link) · Size (Large / Medium / Small) · State (Default / Pressed / Disabled) · Dangerous (Off/On); **Buttons Block** — 1–2 buttons, horizontal/vertical, bg variants
- **Inputs** — Simple Text, Mobile phone, Password, Bank Card, Search, PIN, Multiple Line, Leading/Trailing Selector; State: Default / Focus / Typing / Filled / Error / Disabled (+ Filled-Disabled)
- **Selection** — Checkbox, Radio, Toggle (iOS/Android): Default / Selected / Disabled · **Cell** — Default / Toggle / Radio
- **Header** — Navigation Bar (Left/Middle/Right slots), Large Title types, Status bar · **Tab Bar** (2–5 tabs) · **Segmented control** (2–5)
- **Badge** (Text/Time/Number/Icon/Dot) · **Chips** (Big/Medium/Small × Active/Enabled/Disabled) · **Avatar** (16–56; Icon/Initials/Emoji/Photo) · **Loader**, **Progress Bar**, **Tooltip**, **Slider**, **Bottom Sheets**, Pickers, Charts
Naming: variant props in Title Case (`Type`, `Size`, `State`, `Mode`); `_` prefix = private sub-component; `Master / …` = base component for variants; `Mode = Light/Dark` for native pieces.
Flow templates are the starting point for standard flows (auth, onboarding, settings, biometry, paywall) — reuse their structure before inventing one.

## 9. How skills use this
- **project-setup** — if the client has a DS: map it to this structure in `design-system.md` (what exists / what's missing); if not: note «baseline = Chili DS template».
- **ui-craft `foundation`** — build palette, type scale, spacing, radii, effects, grid and core components in this structure; swap brand ramps to the project's colours.
- **ui-craft / feature-update / flow-builder / ui-variations** — when the project DS lacks a token, style or state, propose one in this naming as `Proposal`; never silently add it.
- **design-qa** — flag hardcoded values that have a token, wrong layer (primitive bound directly), missing states vs the lists above, off-scale spacing (not a multiple of 4) — severity «should fix» unless it breaks accessibility.
