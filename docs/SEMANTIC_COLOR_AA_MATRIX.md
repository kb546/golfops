# GolfOps Semantic Color AA Matrix

Last updated: February 14, 2026

## Approved text/surface combinations (AA+)

| Surface Token | Text Token | Intended Use | Contrast Status |
|---|---|---|---|
| `--color-bg-0` (`#070B09`) | `--color-text-primary` (`#EAF2EE`) | Primary page background + body text | AA/AAA |
| `--color-bg-1` (`#0D1411`) | `--color-text-primary` (`#EAF2EE`) | Section backgrounds + headings | AA/AAA |
| `--color-bg-2` (`#121B17`) | `--color-text-secondary` (`#B4C2BA`) | Secondary paragraphs | AA |
| `--color-surface` (`#18231E`) | `--color-text-primary` (`#EAF2EE`) | Cards, modals, dropdowns | AA/AAA |
| `--color-surface-2` (`#203029`) | `--color-text-secondary` (`#B4C2BA`) | Elevated states, selected cards | AA |
| Gradient primary (`#d1fc31 -> #6aeb99`) | `--color-forest-deep` (`#0D2818`) | Primary CTA labels | AA |

## Accent usage rules

- `--color-lime` and gradient greens are accent colors; do not use them for long body copy.
- On dark surfaces, prefer `text-lime` only for short labels, badges, and links.
- Avoid `text-white/70` utility styles on green gradients; use `--color-text-primary` or `--color-forest-deep` instead.

## Border and divider pairings

| Background | Border Token | Usage |
|---|---|---|
| `--color-bg-0`, `--color-bg-1` | `--color-border-subtle` | Cards, nav/footers, section separators |
| `--color-surface` | `--color-border-subtle` with `hover:border-lime/30` | Interactive cards |

## Components that must not deviate

- Navbar and footer logos: explicit variant selection only (`primary` or `white`), never auto-tone detection.
- Primary CTA: `bg-gradient-primary` + `text-forest-deep`.
- Form controls: `bg-[var(--color-bg-2)]`, `border-[var(--color-border-subtle)]`, `text-[var(--color-text-primary)]`.
