# Chili craft specs — radii, spacing, typography, components

Measured from Figma tokens and layers of 5 approved Chili projects (Figma file 5L8UBFxoXx1nFHvZsgDPyL; cards in `projects/`).
**Opt-in reference**, not a default style: read only when the designer picks «Chili projects» as a reference source, or asks to compare with our projects. Use it to calibrate numbers for a new visual (`ui=free`, UI foundation) or to propose improvements (`ui=extend`). The current project's DS always wins.

## 1. Spacing and layout (375 pt frames)
| | Balcia | ToTheRescue | Rover | Ganbei | Twino |
|---|---|---|---|---|---|
| Side margin | 20 (CTA, headers), 16 (cards) | 16 | 16 (cards inset 20) | 16 | 16 |
| Spacing scale | 4 · 8 · 12 · 16 · 20 · 24 | tokens 2 · 4 · 8 · 12 · 16 · 20 · 32 · 40 · 64 | 4 · 8 · 10 · 20 | 8 · 12 · 16 · 20 · 24 | tokens 2 · 4 · 8 · 12 · 16 |
| Between sections | 24 | 12–16 | 16–20 | 40 (home rows), 20–24 (sheet) | 12 |
| Inside cards | p 16, gap 16 / 12 | p 8–12, gap 12 / 4 | p 16–20 | p 16–20 | p 12–16, rows gap 8 |
| Grid of tiles | — | photo grid 123×123 | carousel 311 wide | 3 × 109×108, gap 8 · carousel 134 wide, gap 8 | wallet cards 2-up |

**Calibration:** margin 16 (20 for airy/premium), 4-pt base with 8 · 12 · 16 · 20 · 24 · 32 most used; gap inside a group ≤ half the gap between groups.

## 2. Radii
| | Balcia | ToTheRescue | Rover | Ganbei | Twino |
|---|---|---|---|---|---|
| Radius tokens | — | 8 · 12 · 16 · 20 · 24 | — | — | 32 · pill (1920) |
| Card / cell | 20 | 20 (photo inside 18) | 24 · 32 | 20 · 24 (image tiles) · 32 (big blocks) | 20 |
| Button (primary) | pill (r 40, h 56) | 12 (h 48) · circle 56 (tab action) | pill (h 56) | pill (h 32–48) | pill (h 56) |
| Chip / small control | pill 36 h | r 12, 40 h | r 24 | pill 32 h · r 12 (secondary small) | — |
| Input / search | — | r 12, 40 h | r 32, 48 h | r 20 | — |
| Sheet / surface top | 24 | 32 (tab bar) | 30–32 | 32 + grabber 40×3 | — |

**Calibration:** one family per product — small 12, medium 20, large 24–32, pill for buttons and chips. Nested radius ≈ outer − padding (ToTheRescue 20 → 18 at 8 padding is slightly off; 12 would be exact).

## 3. Typography
| | Family | Scale (size/line-height) | Weights | Tracking | Hero numbers |
|---|---|---|---|---|---|
| Balcia | Roboto | 32/40 · 28/38 · 20/26 · 18/23 · 16/24 · 14/20 · 12/16 · 10/14 | Regular · Medium · SemiBold · Bold | +0.25 everywhere | price in highlighted pill |
| ToTheRescue | Inter | 22/28 · 20/25 · 18/23 · 16/21 · 15/20 · 14/18 · 13/16 · 12/14 · 10/12 | Regular · Medium only | 0 | — |
| Rover | SF Pro Text / Display | 25/34 · 22/28 · 20/25 · 16/22 · 15/20 · 13/18 · 12/16 · 11/13 | Regular · Medium · Semibold · Bold | 0 (+0.5 on 20) | 152 km stats |
| Ganbei | SF Pro Display | 34/42 · 28/36 · 24/31 · 20/26 · 18/23 · 16/22 · 14/19 · 12/16 · numbers 36/36 | Regular · Medium · Semibold · Bold | +0.5 (body up to +2…3) | 36 Bold, −0.41 |
| Twino | DM Sans | 28/34 · 22/28 · 20/22 · 17/22 · 16/21 · 15/20 · 13/18 · 12/13 · 10/12 · hero 42/41 | Regular · Medium · SemiBold | −1 / −0.5 on titles | 42 **Medium**, −1 |

**Calibration:** one family, 8–10 sizes, body 15–16, captions ≥ 12 for meaning (10–11 only for tab labels/badges). Two calm weights (Regular/Medium) read more «premium» (ToTheRescue, Twino); Bold headings read more «consumer/energetic» (Balcia, Ganbei, Rover). Big numbers: large size + lighter weight + negative tracking (Twino) looks more refined than Bold.

## 4. Colour roles (for reference — never reuse a client's palette)
| | Base | Surfaces | Primary / on-primary | Secondary text | Notes |
|---|---|---|---|---|---|
| Balcia | #1D1818 dark | #2D2424 · #382D2D | #FF6D45 / black text | #A6A0A0 | teal #BAF4F8 for selected chips; warm-tinted darks |
| ToTheRescue | #F2EFEB warm light | #FFFFFF · #F5F4F4 | #2F4D2D / white | #636363 | danger as soft fill #F5F4F4 + red text |
| Rover | #181818 · #0E0E0E | rgba(255,255,255,.05) glass | #EE7A40 / white | #D3D3D3 | disabled = dark orange #924D2A |
| Ganbei | #FFFCF8 cream | #F5EFE9 · #FFFFFF | #302E2B near-black / white | #8A8A8E | soft status fills (green #C9F1E4, red #F4D6D5) |
| Twino | #F3F4F6 | #FFFFFF | #204AD5 / white · FLEXI #875BF7 | #444546 · #6E6F71 · #9D9D9E | 4 text levels; sub-brand colour per product |

Patterns: disabled = desaturated primary, not grey (Balcia, Rover, Twino) · dark themes use warm or neutral near-black, never pure #000 · status colours always paired with a soft background.

## 5. Components (measured)
| Component | Spec range across projects |
|---|---|
| Primary CTA | h 48–56, full width (335–343), pill; sticky block: divider 0.5 + blur (Balcia), gradient fade white 0→73→100% (Twino), dark bar r 24 top (Ganbei) |
| Small button / add | h 32, pill, price + «+» (Ganbei); icon button 40×40 r 12 (ToTheRescue), 44×44 circle white (Twino nav) |
| Chip | h 32–40, px 12, pill or r 12, count badge 20×20 inside (ToTheRescue) |
| Segmented | h 40, r 12, inner option r 9–11 (Ganbei); stories-style progress 4 h r 2, gap 8 (Balcia) |
| List row / cell | h 48–64 (Twino transactions 64, cells 56–72); r 20–32 when cells are separate cards |
| Card with photo | 343×133, photo 96×117 (ToTheRescue); image tile 134×134 r 24 (Ganbei); route card 311×233 (Rover) |
| Stepper | h 32 pill (cart); L: container r 32 p 6 + 56 round buttons, value 20 Medium (Twino) |
| Bottom sheet | top r 24–32, grabber 40×3, title 24 Semibold, content gap 20 |
| Tab bar | h 86–102 incl. home indicator, top r 32 (ToTheRescue, Rover), blur 25 on dark; central action 56 circle |
| Shadows | rare and tinted: 0 4 12 rgba(128,83,50,.1) warm (ToTheRescue tab bar) · 0 4 20 primary 20% glow (Rover) · 0 4 24 grey 10% (ToTheRescue S) |
