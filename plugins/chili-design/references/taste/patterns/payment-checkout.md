# Payment and checkout

## When
Paying for physical goods or real-world services: orders, bookings, tickets, fees, top-ups, invoices. Digital features/content → see `subscription-iap.md`.

## Principles
- Fewest steps to pay; express wallets first; guest checkout when business allows.
- Total cost visible before the final tap: items, fees, delivery, tax/VAT, discounts — no surprises on the last step (NN/g).
- One primary action per step; final button states the amount: «Pay €24.90».
- Payment provider, accepted methods, fees and refund rules come from the task — never invent them.

## Flow
1. Cart / summary: items, quantities, editable; promo code field collapsed («Have a promo code?»).
2. Details (only what's needed): delivery/contact; saved addresses preselected.
3. Payment method: Apple Pay / Google Pay at top if supported → saved cards → «Add card» → other methods (bank link, BNPL — only if confirmed).
4. Review (can be merged with step 3 on mobile): final total, method, address, legal text/links.
5. Pay → processing (block double tap, keep the user on screen) → 3-D Secure / bank app challenge if required → result.
6. Success: confirmation, order number, what happens next, receipt (email/in-app), primary action back to the product.

## Card entry
Number (auto-detect brand, spaces), expiry MM/YY, CVC (numeric keypad, «?» help), name only if required; card scan via camera where supported; «Save card for next time» opt-in. Prefer the provider's hosted/native card UI (Stripe, Adyen, etc.) — confirm with developers which fields are customisable.

## SCA / 3-D Secure (EU, PSD2)
Most EU card payments need strong customer authentication: a provider/bank screen or bank-app switch appears. Design the **before** (processing) and **after** states (success / failed / cancelled / timed out) — not the bank screen itself. Return the user to the same checkout with data intact if authentication fails.

## Must-have states
Empty cart · price changed / item unavailable · invalid promo · address not serviceable · processing · 3DS challenge · declined (insufficient funds, expired card — say what to do) · network error during payment (don't charge twice — show «Checking payment status…») · pending (bank transfer) · success · refund / cancellation status · receipt.

## Platform notes
- **iOS:** Apple Pay button in Apple's official styles (black/white/outline, required wording «Buy with / Pay with Apple Pay»), payment sheet is system UI; card scan via system camera; haptic on success (HIG, Apple Pay guidelines).
- **Android:** Google Pay button per brand guidelines; payment sheet is system/provider UI; back during processing must not cancel silently (Material).
- **Flutter:** `pay` plugin for Apple/Google Pay buttons, or the provider SDK (`flutter_stripe` PaymentSheet, Adyen drop-in) — these ship their own sheets with limited theming (colours, radius, font); design the checkout around them and mark provider UI in annotations.

## Copy
«Pay €24.90» · «Payment declined by your bank. Try another card or contact your bank.» · «We're confirming your payment. Don't close the app.» · «Order #4821 confirmed».

## Anti-patterns
Fees appearing on the last step · forced account creation before paying · custom-drawn Apple/Google Pay buttons · generic «Payment failed» · losing the cart after an error · double-charge risk with re-enabled button · tiny legal text as the only price info.

## QA checklist
Total with all fees before pay · amount on the final button · wallets per brand rules · all decline/3DS/timeout states · cart persists · receipt and next steps · provider UI marked as such · no invented fees or methods.
