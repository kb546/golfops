# Visual Baseline Package

This folder stores baseline screenshots for critical routes.

## Capture command

1. Install playwright tooling (once):
   - `npm install -D playwright`
   - `npx playwright install chromium`
2. Capture screenshots:
   - If dev server is already running on `127.0.0.1:3000`: `npm run visual:snapshots`
   - If not running: `npm run visual:snapshots:serve`

## Current critical routes

- `home.png` -> `/`
- `features.png` -> `/features`
- `pricing.png` -> `/pricing`
- `about.png` -> `/about`
- `contact.png` -> `/contact`
- `dashboard-overview.png` -> `/dashboard`
