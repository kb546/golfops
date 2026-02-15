# GolfOps UI Redesign Taskboard

## P0 (Critical)
- [x] Deterministic nav/footer logo rendering with fallback chain (SVG -> PNG -> text)
- [x] Remove B2C/free-first CTA language from marketing flow
- [x] Establish dark-default design foundation tokens
- [x] Apply dark-safe button/card primitives
- [x] Final visual QA sweep on all marketing routes for contrast edge cases

## P1 (High Value)
- [x] Core shell polish: navbar, hero, footer
- [x] Shared marketing section polish: feature showcase, pain points, how-it-works, use-cases, blog-preview
- [x] Conversion CTA consistency: primary = Book a Demo, secondary = Talk to Sales / See Pricing
- [x] Normalize all route-specific pages (`about`, `features`, `pricing`, `contact`, `legal`) to final dark visual grammar
- [x] Add visual regression snapshots for critical routes

## P2 (System Maturity)
- [x] Build semantic color docs with allowed combinations (AA contrast matrix)
- [x] Create a reusable marketing section component library (headline block, feature grid, testimonial block)
- [x] Add chart/table visual language spec for dashboard screenshots
- [x] Add "presentation mode" tweaks for marketing pages (not only dashboard)
- [x] Prepare final screenshot package mapped to pitch deck slide order

## Current Risks
- Dark token remap can create isolated edge-case contrast issues in less-traveled routes.
- Some static content pages may still feel transitional until page-level polishing is complete.
