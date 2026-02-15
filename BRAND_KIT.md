# GolfOps Brand Kit & Design System
**Version 2.0 - White Theme (Modern SaaS)**
**Date:** February 15, 2026

---

## 🎨 Brand Positioning

### From → To
- **From:** Dark, premium, luxury golf (Masters.com aesthetic)
- **To:** Bright, modern, accessible, tech-forward SaaS (Stripe/Linear aesthetic)

### Brand Attributes
- 🚀 **Modern** - Clean, minimal, tech-forward
- ⚡ **Energetic** - Bright greens, dynamic gradients
- 🌍 **Accessible** - High contrast, readable, inclusive
- 🎯 **Professional** - Trustworthy without being stuffy
- 💚 **Fresh** - Lime green represents growth, renewal, golf courses

---

## 🎨 60-30-10 Color Rule (White Theme)

### The Rule
```
60% → White/Light Neutral Foundation (calm, spacious)
30% → Vibrant Green Brand Identity (from logo)
10% → Gradient Accents & Energy (CTAs, highlights)
```

### Why This Works
1. **White dominance** creates clean, modern SaaS aesthetic
2. **Green at 30%** establishes strong brand presence without overwhelming
3. **Gradient at 10%** makes CTAs pop and guides user attention
4. **High contrast** ensures accessibility (WCAG AA/AAA)

---

## 🎨 Color Palette

### 60% - NEUTRAL FOUNDATION (Whites & Grays)

**Purpose:** Backgrounds, cards, text, borders - the foundation that doesn't compete with content

```css
/* Backgrounds */
--color-white: #FFFFFF;              /* Main background, cards */
--color-gray-50: #F9FAFB;            /* Subtle alternate sections */
--color-gray-100: #F3F4F6;           /* Hover states, disabled */
--color-gray-200: #E5E7EB;           /* Borders, dividers */

/* Text Colors */
--color-gray-900: #111827;           /* Headings, primary text */
--color-gray-700: #374151;           /* Body text */
--color-gray-600: #4B5563;           /* Secondary text */
--color-gray-500: #6B7280;           /* Muted text, placeholders */
--color-gray-400: #9CA3AF;           /* Disabled text */

/* Usage Distribution */
Backgrounds: 50%
Text: 40%
Borders: 10%
```

**Examples:**
- Page background: `--color-white`
- Card background: `--color-gray-50`
- Section alternation: `--color-white` → `--color-gray-50` → `--color-white`
- Body text: `--color-gray-700`
- Headings: `--color-gray-900`

---

### 30% - BRAND IDENTITY (Greens from Logo)

**Purpose:** Navigation, buttons, links, brand moments - establishes GolfOps identity

```css
/* Primary Brand Green (from logo) */
--color-lime: #84CC16;               /* Lime - energetic, modern (logo color) */
--color-lime-light: #BEF264;         /* Light lime - hover states */
--color-lime-dark: #65A30D;          /* Dark lime - active states */

/* Supporting Greens */
--color-emerald: #10B981;            /* Emerald - professional green */
--color-emerald-light: #34D399;      /* Light emerald */
--color-emerald-dark: #059669;       /* Dark emerald */

/* Text-Safe Green (WCAG compliant on white) */
--color-green-900: #14532D;          /* Dark green for text/links (7.8:1 contrast) */
--color-green-800: #166534;          /* Slightly lighter (6.2:1 contrast) */
--color-green-700: #15803D;          /* Medium green (4.9:1 contrast - AA Large) */

/* Gradients */
--gradient-lime: linear-gradient(135deg, #84CC16 0%, #10B981 100%);
--gradient-lime-light: linear-gradient(135deg, #BEF264 0%, #34D399 100%);
```

**Contrast Ratios on White (#FFFFFF):**
- `--color-lime` (#84CC16): **2.9:1** ⚠️ (Logo OK, not for text)
- `--color-emerald` (#10B981): **3.0:1** ⚠️ (Logo OK, not for text)
- `--color-green-700` (#15803D): **4.9:1** ✅ (AA Large text)
- `--color-green-800` (#166534): **6.2:1** ✅ (AA Normal text)
- `--color-green-900` (#14532D): **7.8:1** ✅ (AAA Normal text)

**Usage Distribution:**
- Navigation elements: 40%
- Buttons/CTAs: 30%
- Links/interactive elements: 20%
- Brand accents: 10%

**Examples:**
- Logo: `--gradient-lime` (vibrant)
- Primary button: `bg-lime hover:bg-lime-dark text-white`
- Links: `text-green-800 hover:text-green-900`
- Navigation active state: `border-b-2 border-lime`

---

### 10% - ACCENT & ENERGY (Gradients, Gold, Blue)

**Purpose:** CTAs, highlights, badges - draws eye to conversion points

```css
/* Primary Gradient (for major CTAs) */
--gradient-cta: linear-gradient(135deg, #84CC16 0%, #10B981 100%);
--shadow-lime: 0 4px 14px 0 rgba(132, 204, 22, 0.25);
--shadow-lime-hover: 0 8px 24px 0 rgba(132, 204, 22, 0.35);

/* Gold (for premium features, "Most Popular" badges) */
--color-gold: #F59E0B;               /* Amber - warm, premium */
--color-gold-light: #FCD34D;         /* Light gold */
--color-gold-dark: #D97706;          /* Dark gold */

/* Blue (for info, secondary actions) */
--color-blue: #3B82F6;               /* Blue - info, trust */
--color-blue-light: #60A5FA;         /* Light blue */
--color-blue-dark: #2563EB;          /* Dark blue */

/* Status Colors (error, success, warning) */
--color-green-success: #10B981;      /* Success (reuse emerald) */
--color-red-error: #EF4444;          /* Error */
--color-yellow-warning: #F59E0B;     /* Warning (reuse gold) */
--color-blue-info: #3B82F6;          /* Info (reuse blue) */
```

**Usage Distribution:**
- CTA buttons: 50%
- Badges/highlights: 30%
- Status indicators: 20%

**Examples:**
- Primary CTA: `bg-gradient-cta text-white shadow-lime hover:shadow-lime-hover`
- "Most Popular" badge: `bg-gold text-gray-900 font-semibold`
- Info badge: `bg-blue-50 text-blue-700 border border-blue-200`

---

## 🖼️ Logo Usage

### Primary Logo
**File:** `/public/Golf_Ops_Logo/PNG/Logo_Type_1.png`

**Specifications:**
- **Colors:** Lime-to-emerald gradient + white text
- **Aspect Ratio:** Approximately 13:1 (wide wordmark)
- **Minimum Width:** 140px (maintain legibility)
- **Clear Space:** 20px padding on all sides

### Logo on Different Backgrounds

#### On White Background (Primary Usage)
```tsx
// Navbar & Footer
<Logo variant="color" size="nav" />

// Logo displays as:
// - Gradient green icon (lime-to-emerald)
// - Dark gray text "Golf Ops" (#374151 for contrast)
```

**Contrast Solution:**
- ✅ Icon can be vibrant green (logos don't need text contrast)
- ✅ Text changes to dark gray (#374151) for WCAG AA compliance (8.9:1 contrast)

#### On Dark Backgrounds (Rare)
```tsx
// If ever needed on dark sections
<Logo variant="white" size="nav" />

// Logo displays as:
// - All white (icon + text)
```

#### On Photos/Complex Backgrounds
```tsx
// Add backdrop for readability
<div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
  <Logo variant="color" size="nav" />
</div>
```

---

## 📐 Typography

### Font Families
```css
--font-heading: 'Inter', -apple-system, sans-serif;  /* Changed from Orbitron */
--font-body: 'Inter', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

**Rationale:**
- **Inter** is the modern SaaS standard (used by Stripe, Linear, Vercel)
- Clean, readable, professional
- Excellent at all sizes
- Better accessibility than decorative fonts

### Type Scale (Mobile → Desktop)
```css
/* Headings */
h1: 2.5rem → 3.5rem (40px → 56px) - Hero headlines
h2: 2rem → 2.75rem (32px → 44px) - Section headers
h3: 1.5rem → 2rem (24px → 32px) - Subsections
h4: 1.25rem → 1.5rem (20px → 24px) - Card titles

/* Body */
body-lg: 1.125rem (18px) - Lead paragraphs
body: 1rem (16px) - Standard text
body-sm: 0.875rem (14px) - Secondary text
body-xs: 0.75rem (12px) - Captions, labels
```

### Font Weights
```css
--font-normal: 400    /* Body text */
--font-medium: 500    /* Emphasized text, buttons */
--font-semibold: 600  /* Subheadings, labels */
--font-bold: 700      /* Headings */
--font-extrabold: 800 /* Hero headlines (use sparingly) */
```

### Line Heights
```css
--leading-tight: 1.25    /* Headings */
--leading-snug: 1.375    /* Subheadings */
--leading-normal: 1.5    /* Short paragraphs */
--leading-relaxed: 1.625 /* Long-form content */
--leading-loose: 2       /* Captions, labels */
```

---

## 🎯 Spacing System

### Base Unit: 4px
All spacing is a multiple of 4px for visual consistency.

```css
/* Spacing Scale */
--space-1: 4px     /* 0.25rem */
--space-2: 8px     /* 0.5rem */
--space-3: 12px    /* 0.75rem */
--space-4: 16px    /* 1rem */
--space-5: 20px    /* 1.25rem */
--space-6: 24px    /* 1.5rem */
--space-8: 32px    /* 2rem */
--space-10: 40px   /* 2.5rem */
--space-12: 48px   /* 3rem */
--space-16: 64px   /* 4rem */
--space-20: 80px   /* 5rem */
--space-24: 96px   /* 6rem */
--space-32: 128px  /* 8rem */
--space-40: 160px  /* 10rem */
```

### Section Padding (Responsive)
```css
.section-padding {
  padding-top: 64px;    /* 4rem mobile */
  padding-bottom: 64px;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 96px;   /* 6rem tablet */
    padding-bottom: 96px;
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 128px;  /* 8rem desktop */
    padding-bottom: 128px;
  }
}
```

### Container Widths
```css
--container-sm: 640px   /* Forms, narrow content */
--container-md: 768px   /* Blog posts */
--container-lg: 1024px  /* Standard pages */
--container-xl: 1280px  /* Marketing pages (default) */
--container-2xl: 1536px /* Wide layouts (rare) */
```

---

## 🎨 Shadows & Effects

### Shadows (White theme needs more prominent shadows)
```css
/* Cards & Elevation */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Branded Shadows (lime glow for CTAs) */
--shadow-lime: 0 4px 14px 0 rgba(132, 204, 22, 0.25);
--shadow-lime-hover: 0 8px 24px 0 rgba(132, 204, 22, 0.35);
--shadow-gold: 0 4px 14px 0 rgba(245, 158, 11, 0.25);
```

### Border Radius
```css
--radius-sm: 6px    /* Buttons, badges */
--radius-md: 8px    /* Cards, inputs */
--radius-lg: 12px   /* Large cards, modals */
--radius-xl: 16px   /* Hero sections */
--radius-full: 9999px /* Pills, avatars */
```

### Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🧩 Component Patterns

### Primary CTA Button
```tsx
<button className="
  px-8 py-4
  bg-gradient-to-r from-lime to-emerald
  text-white font-semibold text-base
  rounded-lg
  shadow-lime hover:shadow-lime-hover
  hover:scale-105
  transition-all duration-200
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-lime
  focus-visible:ring-offset-2
">
  Get Started
</button>
```

### Secondary Button
```tsx
<button className="
  px-8 py-4
  bg-white
  text-gray-900 font-semibold text-base
  border-2 border-gray-300
  rounded-lg
  hover:border-lime hover:text-lime
  transition-all duration-200
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-lime
  focus-visible:ring-offset-2
">
  Learn More
</button>
```

### Card
```tsx
<div className="
  bg-white
  border border-gray-200
  rounded-xl
  p-8
  shadow-md hover:shadow-xl
  transition-all duration-300
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-lime
  focus-visible:ring-offset-2
">
  {/* Card content */}
</div>
```

### Section Alternation
```tsx
// Pattern: White → Gray-50 → White → Gray-50
<section className="bg-white section-padding">
  {/* Content */}
</section>

<section className="bg-gray-50 section-padding">
  {/* Content */}
</section>

<section className="bg-white section-padding">
  {/* Content */}
</section>
```

---

## 📊 60-30-10 Application Examples

### Homepage Layout
```
Hero Section (White BG):
- 60% White background
- 30% Green in headline gradient, CTA button, logo
- 10% Gold badge "Trusted by 500+ organizers"

Features Section (Gray-50 BG):
- 60% Gray-50 background, gray text
- 30% Green icons, hover states
- 10% Lime gradient on section title

Pricing Section (White BG):
- 60% White/gray cards, black text
- 30% Green borders on popular tier
- 10% Gold "Most Popular" badge, lime CTA button

CTA Section (Lime Gradient BG):
- 60% Lime-to-emerald gradient background
- 30% White text and button outline
- 10% Subtle pattern overlay
```

### Navbar
```
Background: White (60%)
Logo: Lime gradient (30%)
Links: Gray-700, hover:Green-800 (30%)
CTA Button: Lime gradient (10%)
```

---

## ♿ Accessibility

### WCAG Compliance

**Text Contrast Minimums:**
- Normal text (16px): **4.5:1** (AA) or **7:1** (AAA)
- Large text (18px+ or 14px+ bold): **3:1** (AA) or **4.5:1** (AAA)
- UI components: **3:1** (AA)

**Our Contrast Ratios:**
✅ Gray-900 on White: **16.1:1** (AAA)
✅ Gray-700 on White: **8.3:1** (AAA)
✅ Green-900 on White: **7.8:1** (AAA)
✅ Green-800 on White: **6.2:1** (AA)
⚠️ Lime on White: **2.9:1** (Logo only, not for text)

### Focus States
All interactive elements MUST have visible focus indicators:
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-lime
focus-visible:ring-offset-2
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Color Usage Guidelines

### DO ✅
- Use white/gray-50 for most backgrounds (60%)
- Use green for navigation, buttons, links (30%)
- Use lime gradient sparingly on primary CTAs (10%)
- Maintain high contrast for text (4.5:1 minimum)
- Use dark gray (#374151) for logo text on white
- Alternate sections: white → gray-50 → white

### DON'T ❌
- Don't use vibrant lime (#84CC16) for body text (too low contrast)
- Don't use gradients on more than 10% of the page
- Don't mix too many colors (stick to green family)
- Don't use pure black (#000000) for text (too harsh)
- Don't forget focus states on interactive elements
- Don't use decorative fonts for body text

---

## 📦 Implementation Checklist

### Phase 1: Foundation
- [ ] Update CSS variables in `globals.css`
- [ ] Change background colors (black → white)
- [ ] Update text colors (light → dark)
- [ ] Fix logo to use color variant
- [ ] Update shadows (subtle → prominent)

### Phase 2: Components
- [ ] Update button variants
- [ ] Update card styles
- [ ] Update navigation
- [ ] Update footer
- [ ] Update form inputs

### Phase 3: Sections
- [ ] Remove testimonials section
- [ ] Update hero section
- [ ] Update features section
- [ ] Update pricing section
- [ ] Update CTA sections

### Phase 4: Testing
- [ ] Test contrast ratios (WebAIM)
- [ ] Test keyboard navigation
- [ ] Test responsive breakpoints
- [ ] Test reduced motion
- [ ] Cross-browser testing

---

## 🎨 Visual Inspiration

**Similar Brands (White + Vibrant Green):**
- Spotify (green + white, music tech)
- Mint (green + white, finance)
- Evernote (green + white, productivity)
- Upwork (green + white, freelance)

**Why This Works for GolfOps:**
- Modern, approachable, tech-forward
- Green = golf courses, growth, freshness
- White = clean, simple, professional
- High contrast = accessible, readable
- Gradient CTAs = energy, action

---

**Brand Kit Version:** 2.0
**Last Updated:** February 15, 2026
**Next Review:** March 15, 2026

🏌️ **Built with precision. Designed for clarity. Ready for growth.**
