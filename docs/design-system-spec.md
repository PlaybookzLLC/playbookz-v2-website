# Design System Spec

> **Source of truth**: This spec is condensed from the interactive design-system.jsx artifact. For visual previews of every component, open the "Design System" chat in this project and view the .jsx artifact there. If any token or rule needs updating, make the change in that chat first, then update this spec to match.

---

## Colors

### Core

| Token | Hex | Usage |
|-------|-----|-------|
| primary | `#15141A` | Dark section backgrounds |
| accent | `#C3FF00` | CTAs, overlines, highlights, focus rings |
| white | `#FFFFFF` | Light section backgrounds, text on dark |

### Extended

| Token | Hex | Usage |
|-------|-----|-------|
| primaryLight | `#1E1D24` | Card fill on dark backgrounds |
| primaryMuted | `#2A2930` | Subtle dark fill |
| accentHover | `#D4FF33` | Accent hover state |
| accentDark | `#9ECC00` | Accent pressed / dark variant |
| offWhite | `#F5F5F7` | Alternate light section bg |
| grayLight | `#E5E5E7` | Light borders, subtle fills |
| grayMid | `#8A8A8E` | Muted elements |
| grayDark | `#6B6B6F` | Body text on light bg |

### Semantic

**Dark sections**: bg `#15141A`, card fill `#1E1D24`, card border `rgba(255,255,255,0.08)`, heading `#FFFFFF`, body `#A0A0A5`

**Light sections**: bg `#FFFFFF` or `#F5F5F7`, card fill `#FFFFFF`, card border `rgba(0,0,0,0.08)`, heading `#15141A`, body `#6B6B6F`

**Text on accent**: `#15141A` (dark text on lime green)

### Review-Only Colors

| Token | Hex | Usage |
|-------|-----|-------|
| reviewOrange | `#E8880A` | Filled stars |
| reviewStarEmpty | `#D1D5DB` | Empty stars |

Orange is **exclusively** for review/rating UI. Never used for CTAs, badges, icons, or anything else.

---

## Typography

**Font family**: Plus Jakarta Sans (weights: 400, 500, 600, 700, 800)

**Import**: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

### Type Scale

| Token | Size | Weight | Line Height | Tracking |
|-------|------|--------|-------------|----------|
| displayXL | 64px | 800 | 1.05 | -0.03em |
| displayLG | 48px | 800 | 1.1 | -0.025em |
| displayMD | 36px | 700 | 1.15 | -0.02em |
| headingLG | 28px | 700 | 1.2 | -0.015em |
| headingMD | 22px | 700 | 1.3 | -0.01em |
| headingSM | 18px | 600 | 1.35 | -0.005em |
| bodyLG | 18px | 400 | 1.6 | 0 |
| bodyMD | 16px | 400 | 1.6 | 0 |
| bodySM | 14px | 400 | 1.55 | 0.005em |
| caption | 12px | 500 | 1.5 | 0.02em |
| overline | 13px | 600 | 1.4 | 0.08em |

### Overline Pattern
Overlines are uppercase, accent-colored (`#C3FF00`) on dark, muted primary on light. Used above section headings.

---

## Spacing & Layout

| Token | Value |
|-------|-------|
| sectionY | 96px (desktop), 64px (mobile) |
| sectionX | 64px (desktop), 24px (mobile) |
| maxWidth | 1200px, centered with `margin: 0 auto` |
| cardPadding | 28px |

### Gap Scale
xs: 8px · sm: 12px · md: 16px · lg: 24px · xl: 32px · xxl: 48px

### Border Radius
sm: 3px · md: 5px · lg: 5px · xl: 8px · pill: 999px

**Default for cards and panels: 5px. Buttons are always pill (999px).**

### Responsive Breakpoints

| Name | Range | Notes |
|------|-------|-------|
| Mobile | 0–639px | Single column, 24px padding |
| Tablet | 640–1023px | Two columns where possible, 40px padding |
| Desktop | 1024–1279px | Full layout, 64px padding, 1200px max |
| Wide | 1280px+ | Same as desktop, content stays centered |

Mobile-first (`min-width` queries). Grid columns: 1 → 2 → 3. Display sizes scale down ~25% on mobile.

---

## Buttons

All buttons are **pill-shaped** (border-radius: 999px), **font-weight: 700**.

### Sizes
- LG: padding `14px 32px`, font `15px`
- MD: padding `12px 24px`, font `14px`
- SM: padding `10px 20px`, font `13px`

### Variants

**On dark bg:**
- Primary: bg `#C3FF00`, text `#15141A`
- Secondary outline (white): border `2px solid #FFFFFF`, text `#FFFFFF`
- Secondary outline (accent): border `2px solid #C3FF00`, text `#C3FF00`

**On light bg:**
- Primary dark: bg `#15141A`, text `#FFFFFF`
- Primary accent: bg `#C3FF00`, text `#15141A`
- Outline: border `2px solid #15141A`, text `#15141A`

### Hover
`translateY(-1px)` + box-shadow `0 4px 12px rgba(195,255,0,0.25)`

---

## Cards

### On Dark Background
- Fill: `#1E1D24`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: 5px
- Padding: 28px
- Hover: `translateY(-2px)`, shadow `0 8px 24px rgba(0,0,0,0.3)`, border brightens to `rgba(255,255,255,0.15)`

### On Light Background
- Fill: `#FFFFFF`
- Border: `1px solid rgba(0,0,0,0.08)`
- Shadow: `0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)`
- Radius: 5px
- Padding: 28px

### Icon Container
44×44px, radius 5px. Accent-tinted bg on dark (`rgba(195,255,0,0.1)`), primary fill on light.

---

## Forms

### Input Specs
- Padding: `12px 16px`
- Border: `1.5px solid`
- Border radius: 5px
- Font: 15px, Plus Jakarta Sans
- Label: 14px, weight 600, 6px gap below

### Border Colors
- Light bg idle: `#D1D5DB` · Dark bg idle: `rgba(255,255,255,0.15)`
- Focus (both): `#C3FF00` (accent)
- Error: border `#E53E3E`, bg `#FFF5F5`, message text `#E53E3E`

### Submit Buttons
Use standard button specs (pill, 700 weight). On light forms: dark primary button. On dark forms: accent button.

---

## Links

- Same color as headings (white on dark, `#15141A` on light)
- Weight: 500 (one step above body)
- Decoration: underline, offset 3px
- Hover: color → `#C3FF00` (accent) on both backgrounds

---

## Badges / Tags

All badges are **pill-shaped** (999px), **12px / 700 weight**, padding `5px 14px`, letter-spacing `0.02em`.

### Variants
1. **Accent filled**: bg `#C3FF00`, text `#15141A` — primary callout
2. **Accent ghost**: bg `rgba(195,255,0,0.12)`, text `#C3FF00` — dark bg subtle
3. **Outline**: border `1.5px solid rgba(255,255,255,0.15)` (dark) or `rgba(0,0,0,0.12)` (light) — categories/tags
4. **High-contrast filled**: bg `#FFFFFF` text `#15141A` (dark bg) or bg `#15141A` text `#FFFFFF` (light bg)
5. **Subtle fill**: bg `#F5F5F7`, text `#15141A` — light bg soft

Badges have **no hover state** (static labels).

---

## Hover & Focus States

### Transitions
- Micro-interactions (buttons, links): `0.15s ease`
- Cards / panels: `0.2s ease`
- Page-level transitions: `0.3s ease`

### Focus Ring
- Style: `2px solid #C3FF00`
- Offset: 3px on buttons, 2px on inputs
- Only on `:focus-visible` (keyboard navigation)

---

## Dividers

Weight is always **1px**.

| Context | Color |
|---------|-------|
| Dark default | `rgba(255,255,255,0.08)` |
| Dark subtle | `rgba(255,255,255,0.04)` |
| Dark accent | `rgba(195,255,0,0.2)` |
| Light default | `rgba(0,0,0,0.08)` |
| Light subtle | `rgba(0,0,0,0.04)` |

Spacing above/below: 16–24px depending on context.

---

## Section Patterns

- Sections alternate: **Dark → Light → Dark → Light**
- Dark bg: `#15141A` · Light bg: `#FFFFFF` or `#F5F5F7`
- Full-width backgrounds, content centered at 1200px max
- Each section: overline (optional) → heading → supporting copy → content (cards, grid, etc.)
- Accent color used for overlines, highlights, and primary CTAs throughout

---

## Shadows

| Token | Value |
|-------|-------|
| cardLight | `0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)` |
| cardHover | `0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)` |
| glow | `0 0 24px rgba(195,255,0,0.15)` |

---

## Reference Inspiration

The design system is modeled after [fatjoe.com](https://fatjoe.com/), adapted with our own tokens (corrected primary `#15141A`, accent `#C3FF00`, 5px border radius, review orange scoped to ratings only).
