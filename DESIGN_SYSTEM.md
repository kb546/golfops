# GolfOps Design System
**Updated:** February 15, 2026 - Week 1 Fixes Applied ✅

## 🎉 Recent Updates
- **Logo visibility fixed** - Now using `white` variant on dark backgrounds
- **Color naming clarified** - Added semantic aliases and deprecation warnings
- **WCAG AA compliance** - Removed text opacity, improved contrast
- **CTA consistency** - Fixed duplicate links, standardized button usage Documentation

**Logo-Driven 60-30-10 Design System**

---

## 🎨 Overview

This design system is built around your new Golf Ops logo, extracting colors directly from the SVG gradient and applying them using the professional 60-30-10 design rule.

### Color Philosophy

- **60% Neutral Foundation**: Whites, grays, and dark backgrounds (large surfaces)
- **30% Brand Identity**: Forest greens and logo-derived colors (navigation, headers, key elements)
- **10% Accent & Energy**: Lime-to-mint gradient (CTAs, highlights, hover states)

---

## 📦 Component Library

### Importing Components

```tsx
// Individual imports
import { Button } from "@/components/ui/button";
import { Card, FeatureCard } from "@/components/ui/card";
import { Badge, PulseBadge } from "@/components/ui/badge";
import { GradientText, GradientBox } from "@/components/ui/gradient";

// Or import everything
import { Button, Card, Badge, GradientText } from "@/components/ui";
```

---

## 🔘 Buttons

### Variants

```tsx
// Primary gradient button (10% accent - main CTAs)
<Button variant="primary" size="lg">
  Get Started Free
</Button>

// Secondary brand button (30% brand)
<Button variant="secondary">
  Learn More
</Button>

// Tertiary outline
<Button variant="tertiary">
  View Details
</Button>

// Ghost transparent
<Button variant="ghost">
  Cancel
</Button>

// Outline
<Button variant="outline">
  Contact Us
</Button>

// Status variants
<Button variant="danger">Delete</Button>
<Button variant="success">Confirm</Button>

// Link style
<Button variant="link">Read more</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">🔥</Button>
```

### Full Width

```tsx
<Button fullWidth variant="primary">
  Sign Up Now
</Button>
```

---

## 🃏 Cards

### Basic Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Tournament Registration</CardTitle>
    <CardDescription>Manage player sign-ups</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Register Now</Button>
  </CardFooter>
</Card>
```

### Card Variants

```tsx
// Default with shadow
<Card variant="default">Content</Card>

// Elevated with stronger shadow
<Card variant="elevated">Content</Card>

// Ghost transparent
<Card variant="ghost">Content</Card>

// Gradient border (10% accent)
<Card variant="gradientBorder">Content</Card>

// Hover glow effect
<Card variant="hoverGlow">Content</Card>
```

### Feature Card

Pre-styled card for features section:

```tsx
import { FeatureCard } from "@/components/ui/card";
import { Award } from "lucide-react";

<FeatureCard
  icon={<Award className="w-6 h-6" />}
  title="Smart Pairings"
  description="AI-powered foursomes by handicap & preference"
/>
```

### Stat Card

Perfect for dashboards:

```tsx
import { StatCard } from "@/components/ui/card";
import { Users } from "lucide-react";

<StatCard
  label="Total Players"
  value="486"
  trend="up"
  icon={<Users className="w-5 h-5" />}
/>
```

---

## 🏷️ Badges

### Variants

```tsx
// Gradient (10% accent - use for premium)
<Badge variant="gradient">Pro</Badge>

// Brand colors (30%)
<Badge variant="forest">Active</Badge>
<Badge variant="emerald">Featured</Badge>

// Accent colors (10%)
<Badge variant="lime">New</Badge>
<Badge variant="mint">Live</Badge>
<Badge variant="green">Available</Badge>

// Premium
<Badge variant="gold">Premium</Badge>

// Neutral (60%)
<Badge variant="default">Draft</Badge>
<Badge variant="outline">Standard</Badge>

// Status
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Cancelled</Badge>
<Badge variant="info">Info</Badge>
```

### Pulse Badge

Animated badge for live states:

```tsx
import { PulseBadge } from "@/components/ui/badge";

<PulseBadge variant="mint">
  Live Scoring
</PulseBadge>
```

### Count Badge

For notifications:

```tsx
import { CountBadge } from "@/components/ui/badge";

<CountBadge count={12} variant="gradient" />
<CountBadge count={150} max={99} /> // Shows "99+"
```

### Category Badge

For tags and categories:

```tsx
import { CategoryBadge } from "@/components/ui/badge";

<CategoryBadge color="lime">Golf</CategoryBadge>
<CategoryBadge color="mint">Tournament</CategoryBadge>
```

---

## 🌈 Gradients

### Gradient Text

Use sparingly for maximum impact (10% rule):

```tsx
import { GradientText } from "@/components/ui/gradient";

<h1>
  Run Smarter <GradientText>Golf Events</GradientText>
</h1>

// Subtle gradient
<GradientText variant="subtle">Premium Features</GradientText>
```

### Gradient Box

Apply gradients to any element:

```tsx
import { GradientBox } from "@/components/ui/gradient";

// Primary lime-to-mint gradient
<GradientBox variant="primary" className="p-8">
  <h2 className="text-forest-deep">Content</h2>
</GradientBox>

// Other variants
<GradientBox variant="subtle">Content</GradientBox>
<GradientBox variant="darkBrand">Content</GradientBox>
<GradientBox variant="accentGlow">Content</GradientBox>
```

### Gradient Border

Card or element with gradient border:

```tsx
import { GradientBorder } from "@/components/ui/gradient";

<GradientBorder variant="primary" rounded="lg" borderWidth={2}>
  <div className="p-6">
    <h3>Premium Content</h3>
    <p>Your content here</p>
  </div>
</GradientBorder>
```

### Gradient Overlay

For image overlays:

```tsx
import { GradientOverlay } from "@/components/ui/gradient";

<div className="relative">
  <img src="/hero.jpg" alt="Golf course" />
  <GradientOverlay direction="bottom" color="#FFFFFF" opacity={100} />
</div>
```

### Section Component

Pre-configured sections with alternating backgrounds (60% neutral):

```tsx
import { Section } from "@/components/ui/gradient";

<Section background="white" padding>
  Content in white
</Section>

<Section background="cloud">
  Content in cloud gray
</Section>

<Section background="mist">
  Content in mist
</Section>

<Section background="gradient">
  Content with soft gradient
</Section>

<Section background="dark">
  Content with dark background
</Section>
```

---

## 🎨 Logo Component

### Smart Logo

Automatically selects the correct variant:

```tsx
import { Logo } from "@/components/shared/logo";

// White logo for dark backgrounds
<Logo size="nav" variant="white" />

// Primary gradient logo for light backgrounds
<Logo size="footer" variant="primary" />

// Auto-switches based on background
<Logo size="nav" variant="auto" />
```

### Logo Mark

Icon-only version:

```tsx
import { LogoMark } from "@/components/shared/logo";

<LogoMark variant="white" size={48} />
<LogoMark variant="primary" size={64} />
```

### Logo Variants

- **Primary**: Gradient logo (`Logo_Type_1.svg`) - use on light backgrounds
- **White**: White logo (`Logo_Type_2.svg`) - use on dark backgrounds (navbar, footer)
- **Solid**: Single-color logo (`Logo_Type_3.svg`) - use for print/special cases

### Logo Behavior

- **Desktop**: Shows full logo with text
- **Mobile (<640px)**: Automatically shows logo mark (icon only) to save space
- **Responsive**: Adapts size based on container

---

## 🎨 Color System

### Using Tailwind Classes

```tsx
// 60% - Neutral Foundation
className="bg-white text-charcoal"
className="bg-cloud border-mist"
className="bg-mist text-slate"

// 30% - Brand Identity
className="bg-forest-deep text-white"
className="bg-forest hover:bg-forest-medium"
className="text-forest hover:text-emerald"

// 10% - Accent Colors
className="text-lime hover:text-lime-light"
className="text-mint-fresh"
className="text-green"

// Gradients
className="bg-gradient-primary"
className="bg-gradient-subtle"
className="bg-gradient-brand"
```

### Using CSS Variables

```css
.custom-element {
  /* Colors */
  background: var(--color-forest-deep);
  color: var(--color-lime);
  border-color: var(--color-mint-fresh);

  /* Gradients */
  background: var(--gradient-primary);

  /* Shadows */
  box-shadow: var(--shadow-glow-lime);

  /* Radius */
  border-radius: var(--radius-md);
}
```

### Color Reference

```css
/* 60% - Neutral */
--color-white: #FFFFFF
--color-cloud: #F9FAFB
--color-mist: #F3F4F6
--color-light: #E5E7EB
--color-gray: #9CA3AF
--color-slate: #4A5568
--color-charcoal: #1A1A1A
--color-black: #0A0A0A

/* 30% - Brand (from logo) */
--color-forest-deep: #0D2818
--color-forest: #1B4332
--color-forest-medium: #2D6A4F
--color-emerald: #40916C
--color-mint-fresh: #6aeb99  /* Logo gradient end */
--color-lime-burst: #d1fc31  /* Logo gradient start */
--color-green-accent: #a7f46e /* Logo highlight */

/* 10% - Accent */
--color-lime: #d1fc31
--color-mint: #6aeb99
--color-green: #a7f46e
--color-gold: #D4A843

/* Gradients */
--gradient-primary: linear-gradient(135deg, #d1fc31 0%, #6aeb99 100%)
--gradient-subtle: linear-gradient(135deg, #6aeb99 0%, #a7f46e 100%)
--gradient-dark-brand: linear-gradient(135deg, #0D2818 0%, #1B4332 100%)
```

---

## 📐 Applying 60-30-10 Rule

### Page Structure Template

```tsx
// Navigation (30% brand)
<nav className="bg-forest-deep">
  <Logo variant="white" />
</nav>

// Hero (60% neutral + 10% accent CTA)
<section className="bg-white section-padding">
  <h1>Headline with <GradientText>accent</GradientText></h1>
  <Button variant="primary">Primary CTA</Button> {/* 10% */}
</section>

// Features (60% neutral)
<section className="bg-cloud section-padding">
  <h2 className="text-forest">Features</h2>
  {/* Feature cards with hover glow (10% accent) */}
</section>

// Social Proof (60% neutral)
<section className="bg-white section-padding">
  {/* Content */}
</section>

// CTA Section (30% brand background)
<section className="bg-gradient-brand section-padding">
  <Button variant="primary">Take Action</Button> {/* 10% */}
</section>

// Footer (30% brand)
<footer className="bg-charcoal">
  <Logo variant="white" />
</footer>
```

### Component Distribution

```
60% Neutral Foundation:
├─ White backgrounds (#FFFFFF)
├─ Cloud sections (#F9FAFB)
├─ Mist sections (#F3F4F6)
└─ Charcoal/dark sections (#1A1A1A)

30% Brand Identity:
├─ Navigation (bg-forest-deep)
├─ Footer (bg-charcoal)
├─ Text content (text-forest, text-emerald)
└─ Section headers and key elements

10% Accent & Energy:
├─ Primary CTA buttons (gradient)
├─ Hover states (lime green glow)
├─ Badges and highlights
├─ Key headline words (gradient text)
└─ Premium features (gold accents)
```

---

## 🚀 Best Practices

### 1. Gradient Usage

**DO:**
- Use `bg-gradient-primary` for main CTA buttons
- Use `GradientText` for 1-2 key words in headlines
- Use gradient borders to highlight premium cards
- Apply hover glow effects on interactive elements

**DON'T:**
- Use gradients on every element
- Create gradient backgrounds for entire sections (except CTA section)
- Apply multiple gradients in one viewport

### 2. Logo Usage

**DO:**
- Use white logo (`variant="white"`) on dark backgrounds
- Use primary gradient logo on light backgrounds
- Use logo mark for mobile or compact spaces
- Maintain proper spacing around the logo

**DON'T:**
- Use gradient logo on dark backgrounds
- Stretch or distort the logo
- Use old logo.png file

### 3. Color Distribution

**DO:**
- Maintain 60-30-10 ratios on every page
- Use neutral backgrounds for main content
- Reserve gradient buttons for primary actions
- Apply brand colors to navigation and key elements

**DON'T:**
- Use accent colors as main backgrounds
- Create equal distribution of all colors
- Use more than one primary CTA per section

### 4. Accessibility

**DO:**
- Ensure text on lime gradient has dark text (`text-forest-deep`)
- Test all color combinations for WCAG AA compliance
- Provide adequate contrast ratios (4.5:1 minimum)
- Use semantic HTML

**DON'T:**
- Use light text on lime gradient
- Rely solely on color to convey information
- Create low-contrast combinations

---

## 📱 Responsive Behavior

### Logo
- **Desktop**: Full logo with text
- **Tablet**: Full logo (slightly smaller)
- **Mobile (<640px)**: Logo mark (icon only)

### Buttons
- **Desktop**: Standard padding (px-8 py-4)
- **Mobile**: Full width optional, smaller padding

### Cards
- **Desktop**: Grid layout (2-3 columns)
- **Tablet**: 2 columns
- **Mobile**: Single column

---

## 🎯 Quick Reference

### Import Everything

```tsx
import {
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  FeatureCard, StatCard,
  Badge, PulseBadge, CountBadge, CategoryBadge,
  GradientText, GradientBox, GradientBorder, Section
} from "@/components/ui";

import { Logo, LogoMark } from "@/components/shared/logo";
```

### Common Patterns

```tsx
// Feature card with gradient hover
<Card variant="hoverGlow" className="group">
  <div className="w-12 h-12 bg-gradient-primary rounded-[var(--radius-sm)] mb-4 group-hover:shadow-glow-lime">
    <Icon />
  </div>
  <h3>Feature Title</h3>
  <p>Description</p>
</Card>

// Section with gradient headline
<section className="bg-white section-padding">
  <h2 className="text-4xl font-bold text-charcoal">
    Your headline <GradientText>with accent</GradientText>
  </h2>
</section>

// Primary CTA with icon
<Button variant="primary" size="lg">
  Get Started
  <ArrowRight className="w-4 h-4" />
</Button>

// Status badge
<Badge variant="success">Active</Badge>
<PulseBadge variant="mint">Live</PulseBadge>
```

---

## 📚 Additional Resources

- **Design Tokens**: `/src/lib/design-tokens.ts`
- **Global Styles**: `/src/app/globals.css`
- **Component Library**: `/src/components/ui/`
- **Logo Assets**: `/public/Golf_Ops_Logo/`

---

## 🤝 Contributing

When adding new components:

1. Follow the 60-30-10 color distribution
2. Use logo-derived colors (lime, mint, green accent)
3. Apply gradient effects sparingly (10% rule)
4. Ensure accessibility (WCAG AA minimum)
5. Add TypeScript types
6. Export from `/src/components/ui/index.ts`

---

**Built with ❤️ for GolfOps**
