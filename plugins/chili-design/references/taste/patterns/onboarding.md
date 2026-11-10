# Onboarding

## When
First launch, first use of a feature, post-update «what's new», empty first state of the main screen.

## Principles
- Value before asking: let users see or do something useful before sign-up, permissions or paywall when business allows (NN/g).
- Shortest path to the first success («aha» moment) — every screen must earn its place.
- Teach in context (tooltips, empty states, first-run hints) rather than long intro carousels that users skip (NN/g).
- Personalisation questions only if the answers visibly change the experience; show «Skip».

## Flow (typical order — adapt to the task)
1. Splash / launch screen → straight to content or welcome (no artificial delay).
2. Welcome: value proposition in one sentence + primary CTA («Get started») + secondary «I have an account».
3. Optional 1–3 benefit screens (skippable, with progress dots) — only if the product needs explaining.
4. Account creation — or deferred until the user saves/pays (see `auth.md`).
5. Personalisation (optional, 1–3 questions, skippable).
6. Permissions just-in-time with a pre-prompt (see `permissions.md`), not all at the start.
7. Paywall only if the business model requires it here (see `subscription-iap.md`).
8. Land on a populated or guided first screen (sample data, checklist, «Do your first X»).

## Must-have states
First launch · returning user (skip onboarding) · interrupted onboarding (resume where left) · skipped steps (sensible defaults) · offline on first launch · no account (guest) vs signed in · deep link on first launch (land on target after minimal setup).

## Platform notes
- **iOS:** launch screen must match the first screen (no logo-ad splash) (HIG); «What's New» as a sheet; sign-in options shown together with Sign in with Apple if other social logins exist (check current App Review rules).
- **Android:** Splash Screen API (icon on background, short); system back on the first onboarding step exits the app, on later steps goes back a step (Material).
- **Flutter:** native splash via `flutter_native_splash` (static); onboarding carousel with `PageView` + indicator; store «onboarding done» flag locally; make sure back/swipe behaviour matches platform rules above.

## Copy
Headlines about the user's outcome, not features («Track every lesson in one place»). CTAs: «Get started», «Continue», «Skip». No marketing superlatives.

## Anti-patterns
5+ swipe-through intro screens · asking all permissions at launch · forced sign-up before any value (when not required) · paywall with hidden close · empty main screen after onboarding · onboarding shown again after update/reinstall without reason.

## QA checklist
Skippable where possible · resume after interruption · first screen not empty · permissions not on launch · back behaviour per platform · copy short and outcome-focused · works with large text (Dynamic Type / font scale).
