# Ganbei — food ordering and delivery, custom cakes (B2C)

Figma (approved screens): https://www.figma.com/design/5L8UBFxoXx1nFHvZsgDPyL/Untitled?node-id=5-23747
Source: 26 screens; tokens from Figma variables, layout from layers. Opt-in reference — see `../craft.md`, `../ideas.md`.

## Product
Restaurant delivery/pickup app: menu, offers, cart with minimum order, checkout; custom cake builder (filling, weight, decoration, own image).

## Visual (from Figma tokens)
- Light cream: base #FFFCF8, surfaces #F5EFE9 / white, primary near-black #302E2B, error/discount #FE5751, soft status fills (#C9F1E4, #F4D6D5), accent blue #104869 in cart progress.
- SF Pro Display with positive tracking (+0.5, body up to +2…3); 34 Bold H1, 24 Semibold sheet titles, numbers 36 Bold. Tiles r 24, cells r 20, big blocks r 32, add button 32 h pill, sheet r 32 + 40×3 grabber, 3D emoji-style badges.
- Full specs: `../craft.md`.

## Signature patterns
- **Home**: delivery address selector on top, promo hero carousel, search, **category tile grid** (Sushi, Main, Additions…, «Show all →»), horizontal carousels («You've ordered», «For big parties»), old price struck + red new price.
- **Add → stepper**: «+» price button turns into a dark stepper «− 12.20€ +»; quantity badge appears on the product image.
- **Floating cart bar** at the bottom with progress to minimum sum: «6.20€ / 20€ (min)», fills as items are added.
- **Cart as one bottom sheet** («Your order»): items with steppers, «Need cutlery? Yes/No» segmented, comment field, sticky bar «12€ away from free delivery» → «Free delivery ✓» + «Checkout with 20.85€».
- **Checkout**: Delivery / Pickup segmented, address card, delivery time cards (Standard 40–60 min / Schedule), toggle «Call me to confirm order», cost breakdown (subtotal, packaging, VAT, delivery, discount in red, total), payment method row (card ****0678), company-invoice checkbox.
- **Address details** as a full-screen modal: search, «Explore nearby», apartment / floor fields, courier instructions, **«Save» bar attached above the keyboard**.
- **Cake builder**: hero with step progress and support button; option cards with «Change» (Filling, Weight); filling list with selected item as dark card, price/kg badge, allergen chips, «Show more»; **weight calculator**: stepper + «≈ for 10 people», popular presets, numeric keypad, range hint «Possible weight: 2–4 kg» and «Need more? Call support»; decoration tabs (Edible / Plastic) with add steppers.

## Ideas worth remixing (principle, not look)
Add-to-stepper morph · min-order progress in the cart bar · «X € away from free delivery» · transparent cost breakdown · CTA attached to keyboard · «≈ for N people» helper next to abstract units.

## Watch out
Cart sheet + checkout: checkout is a push screen, not a second sheet — keep it. Custom-image upload in cake flow must respect IP/licensing — use neutral examples in new mockups.
