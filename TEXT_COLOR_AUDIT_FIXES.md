# Text Color Audit & Fixes

## Executive Summary
Found critical accessibility issues where dark text appears on dark backgrounds throughout the site, making content invisible or extremely hard to read.

## Root Cause
The hybrid theme uses **two color systems** (dark and light), but many components are incorrectly using dark text colors on dark backgrounds.

### Color System Reference
**Dark Backgrounds** (nav, footer, some sections):
- `--color-bg-0`: #070B09 (darkest)
- `--color-bg-1`: #0D1411 (dark)
- `--color-bg-2`: #121B17 (dark card)

**Dark Text** (for WHITE backgrounds):
- `--color-text-primary`: #111827
- `--color-text-secondary`: #4B5563
- `text-charcoal`: #111827 (legacy)
- `text-slate`: #4B5563 (legacy)
- `text-forest-deep`: #0D2818

**Light Text** (for DARK backgrounds):
- `--color-text-light`: #EAF2EE
- `--color-text-light-secondary`: #B4C2BA
- `--color-text-light-muted`: #87958D

## Issues Found & Fixes

### 1. Button Outline Variant ⚠️ CRITICAL
**File:** `src/components/ui/button.tsx` line 38
**Problem:** Dark background with dark text
```tsx
// WRONG:
outline: "bg-[var(--color-bg-1)] text-[var(--color-text-primary)]"
```
**Fix:** Make outline button work on dark sections with light border/text
```tsx
outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
```

### 2. Button Primary Variant ⚠️ REVIEW NEEDED
**File:** `src/components/ui/button.tsx` line 22
**Problem:** Very dark green text on lime gradient may be hard to read
```tsx
// CURRENT:
primary: "text-forest-deep"  // #0D2818 dark green
```
**Fix:** Use white text for better contrast on gradient
```tsx
primary: "text-white"
```

### 3. Hero Dashboard Preview Stats ⚠️ CRITICAL
**File:** `src/components/marketing/hero.tsx` line 143-145
**Problem:** Dark background with dark text in stat cards
```tsx
// WRONG:
bg-[var(--color-bg-2)] with text-[var(--color-text-primary)]
```
**Fix:** Use white background for cards on the hero section
```tsx
bg-white/95 with text-[var(--color-text-primary)]
```

### 4. Contact Form Inputs ⚠️ CRITICAL
**File:** `src/app/(marketing)/contact/contact-content.tsx` lines 98, 109, 121, 131, 142
**Problem:** Dark background with dark text in form inputs
```tsx
// WRONG:
bg-[var(--color-bg-2)] text-[var(--color-text-primary)]
```
**Fix:** Use light backgrounds for inputs on dark sections
```tsx
bg-white/10 text-white placeholder:text-white/60
```

### 5. About Page - All Sections ⚠️ CRITICAL
**File:** `src/app/(marketing)/about/about-content.tsx`
**Problem:** Dark backgrounds using legacy dark text colors

**Lines 42, 53, 57:** Hero section
```tsx
// WRONG:
bg-[var(--color-bg-1)] with text-charcoal and text-slate
```
**Fix:**
```tsx
text-charcoal → text-[var(--color-text-light)]
text-slate → text-[var(--color-text-light-secondary)]
```

**Lines 68, 77, 80:** Story section
- Same fix as above

**Need to audit remaining sections (Values, Stats, Team) for same issue**

### 6. Features Page ⚠️ CHECK NEEDED
**File:** `src/app/(marketing)/features/features-content.tsx` line 196
**Problem:** Alternating dark backgrounds - need to verify text colors

### 7. Pricing Page ⚠️ CHECK NEEDED
**File:** `src/app/(marketing)/pricing/pricing-content.tsx`
**Problem:** Dark backgrounds - need to verify text colors

### 8. Card Component Ghost Variant ⚠️ POTENTIAL ISSUE
**File:** `src/components/ui/card.tsx` line 22
**Problem:** Hover state uses dark background
```tsx
ghost: "hover:bg-[var(--color-bg-2)]"
```
**Fix:** Need to ensure parent has appropriate text colors or remove this variant

## Implementation Priority

### Phase 1: Critical Fixes (Immediate)
1. ✅ Button outline variant
2. ✅ Button primary variant text color
3. ✅ Hero dashboard preview stats
4. ✅ Contact form inputs
5. ✅ About page all text colors

### Phase 2: Verification (Next)
6. Features page text audit
7. Pricing page text audit
8. Charity/Corporate/Clubs content pages
9. Any other dark background sections

### Phase 3: Component Library (Cleanup)
10. Remove or fix card ghost variant
11. Document proper color usage patterns
12. Add developer guidelines for dark vs light sections

## Testing Checklist
After fixes:
- [ ] All buttons visible on both light and dark backgrounds
- [ ] All form inputs readable
- [ ] All headlines visible on their backgrounds
- [ ] All body text has proper contrast
- [ ] Hover states maintain visibility
- [ ] Focus states visible on all backgrounds

## Prevention Strategy
1. Update BRAND_KIT.md with clear rules:
   - **Dark sections** MUST use `text-[var(--color-text-light)]` variants
   - **Light sections** MUST use `text-[var(--color-text-primary)]` variants
   - NEVER mix dark bg with dark text or light bg with light text

2. Create component examples showing correct usage
3. Consider creating wrapper components that automatically apply correct text colors
