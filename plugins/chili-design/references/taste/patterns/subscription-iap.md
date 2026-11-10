# Subscriptions, paywalls and in-app purchase

## When
Paywall, plan selection, free trial, upgrade/downgrade, restore purchases, manage or cancel subscription, one-off digital purchases.

## Store rules — check before designing (check: Nov 2026)
- **Digital goods/features used in the app** (premium, content, credits) → by default App Store In-App Purchase / Google Play Billing.
- **External payment links / alternative billing** are allowed only in some regions and under store programmes (e.g. US court-driven changes, EU DMA, Google Play changes after the Epic settlement), with conditions and fees. Never design an external «Pay on web» button unless the task confirms it's approved.
- **Physical goods and real-world services** (delivery, tickets, tuition paid to a school) → own payment (see `payment-checkout.md`), not IAP.
- **EU withdrawal function** (Directive (EU) 2023/2673, applies from 19 June 2026): online contracts need an easy, clearly labelled way to withdraw/cancel — confirm wording and placement with PM/legal.
Prices, trial length, plan names and legal copy always come from the task.

## Paywall anatomy
1. Clear close (X) visible from the start, unless the business has confirmed a hard paywall.
2. Headline = outcome for the user; 3–5 benefits (icons + short lines) or a compact comparison Free vs Premium.
3. Plans: 2–3 options, one preselected and marked («Best value» only if true); price per period stated plainly; per-week/month equivalent as secondary text.
4. Trial terms near the CTA: «7 days free, then €4.99/month. Cancel anytime.» — price after trial must be as visible as the trial.
5. One primary CTA («Start free trial» / «Subscribe»); secondary: «Restore purchases», Terms, Privacy.
6. Social proof only if real data exists.

## Flow
Entry (feature gate / onboarding / settings) → paywall → system purchase sheet (can't be restyled) → processing → success screen that unlocks the feature and says what's included → back to the original action.

## Manage / cancel
- In-app «Subscription» screen: current plan, renewal date, price, «Change plan», «Manage subscription» (opens store subscription settings for IAP).
- Cancel must be findable and not harder than subscribing; retention offer allowed once, with a clear «Continue to cancel».
- Show states: active · trial (days left) · cancelled but active until date · grace period / billing issue (fix payment) · expired · refunded · family/shared.

## Must-have states
Loading prices (skeleton — never show stale/hardcoded prices) · purchase pending (Ask to Buy, slow payment) · cancelled by user (silent return, no error) · failed · already subscribed · restore found nothing · offline · region without offer.

## Platform notes
- **iOS:** StoreKit purchase sheet with Face ID/password; prices localised by the store; subscription offers (intro, promo, win-back) configured in App Store Connect; «Restore purchases» expected; manage via system subscription screen (HIG / App Review 3.1).
- **Android:** Play Billing bottom sheet; base plans + offers; manage via Play subscription center deep link; grace period and account hold states (Material / Play policy).
- **Flutter:** `in_app_purchase` or RevenueCat (`purchases_flutter`), often with remote paywall configs; design one paywall that works with both stores' price strings (different lengths/currencies); system sheets differ per platform — don't mock them as custom UI.

## Copy
«Start 7-day free trial» · «Then €4.99/month» · «Cancel anytime in Settings» · «Restore purchases» · «Your Premium is active until 12 Dec».

## Anti-patterns
Hidden or delayed close button · trial highlighted, price after trial tiny/grey · fake countdowns or «only today» · preselected most expensive plan without reason · cancel buried behind support chat · confirmshaming («No, I don't want to learn»).

## QA checklist
Price/period/trial terms readable next to CTA · close visible · restore + terms + privacy present · all subscription states designed · copy has no invented prices · cancel path ≤ subscribe path · works with long localised prices.
