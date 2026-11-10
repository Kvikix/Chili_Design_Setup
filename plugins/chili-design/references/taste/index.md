# Taste library — index

Built-in reference base for `ui-craft` and the design workflows (`feature-update`, `flow-builder`, `ui-variations`, `design-qa`).
**Read this index first, then only the files the task touches.** Don't load the whole library.

**Priority (always):** task requirements and confirmed business logic → project design system and approved patterns (`context/design-system.md`, project Figma) → `patterns/` and `platform/` → `core.md`. `chili/` is **not** a default style: use it only when «Chili projects» is chosen as a reference (or the designer asks), as calibration and ideas — never as a look to apply.
If a pattern here conflicts with the project's approved pattern, keep the project's and mention the trade-off.
Patterns are UX guidance, not business truth: prices, limits, legal texts, payment providers and store rules come from the task/PM — never invent them (see `never_invent` in `context/project-config.md`).

## Files

| File | Read when the task touches… |
|---|---|
| `core.md` | visual craft: hierarchy, typography, colour, radii, motion, «AI-generic» look. Always for `ui-craft`. |
| `patterns/forms.md` | any input: fields, validation, pickers, multi-step forms, keyboards |
| `patterns/search-filter.md` | search, lists, sorting, filters, chips, results and no-results |
| `patterns/onboarding.md` | first launch, intro screens, empty first state, personalisation, feature tours |
| `patterns/auth.md` | sign-up, sign-in, OTP, social/Apple/Google sign-in, passkeys, biometrics, password reset, sessions, account deletion |
| `patterns/permissions.md` | push, location, camera, photos, contacts, tracking (ATT), Bluetooth |
| `patterns/subscription-iap.md` | paywall, trials, plans, in-app purchase, restore, manage/cancel subscription |
| `patterns/payment-checkout.md` | cart, checkout, cards, Apple Pay / Google Pay, 3-D Secure, payment errors, receipts, refunds |
| `platform/surfaces.md` | **any screen with overlays**: push vs full-screen modal vs bottom sheet vs dialog vs menu vs toast; sheet rules (one sheet, continue inside it), layering limits. Always read when a flow opens anything on top of a screen. |
| `platform/navigation.md` | tab bar, stacks, back behaviour, modal vs push, deep links |
| `platform/ios-native.md` | native iOS behaviour and components (HIG) |
| `platform/android-native.md` | native Android behaviour and components (Material 3) |
| `platform/flutter.md` | Flutter projects: platform strategy, cheap vs expensive, adaptive widgets, handoff |
| `creative.md` | creative exploration: creativity levels (safe / bold / wild), axes to vary, techniques, converge, guardrails. Read for `ui=extend` / `ui=free`, variants, directions, or when asked for bolder options. |
| `chili/craft.md` | **opt-in** («Chili projects» reference): measured radii, spacing, typography, colour roles and component specs from 5 Chili projects, with calibration ranges. |
| `chili/ideas.md` | **opt-in**: idea bank of interesting solutions from Chili projects (principle + remix), fuel for `creative.md`. |
| `chili/projects/<name>.md` | **opt-in**: one project card — `balcia`, `totherescue`, `rover`, `ganbei`, `twino`. Read only the 1–2 closest to the task; cite «(Chili: <project>)». |

## Platform files
Read `surfaces.md` (+ `navigation.md` if navigation changes), then the file for the project stack (from `context/design-system.md` / `context/project-context.md`; not recorded → ask the designer once and suggest adding it to `context/design-system.md`): native iOS → `ios-native.md`, native Android → `android-native.md`, Flutter → `flutter.md` (+ the iOS/Android file only for the parts the project adapts per platform).

## Pattern file format
Each pattern file uses the same blocks, so skills can quote them:
**When** · **Flow** (steps) · **Must-have states** · **Platform notes** (iOS native / Android native / Flutter) · **Copy** · **Anti-patterns** · **QA checklist** · sources in parentheses.

## Platform shorthand used in pattern files
- **iOS** — native SwiftUI/UIKit, Apple HIG.
- **Android** — native Jetpack Compose / Views, Material 3.
- **Flutter** — one codebase; `MaterialApp` by default. Native-feel on iOS needs explicit `Cupertino*` widgets or `.adaptive` constructors (e.g. `Switch.adaptive`, `showAdaptiveDialog`). If the design differs per platform, say so in the annotation — it doubles dev work.

## Extending the library
- New pattern → copy the block format above, one file per flow, keep it under ~120 lines, add a row to the table.
- Facts that change (store rules, laws, OS behaviour) → mark with `(check: <month year>)` and re-verify when used.
- Project-derived rules go to `chili/`, not into generic patterns.
- New project: Figma link to approved screens → tokens via `get_variable_defs`, sizes via layers → card in `chili/projects/<name>.md` (Product · Visual · Signature patterns · Ideas worth remixing · Watch out) → add a column to `chili/craft.md` → add 1–3 ideas to `chili/ideas.md`.
- Project cards describe client work: use them as internal references; never copy a client's brand, assets or copy into another client's mockups.
