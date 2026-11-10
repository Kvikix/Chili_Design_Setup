# Twino — investing / fintech (B2C)

Figma (approved screens): https://www.figma.com/design/5L8UBFxoXx1nFHvZsgDPyL/Untitled?node-id=5-53090
Source: 16 screens; tokens from Figma variables, layout from layers. Opt-in reference — see `../craft.md`, `../ideas.md`.

## Product
Investment app: overview of account value, wallets (FLEXI, main, ABS), top up / withdraw, manual bank transfer, invest in loan securities (primary / secondary market), sell with discount/premium, transactions.

## Visual (from Figma tokens)
- Light cool: base #F3F4F6, surfaces white, brand #204AD5, FLEXI sub-brand #875BF7, wallet cards #CED9FF / #E8DFFF, 4 text levels #272728 → #9D9D9E, status with soft fills.
- DM Sans, negative tracking on titles (−1 / −0.5); hero amount 42 Medium; 17/22 nav titles. Cards r 20, stepper container r 32 p 6 with 56 round buttons, nav buttons 44 white circles, CTA 56 pill on a gradient fade.
- Full specs: `../craft.md`.

## Signature patterns
- **Overview**: large total value + change (↑ €32.18), wallet cards in a row (tap → wallet), dismissible promo banner, segmented «Portfolio / Balance / Return», donut chart with legend «By type / By status», last transactions.
- **Tab bar** with pill-shaped selected item (Overview / FLEXI / ABS).
- **Empty states**: card with small illustration, «No data yet» + one line about when data appears.
- **Transactions**: header with download (statement), filter chips «Sort / This month / Filters», count «75 transactions», grouped by date, icon per type, amount right-aligned, status sub-label.
- **Amount entry**: title, «Available on main wallet € 287.22 / Reserved», huge «€ 0|» input, fee line, info box «You will receive N securities…», CTA; numeric keypad.
- **Success feedback**: top inline banner «€287 successfully withdrawn to the main wallet» after returning to the wallet; full success screen with illustration for completed sale («Congratulations…» + «My portfolio»).
- **Manual bank transfer**: details list with copy buttons per field + «Share details».
- **Sell**: price stepper for discount/premium (0% / 5% / −12%) with badge «Premium» / «Discount», validation in red «The maximum premium is 4.9%» and disabled «Sell», key–value summary, explanatory note.
- **Filters**: full screen with range sliders (interest rate, remaining term), «Reset all», «Confirm».

## Ideas worth remixing (principle, not look)
Big-number hero for money screens · copy-per-field for bank details · inline validation next to the stepper with disabled CTA · two-level success (banner for routine, screen for milestones).

## Watch out
Custom keypad on the invest screen differs from system keypad on top-up — pick one per project. Gradient headers reduce contrast for small grey text — check WCAG 1.4.3.
