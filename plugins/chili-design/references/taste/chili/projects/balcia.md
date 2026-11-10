# Balcia — insurance (B2C)

Figma (approved screens): https://www.figma.com/design/5L8UBFxoXx1nFHvZsgDPyL/Untitled?node-id=1-1367
Source: 15 screens; tokens from Figma variables, layout from layers. Opt-in reference — see `../craft.md`, `../ideas.md`.

## Product
Buy and manage insurance (travel, home, MTPL), submit claims, promos, gamified hub (games, referral, rewards). Baltic market, EN/LV.

## Visual (from Figma tokens)
- Dark: base #1D1818, surfaces #2D2424 / #382D2D, primary #FF6D45 with **black** text, selected chip #BAF4F8, secondary text #A6A0A0, disabled CTA #614138.
- Roboto, +0.25 tracking; 28 Bold step titles, 16 body, 14 chips. Margin 20; cards r 20, p 16; chips 36 h pill; CTA 56 h pill; step header photo + 54% overlay + noise; surface top r 24.
- Full specs: `../craft.md`.

## Signature patterns
- **Tab bar + central «+»**: Home / Products / Policies / Claims with a raised orange «+» in the middle; tap → dimmed overlay with two big tiles «Submit claim» / «Buy insurance», «+» turns into «×».
- **Product card**: photo, discount badge («−50% off»), name, «from €2.42 €1.21 /mo», «Buy» pill.
- **Offer screen**: period chips (12 / 9 / 6 / 3 / 1 mon.), old price struck + new price in green pill, total, key terms as bullets, «See what is covered →», promo-code row with ✓ and delete, sticky full-width CTA «Get Home insurance».
- **Coverage**: segmented «Limits / Insured risks»; risks as accordion list; limits as key–value list with a promo card on top.
- **Address search**: search field with Cancel → loading spinner → «Address not found» illustration → result list.
- **Multi-step questionnaire**: header photo with segmented progress bar, back + close; one topic per step; single-choice **chips** instead of dropdowns (material, year range, alarm type); toggle «Same for all buildings»; accordion per building; sticky «Continue» (dimmed when disabled).
- **Payment**: bank links (Citadele, Swedbank) as method tiles; failure as inline card with illustration: «Failed to process your payment… you haven't been charged yet» + «Try again».

## Ideas worth remixing (principle, not look)
Central quick-action «+» for two primary jobs · chips for ≤ 4 options in forms · reassuring payment-error copy · progress-in-header questionnaire.

## Watch out
Promo hero + promo carousel + hub on one home screen is dense — keep one promo zone per screen in new work. The central «+» opens an overlay, not a sheet — keep it that way (no sheet on top of it).
