# Dashboard Visual Language Spec

Last updated: February 14, 2026

## Goal

Produce screenshot-ready dashboard views for pitch deck slides with consistent hierarchy and strong readability in dark mode.

## Charts

- Chart panel surface: `--color-surface`.
- Chart border: `1px solid --color-border-subtle`.
- Primary metric line/bar: gradient axis from `#d1fc31` to `#6aeb99`.
- Secondary comparison series: `#40916C`.
- Grid lines: `rgba(135,149,141,0.20)`.
- Axis label color: `--color-text-muted`.
- Data label color: `--color-text-secondary`.

## Tables

- Header row background: `--color-surface-2`.
- Header text: `--color-text-primary`, `font-weight: 600`.
- Body row background: `--color-surface`.
- Alternating row stripe: overlay `rgba(255,255,255,0.01)`.
- Row hover: `--color-bg-2`.
- Numeric alignment: right-aligned currency and score columns.

## KPI Cards

- Card background: `--color-surface`.
- Title: `--color-text-muted`, 12-13px.
- Value: `--color-text-primary`, 28-36px, `font-heading`.
- Delta badges:
  - Positive: `bg-success/15`, `text-success`.
  - Neutral: `bg-info/15`, `text-info`.
  - Negative: `bg-error/15`, `text-error`.

## Screenshot framing rules

- Use presentation mode (`?present=1`) before capture.
- Capture desktop at 1512×982 for consistency.
- Keep one dominant insight per screenshot (avoid crowded mixed states).
- Remove temporary toasts/modals before capturing.
