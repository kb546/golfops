# GolfOps - Full Strategic Build Plan

## Executive Summary

GolfOps is a modern, AI-powered golf tournament and event management platform — a direct competitor to Kismet Golf, Golf Genius, and Event Caddy. GolfOps differentiates through **intelligent player pairings**, **global payment provider integrations** (MTN MoMo, M-Pesa, Stripe, PayStack, Flutterwave), and a **developer-first architecture** built for international scale.

**Tagline:** *"Run smarter golf events. Anywhere in the world."*

---

## 1. Competitive Analysis & Positioning

### Kismet Golf (Primary Competitor)
- **Pricing:** $299/event (Basic), $599/event (Pro), Custom (Enterprise) + $4/player
- **Strengths:** Clean UI, AI email drafts, live scoring, good charity focus
- **Weaknesses:** US-only payments (Stripe only), limited pairing intelligence, no international payment support, limited customization, no API/developer tools
- **Founded by:** D1 golfer + Apple engineer (strong founder story)

### Other Competitors
| Competitor | Strength | Weakness |
|---|---|---|
| Golf Genius | Market leader, deep features | Complex UI, expensive, legacy feel |
| Event Caddy | Registration focused | Limited scoring, no AI |
| DoJiggy | Fundraising tools | Not golf-specific enough |
| Tournascore | Scoring focused | Weak registration/payments |

### GolfOps Positioning
> **"The global golf event platform — smarter pairings, flexible payments, beautiful events."**

**Key Differentiators:**
1. **Smart Pairings Engine** — AI-powered player matching by handicap, preferences, and relationships
2. **Global Payment Flex** — Stripe, MTN MoMo, M-Pesa, PayStack, Flutterwave, bank transfers
3. **International-First** — Multi-currency, multi-language ready from day one
4. **Modern Developer Architecture** — API-first, webhook-ready, embeddable widgets
5. **Superior Design** — Apple-level polish on every pixel

---

## 2. Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 15 (App Router)** | Framework — SSR, SSG, ISR for SEO + performance |
| **TypeScript** | Type safety across the entire codebase |
| **Tailwind CSS v4** | Utility-first styling with design system tokens |
| **Framer Motion** | Smooth animations and page transitions |
| **shadcn/ui** | Accessible, customizable component library |
| **Radix UI** | Headless primitives for complex components |
| **Lucide Icons** | Consistent iconography |
| **React Hook Form + Zod** | Form handling with schema validation |

### Backend
| Technology | Purpose |
|---|---|
| **Next.js API Routes + Server Actions** | API layer with server-side logic |
| **Supabase (PostgreSQL)** | Database, Auth, Realtime subscriptions, Storage |
| **Prisma ORM** | Type-safe database queries and migrations |
| **Resend** | Transactional email delivery |
| **OpenAI / Claude API** | AI-powered features (email drafts, pairing suggestions) |
| **Upstash Redis** | Rate limiting, caching, session management |

### Payments
| Provider | Region |
|---|---|
| **Stripe** | US, EU, UK, AU, CA |
| **PayStack** | Nigeria, Ghana, South Africa, Kenya |
| **Flutterwave** | Pan-Africa (30+ countries) |
| **MTN MoMo API** | Uganda, Rwanda, Ghana, Cameroon, Ivory Coast |
| **M-Pesa (Daraja API)** | Kenya, Tanzania, Mozambique |
| **Payment Abstraction Layer** | Unified interface for all providers |

### Infrastructure
| Technology | Purpose |
|---|---|
| **Vercel** | Hosting, edge functions, preview deployments |
| **Supabase Cloud** | Managed PostgreSQL + Auth + Realtime |
| **Cloudflare R2** | Image/asset storage (S3-compatible) |
| **Vercel Analytics** | Performance monitoring |
| **PostHog** | Product analytics + session replays |
| **Sentry** | Error tracking |

### Dev Tooling
| Tool | Purpose |
|---|---|
| **pnpm** | Package manager |
| **ESLint + Prettier** | Code quality |
| **Husky + lint-staged** | Pre-commit hooks |
| **Vitest** | Unit testing |
| **Playwright** | E2E testing |
| **GitHub Actions** | CI/CD pipelines |

---

## 3. Site Architecture & Pages

### 3.1 Marketing Site (Public)

```
/                           → Homepage (hero, features, social proof, CTA)
/features                   → Full feature breakdown
/pricing                    → Pricing tiers + calculator
/about                      → Our story, team, mission
/charity-tournaments        → Charity-focused landing page
/corporate-events           → Corporate-focused landing page
/clubs-associations         → Golf clubs & associations landing page
/blog                       → Blog index (SEO content hub)
/blog/[slug]                → Individual blog posts
/contact                    → Contact form + booking
/demo                       → Book a demo (Cal.com embed)
/privacy                    → Privacy policy
/terms                      → Terms of service
/changelog                  → Product updates
```

### 3.2 App (Authenticated)

```
/login                      → Sign in
/register                   → Sign up
/dashboard                  → Event overview dashboard
/dashboard/events           → All events list
/dashboard/events/new       → Create new event
/dashboard/events/[id]      → Event detail & management
/dashboard/events/[id]/registration  → Registration settings
/dashboard/events/[id]/pairings     → Smart pairings manager
/dashboard/events/[id]/scoring      → Live scoring setup
/dashboard/events/[id]/sponsors     → Sponsor management
/dashboard/events/[id]/communication → Email & messaging
/dashboard/events/[id]/website      → Event website builder
/dashboard/events/[id]/payments     → Payment tracking
/dashboard/events/[id]/reports      → Analytics & exports
/dashboard/settings         → Account settings
/dashboard/billing          → Subscription & billing
```

### 3.3 Public Event Pages (Generated per event)

```
/e/[event-slug]             → Public event website
/e/[event-slug]/register    → Registration form
/e/[event-slug]/leaderboard → Live leaderboard
/e/[event-slug]/sponsors    → Sponsor showcase
/e/[event-slug]/schedule    → Event schedule
```

---

## 4. Page-by-Page Design & Copy Plan

---

### 4.1 HOMEPAGE ( / )

**Goal:** Convert visitors into signups or demo bookings.

#### Section 1: Hero
```
Layout: Full-width, split — copy left, product mockup right
Background: Clean white with subtle golf-green gradient accent

Headline: "Run Smarter Golf Events. Anywhere in the World."
Subheadline: "The all-in-one platform for registration, pairings,
              live scoring, payments, and communication — powered by AI."

CTA Primary: "Get Started Free" → /register
CTA Secondary: "Book a Demo" → /demo

Trust bar: "Trusted by tournament organizers across 4 continents"
```

#### Section 2: Pain Point → Solution
```
Layout: 3-column grid with icons

"Still using spreadsheets?"     → "Smart dashboards replace chaos"
"Chasing payments manually?"    → "Collect payments in any currency, any method"
"Pairing players by hand?"      → "AI builds your foursomes in seconds"
```

#### Section 3: Feature Showcase (6 cards)
```
Layout: 2x3 grid, each card with icon + title + 1-line description + screenshot

1. Event Websites        — "Beautiful, branded event pages in minutes"
2. Smart Pairings        — "AI-powered foursomes by handicap & preference"
3. Live Scoring          — "Real-time leaderboards on any device"
4. Global Payments       — "Stripe, M-Pesa, MoMo, PayStack — one dashboard"
5. Sponsor Management    — "Tiered packages with automatic logo placement"
6. AI Communication      — "Draft emails, send reminders, automate follow-ups"
```

#### Section 4: Social Proof
```
Layout: Testimonial carousel on dark background

Stats bar:
- "500+ Events Managed"
- "10+ Hours Saved Per Event"
- "4 Continents"
- "99.9% Uptime"
```

#### Section 5: How It Works
```
Layout: Horizontal timeline / stepper

Step 1: "Create Your Event" — Set up in under 5 minutes with AI assistance
Step 2: "Customize & Share" — Brand your page, set pricing, open registration
Step 3: "Manage Everything" — Pairings, payments, sponsors — one dashboard
Step 4: "Go Live"           — Real-time scoring, leaderboards, instant results
```

#### Section 6: Use Cases
```
Layout: 3 cards linking to vertical landing pages

- Charity Tournaments → /charity-tournaments
- Corporate Golf Days → /corporate-events
- Clubs & Associations → /clubs-associations
```

#### Section 7: Blog Preview
```
Layout: 3 latest blog post cards
```

#### Section 8: Final CTA
```
Layout: Full-width dark section

Headline: "Your next golf event deserves better tools."
Subheadline: "Join hundreds of organizers who ditched spreadsheets for GolfOps."
CTA: "Get Started Free"
```

#### Section 9: Footer
```
Columns:
- Product: Features, Pricing, Changelog, Status
- Solutions: Charity, Corporate, Clubs
- Resources: Blog, Help Center, Contact, API Docs
- Company: About, Careers, Privacy, Terms
- Social: Twitter/X, LinkedIn, Instagram

Bottom: © 2026 GolfOps. All rights reserved.
```

---

### 4.2 FEATURES PAGE ( /features )

**Goal:** Deep-dive into every capability. Convince feature-shoppers.

```
Hero:
  Headline: "Everything You Need. Nothing You Don't."
  Subheadline: "From registration to results — one platform, zero spreadsheets."

Feature Categories (accordion or tabbed sections):

1. REGISTRATION & PAYMENTS
   - Registration Packages (tiered pricing, early bird, group)
   - Global Payment Processing (Stripe, MoMo, M-Pesa, PayStack)
   - Add-Ons (mulligans, raffle tickets, dinner guests)
   - Discount & Promo Codes
   - Offline Payment Tracking (checks, cash, bank transfers)
   - Fee Passthrough (let registrants cover processing fees)
   - Multi-Currency Support
   - Custom Registration Forms

2. SMART PAIRINGS ★ (Differentiator)
   - AI-Powered Pairing Engine
   - Handicap-Based Matching
   - Preference-Based Grouping (play with friends, avoid conflicts)
   - Drag-and-Drop Manual Override
   - Shotgun & Tee Time Assignment
   - Flight & Division Management
   - Export to Print / PDF

3. LIVE SCORING & LEADERBOARDS
   - Mobile Score Entry (any smartphone)
   - Real-Time Leaderboards
   - TV / Projector Display Mode
   - Multiple Formats (scramble, best ball, shamble, stroke, stableford)
   - Net & Gross Scoring
   - Handicap Generation
   - Flights & Divisions
   - Hole-by-Hole Tracking

4. SPONSORS & FUNDRAISING
   - Tiered Sponsor Packages
   - Automatic Logo Placement
   - One-Off & Recurring Donations
   - Fundraising Progress Tracker
   - Lead Manager (prospect CRM)
   - Tax Receipt Generation
   - Sponsor ROI Reports

5. EVENT WEBSITES
   - 6+ Beautiful Templates
   - Custom Domain Support
   - Brand Customization (colors, fonts, logos)
   - High-Quality Image Library
   - Mobile-Optimized Pages
   - SEO-Optimized
   - Embedded Registration

6. COMMUNICATION
   - AI Email Drafts (powered by Claude/GPT)
   - Automated Confirmation & Reminder Emails
   - Bulk Messaging by Segment
   - SMS Notifications (select regions)
   - QR Code Check-In
   - Post-Event Surveys
   - Email Templates Library

7. ANALYTICS & REPORTING
   - Real-Time Dashboard
   - Registration Analytics
   - Revenue & Payment Reports
   - Scoring Statistics
   - Sponsor Engagement Metrics
   - Exportable Data (CSV, PDF)
   - Post-Event Recaps

Each feature section: Icon + Title + 2-line description + optional screenshot/mockup
```

---

### 4.3 PRICING PAGE ( /pricing )

**Goal:** Clear, transparent pricing that converts.

```
Hero:
  Headline: "Simple Pricing. Powerful Events."
  Subheadline: "Start free, scale as you grow. No hidden fees."

Tiers:

┌─────────────────┬──────────────────┬──────────────────┬──────────────────┐
│   STARTER       │   PRO            │   PREMIUM        │   ENTERPRISE     │
│   Free          │   $249/event     │   $499/event     │   Custom         │
│                 │                  │                  │                  │
│ 1 event         │ Unlimited events │ Unlimited events │ Unlimited events │
│ Up to 24 players│ Up to 144 players│ Unlimited players│ Unlimited players│
│ Event website   │ All Starter +    │ All Pro +        │ All Premium +    │
│ Registration    │ Smart Pairings   │ Live Scoring     │ White Label      │
│ Basic payments  │ AI Communication │ TV Leaderboards  │ API Access       │
│ Email support   │ Sponsor Mgmt     │ Custom Domain    │ Dedicated CSM    │
│                 │ Add-ons & Promos │ Advanced Reports │ Custom Payments  │
│                 │ Priority support │ SMS Notifications│ SLA Guarantee    │
│                 │                  │ Phone support    │ On-boarding      │
│                 │                  │                  │                  │
│ [Get Started]   │ [Get Started]    │ [Get Started]    │ [Contact Sales]  │
└─────────────────┴──────────────────┴──────────────────┴──────────────────┘

Per-player fee: $3/player (organizer can pass to registrant)
Payment processing: Standard provider rates apply

FAQ Section:
- "What payment methods do you support?"
- "Can I try GolfOps for free?"
- "What happens after my event?"
- "Do you offer nonprofit discounts?"
- "Can I use my own payment provider?"
- "How does the per-player fee work?"
```

---

### 4.4 ABOUT PAGE ( /about )

```
Hero:
  Headline: "Built by People Who Run Golf Events"
  Subheadline: "We've been in the weeds — juggling spreadsheets, chasing
                payments, and pairing foursomes at midnight. GolfOps exists
                so you never have to."

Sections:
1. Our Story — Origin narrative (keep authentic, relatable)
2. Our Mission — "Make golf events effortless for organizers worldwide"
3. Our Values:
   - Organizer-First: Every feature solves a real problem
   - Global by Design: Built for every market, not just one
   - Beautifully Simple: Powerful doesn't mean complicated
   - Community Driven: We build what organizers actually need
4. Team Section — Photos + roles + short bios (placeholder for now)
5. Stats Bar — Events managed, countries, money raised, hours saved
6. CTA — "Join us" / "Get Started"
```

---

### 4.5 CHARITY TOURNAMENTS PAGE ( /charity-tournaments )

```
Hero:
  Headline: "Raise More. Stress Less. Focus on Your Cause."
  Subheadline: "The all-in-one platform for charity golf events — registration,
                donations, sponsors, and scoring in one beautiful dashboard."
  CTA: "Start Your Charity Event" / "Book a Demo"

Pain Points Section:
  "Sound familiar?"
  - Tracking donations in spreadsheets
  - Chasing sponsor payments for weeks
  - No visibility into total raised until the event is over
  - Sending thank-you emails one by one
  - Juggling 5+ tools for one event

Solution Section:
  "With GolfOps, you get:"
  - Built-in donation collection (during registration & standalone)
  - Tiered sponsor packages with auto-checkout
  - Real-time fundraising dashboard
  - AI-drafted thank-you & receipt emails
  - Everything in one place — finally

Differentiator:
  "Accept donations via card, bank transfer, M-Pesa, or mobile money —
   reach donors wherever they are."

Social Proof: Testimonials from charity organizers
Stats: "Over $X raised through GolfOps-powered events"

CTA: "Get Started Free" / "See Pricing"
```

---

### 4.6 CORPORATE EVENTS PAGE ( /corporate-events )

```
Hero:
  Headline: "Professional Golf Events Without the Operational Headache"
  Subheadline: "From branded event pages to instant leaderboards —
                impress clients and partners, not spreadsheets."
  CTA: "Plan Your Corporate Event" / "Book a Demo"

Pain Points:
  - Finalized pairings at midnight before the event
  - Sponsors buried in a PDF attachment
  - Manual score tallying at the 19th hole
  - Registration data scattered across tools
  - No professional event presence

Solution Features:
  - Custom-branded event websites
  - Professional sponsor showcase
  - Smart pairings by client relationship / handicap
  - Live leaderboards on TV screens
  - Automated communication with corporate polish
  - Clean post-event reporting

Comparison Table:
  "Old Way" vs "The GolfOps Way"

CTA: "Get Started" / "Contact Sales"
```

---

### 4.7 CLUBS & ASSOCIATIONS PAGE ( /clubs-associations )

```
Hero:
  Headline: "Your Club's Tournament Season, Simplified"
  Subheadline: "Run weekly competitions, member events, and inter-club
                tournaments — all from one platform."

Features Highlighted:
  - Multi-event management
  - Member database & handicap tracking
  - Recurring event templates
  - Season-long leaderboards
  - Club branding on every page
  - Bulk communication tools

CTA: "Get Started" / "Book a Demo"
```

---

### 4.8 BLOG ( /blog )

**Goal:** SEO content hub driving organic traffic.

```
Categories:
  - Tournament Planning
  - Fundraising Tips
  - Golf Event Ideas
  - Product Updates
  - Industry News

Initial Blog Posts (SEO-targeted):
  1. "How to Plan a Charity Golf Tournament: The Complete 2026 Guide"
  2. "Best Golf Tournament Software: A Comprehensive Comparison"
  3. "10 Ways to Increase Fundraising at Your Next Golf Event"
  4. "Corporate Golf Day Planning: Impress Clients, Not Spreadsheets"
  5. "Golf Tournament Pairings: Why Smart Matching Makes Better Events"
  6. "Accepting Mobile Money at Golf Events: A Guide for African Tournaments"
  7. "Live Scoring vs Paper Scorecards: Why It's Time to Go Digital"
  8. "How to Set Up Golf Tournament Sponsorship Packages That Sell"
  9. "The Ultimate Golf Event Communication Timeline"
  10. "Scramble vs Best Ball vs Shamble: Golf Tournament Formats Explained"

Each post: 1500-2500 words, SEO-optimized, internal links to features/pricing
```

---

## 5. SEO Strategy

### Target Keywords

**Primary (High Intent):**
- golf tournament management software
- golf event management platform
- golf tournament registration software
- online golf tournament registration
- golf tournament scoring software
- charity golf tournament software
- corporate golf event software

**Secondary (Long Tail):**
- how to organize a golf tournament
- golf tournament pairing software
- live golf scoring app
- golf event website builder
- golf tournament sponsor management
- golf tournament payment processing
- mobile money golf tournament payments
- African golf tournament software

**Location-Based:**
- golf tournament software [country]
- golf event management [city]

### Technical SEO
- Server-side rendering (Next.js SSR/SSG) for all marketing pages
- Structured data (SoftwareApplication schema, FAQ schema, Organization schema)
- Dynamic sitemap generation
- Open Graph + Twitter Card meta tags on every page
- Image optimization with next/image + WebP/AVIF
- Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Canonical URLs
- robots.txt + proper crawl directives
- Internal linking strategy between blog posts and feature pages

### Content Strategy
- 2 blog posts per week (first 3 months)
- 1 blog post per week (ongoing)
- Feature comparison pages vs competitors
- Case studies from early customers
- Video tutorials and walkthroughs
- Guest posts on golf industry sites

---

## 6. Design System

### Brand Identity

**Name:** GolfOps
**Tagline:** "Run Smarter Golf Events"

**Color Palette:**
```
Primary:
  --forest:       #1B4332    (Deep forest green — primary brand)
  --forest-light: #2D6A4F    (Lighter green — hover states)
  --emerald:      #40916C    (Accent green — buttons, highlights)

Neutral:
  --black:        #0A0A0A    (Text primary)
  --charcoal:     #1A1A1A    (Headings, dark sections)
  --slate:        #4A5568    (Body text)
  --gray:         #9CA3AF    (Secondary text)
  --light:        #F3F4F6    (Backgrounds)
  --white:        #FFFFFF    (Cards, content areas)

Accent:
  --gold:         #D4A843    (Premium, highlights)
  --gold-light:   #F0D78C    (Subtle gold accents)

Status:
  --success:      #10B981
  --warning:      #F59E0B
  --error:        #EF4444
  --info:         #3B82F6
```

**Typography:**
```
Headings: "Plus Jakarta Sans" (weights: 500, 600, 700, 800)
  - Modern, geometric, premium feel
  - Similar to what Apple & Stripe use

Body: "Inter" (weights: 400, 500, 600)
  - Excellent readability at all sizes
  - Industry standard for web apps

Mono: "JetBrains Mono" (code blocks, data)
```

**Spacing Scale:**
```
Based on 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
```

**Border Radius:**
```
--radius-sm: 6px    (buttons, inputs)
--radius-md: 12px   (cards)
--radius-lg: 16px   (modals, sections)
--radius-xl: 24px   (hero elements)
```

**Shadows:**
```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px rgba(0,0,0,0.07)
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
--shadow-xl: 0 20px 25px rgba(0,0,0,0.12)
```

### Design Principles
1. **Whitespace is premium** — Generous spacing, no cramming
2. **Cards over tables** — Information in digestible card layouts
3. **Motion with purpose** — Subtle animations that guide attention
4. **Dark sections for emphasis** — Hero and CTA sections use dark backgrounds
5. **Photography-driven** — Large, high-quality golf imagery
6. **Consistent iconography** — Lucide icons throughout
7. **Mobile-first** — Every component designed for mobile first

---

## 7. Dashboard Mockup Structure

### 7.1 Main Dashboard ( /dashboard )

```
┌──────────────────────────────────────────────────────────────┐
│  ┌─────────┐                                    [+ New Event]│
│  │ GolfOps │   Dashboard                         [Profile ▾] │
│  └─────────┘                                                 │
├──────────┬───────────────────────────────────────────────────┤
│          │                                                   │
│ SIDEBAR  │   Welcome back, [Name]                           │
│          │                                                   │
│ Dashboard│   ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ Events   │   │ 12       │ │ $24,500  │ │ 486      │        │
│ Contacts │   │ Events   │ │ Revenue  │ │ Players  │        │
│ Settings │   └──────────┘ └──────────┘ └──────────┘        │
│ Billing  │                                                   │
│          │   Upcoming Events                                 │
│          │   ┌─────────────────────────────────────┐        │
│          │   │ 🏌️ Spring Classic      Mar 15, 2026 │        │
│          │   │    72 registered  |  $8,400 raised  │        │
│          │   │    [Manage] [View Site]              │        │
│          │   ├─────────────────────────────────────┤        │
│          │   │ 🏌️ Charity Open        Apr 22, 2026 │        │
│          │   │    45 registered  |  $12,300 raised │        │
│          │   │    [Manage] [View Site]              │        │
│          │   └─────────────────────────────────────┘        │
│          │                                                   │
│          │   Recent Activity                                 │
│          │   • John Smith registered for Spring Classic      │
│          │   • Payment received: $150 from Jane Doe         │
│          │   • Sponsor "Titleist" package purchased          │
│          │                                                   │
└──────────┴───────────────────────────────────────────────────┘
```

### 7.2 Event Management ( /dashboard/events/[id] )

```
┌──────────────────────────────────────────────────────────────┐
│  GolfOps   ← Back to Events    Spring Classic 2026          │
├──────────┬───────────────────────────────────────────────────┤
│          │                                                   │
│ EVENT    │   ┌────────────────────────────────────────┐     │
│ NAV      │   │  Event Overview                        │     │
│          │   │                                        │     │
│ Overview │   │  ┌────────┐ ┌────────┐ ┌────────┐    │     │
│ Registr. │   │  │72/144  │ │$10,800 │ │18/36   │    │     │
│ Pairings │   │  │Players │ │Revenue │ │Groups  │    │     │
│ Scoring  │   │  └────────┘ └────────┘ └────────┘    │     │
│ Sponsors │   │                                        │     │
│ Comms    │   │  Registration Progress                 │     │
│ Website  │   │  ██████████████░░░░░░░  72/144 (50%)  │     │
│ Payments │   │                                        │     │
│ Reports  │   │  Revenue Breakdown                     │     │
│          │   │  ┌─ Chart: Registrations over time ─┐  │     │
│          │   │  │         📈                        │  │     │
│          │   │  └──────────────────────────────────┘  │     │
│          │   │                                        │     │
│          │   └────────────────────────────────────────┘     │
│          │                                                   │
└──────────┴───────────────────────────────────────────────────┘
```

### 7.3 Smart Pairings ( /dashboard/events/[id]/pairings )

```
┌──────────────────────────────────────────────────────────────┐
│  Smart Pairings — Spring Classic    [AI Auto-Pair] [Export]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Pairing Method:  ○ AI Smart Match  ○ Manual  ○ Random      │
│                                                              │
│  ┌─ Unpaired Players (12) ──────────────────────────────┐   │
│  │ [John S. (HCP 8)] [Jane D. (HCP 14)] [Mike R. (22)] │   │
│  │ [Sarah L. (HCP 5)] [Tom B. (HCP 18)] [...]          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─ Group 1 — Hole 1, 8:00 AM ─┐  ┌─ Group 2 — Hole 2 ─┐ │
│  │ 👤 John Smith      HCP 8     │  │ 👤 Sarah Lee   HCP 5│ │
│  │ 👤 Mike Ross       HCP 10    │  │ 👤 Tom Baker  HCP 7 │ │
│  │ 👤 David Chen      HCP 12    │  │ 👤 Amy Park   HCP 9 │ │
│  │ 👤 [Drop player here]       │  │ 👤 Lisa Wu    HCP 11│ │
│  │ Avg HCP: 10.0               │  │ Avg HCP: 8.0       │ │
│  └──────────────────────────────┘  └─────────────────────┘ │
│                                                              │
│  ┌─ Group 3 — Hole 3, 8:00 AM ─┐  ┌─ Group 4 — Hole 4 ─┐ │
│  │ 👤 [Drop player]            │  │ 👤 [Drop player]    │ │
│  │ 👤 [Drop player]            │  │ 👤 [Drop player]    │ │
│  │ 👤 [Drop player]            │  │ 👤 [Drop player]    │ │
│  │ 👤 [Drop player]            │  │ 👤 [Drop player]    │ │
│  └──────────────────────────────┘  └─────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 7.4 Live Scoring Dashboard

```
┌──────────────────────────────────────────────────────────────┐
│  Live Leaderboard — Spring Classic 2026        [TV Mode 📺]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Format: Scramble  |  Status: LIVE  |  Thru: Hole 12       │
│                                                              │
│  ┌───┬────────────────────┬──────┬──────┬───────┐          │
│  │ # │ Team               │ Thru │ Score│ Today │          │
│  ├───┼────────────────────┼──────┼──────┼───────┤          │
│  │ 1 │ Team Smith         │ 12   │ -8   │  🔴   │          │
│  │ 2 │ Team Johnson       │ 11   │ -6   │  🟢   │          │
│  │ 3 │ Team Williams      │ 12   │ -5   │  ⚪   │          │
│  │ 4 │ Team Brown         │ 10   │ -4   │  🟢   │          │
│  │ 5 │ Team Davis         │ 12   │ -3   │  🔴   │          │
│  └───┴────────────────────┴──────┴──────┴───────┘          │
│                                                              │
│  Hole-by-Hole: Team Smith                                    │
│  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18     │
│  🟢 🟢 ⚪ 🟢 🔴 🟢 ⚪ 🟢 🟢 🟢 ⚪ 🟢 ·  ·  ·  ·  ·  ·    │
│  3  3  4  2  5  3  4  2  3  4  4  3                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 8. Project Structure

```
golfops/
├── public/
│   ├── images/
│   │   ├── hero/              # Hero section images
│   │   ├── features/          # Feature screenshots
│   │   ├── testimonials/      # Testimonial avatars
│   │   └── logos/             # Placeholder logos
│   ├── fonts/                 # Self-hosted fonts
│   ├── favicon.ico
│   ├── og-image.png
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── (marketing)/       # Marketing pages group
│   │   │   ├── layout.tsx     # Marketing layout (nav + footer)
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── features/
│   │   │   │   └── page.tsx
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── charity-tournaments/
│   │   │   │   └── page.tsx
│   │   │   ├── corporate-events/
│   │   │   │   └── page.tsx
│   │   │   ├── clubs-associations/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── demo/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx
│   │   │   ├── terms/
│   │   │   │   └── page.tsx
│   │   │   └── changelog/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (auth)/            # Auth pages group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/       # Dashboard pages group
│   │   │   ├── layout.tsx     # Dashboard layout (sidebar + header)
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx   # Main dashboard
│   │   │   │   ├── events/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── new/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       ├── page.tsx
│   │   │   │   │       ├── registration/
│   │   │   │   │       ├── pairings/
│   │   │   │   │       ├── scoring/
│   │   │   │   │       ├── sponsors/
│   │   │   │   │       ├── communication/
│   │   │   │   │       ├── website/
│   │   │   │   │       ├── payments/
│   │   │   │   │       └── reports/
│   │   │   │   ├── settings/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── billing/
│   │   │   │       └── page.tsx
│   │   │   └── ...
│   │   │
│   │   ├── e/                 # Public event pages
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       ├── register/
│   │   │       ├── leaderboard/
│   │   │       ├── sponsors/
│   │   │       └── schedule/
│   │   │
│   │   ├── api/               # API routes
│   │   │   ├── auth/
│   │   │   ├── events/
│   │   │   ├── payments/
│   │   │   │   ├── stripe/
│   │   │   │   ├── paystack/
│   │   │   │   ├── flutterwave/
│   │   │   │   ├── momo/
│   │   │   │   └── mpesa/
│   │   │   ├── scoring/
│   │   │   ├── pairings/
│   │   │   └── webhooks/
│   │   │
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles + Tailwind
│   │   └── not-found.tsx      # 404 page
│   │
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── marketing/         # Marketing page components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── testimonial-carousel.tsx
│   │   │   ├── pricing-table.tsx
│   │   │   ├── faq-accordion.tsx
│   │   │   ├── cta-section.tsx
│   │   │   ├── stats-bar.tsx
│   │   │   └── blog-card.tsx
│   │   ├── dashboard/         # Dashboard components
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   ├── event-card.tsx
│   │   │   ├── stats-widget.tsx
│   │   │   ├── pairing-board.tsx
│   │   │   ├── leaderboard.tsx
│   │   │   ├── score-entry.tsx
│   │   │   └── payment-table.tsx
│   │   ├── event/             # Public event page components
│   │   └── shared/            # Shared components
│   │       ├── logo.tsx
│   │       ├── theme-toggle.tsx
│   │       └── loading.tsx
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts      # Browser client
│   │   │   ├── server.ts      # Server client
│   │   │   └── middleware.ts   # Auth middleware
│   │   ├── payments/
│   │   │   ├── stripe.ts
│   │   │   ├── paystack.ts
│   │   │   ├── flutterwave.ts
│   │   │   ├── momo.ts
│   │   │   ├── mpesa.ts
│   │   │   └── provider.ts    # Payment abstraction layer
│   │   ├── ai/
│   │   │   ├── email-drafts.ts
│   │   │   └── pairings.ts
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── validations.ts
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-event.ts
│   │   ├── use-scoring.ts
│   │   └── use-realtime.ts
│   │
│   ├── types/                 # TypeScript types
│   │   ├── event.ts
│   │   ├── player.ts
│   │   ├── scoring.ts
│   │   ├── payment.ts
│   │   └── sponsor.ts
│   │
│   └── styles/
│       └── globals.css
│
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/
│
├── supabase/
│   ├── config.toml
│   └── migrations/
│
├── .env.local                 # Environment variables (git-ignored)
├── .env.example               # Example env vars
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 9. Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations
  id, name, slug, logo_url, website, plan, created_at

-- Users
users
  id, email, full_name, avatar_url, org_id, role, created_at

-- Events
events
  id, org_id, name, slug, description, date, end_date,
  course_name, course_address, format (scramble/bestball/stroke/etc),
  max_players, registration_open, status, website_template,
  custom_domain, settings (jsonb), created_at

-- Registration Packages
packages
  id, event_id, name, description, price, currency, max_quantity,
  includes (jsonb), sort_order, active

-- Players / Registrations
registrations
  id, event_id, package_id, player_name, email, phone,
  handicap, payment_status, payment_provider, payment_id,
  custom_answers (jsonb), checked_in, created_at

-- Pairings / Groups
groups
  id, event_id, name, starting_hole, tee_time, sort_order

group_players
  id, group_id, registration_id, position

-- Scoring
scores
  id, event_id, group_id, registration_id, hole_number,
  strokes, relative_to_par, created_at, updated_at

-- Sponsors
sponsors
  id, event_id, name, logo_url, tier, amount, payment_status,
  website_url, contact_email, created_at

-- Payments
payments
  id, event_id, registration_id, amount, currency, provider,
  provider_payment_id, status, metadata (jsonb), created_at

-- Communication
emails
  id, event_id, subject, body, recipients (jsonb),
  status, sent_at, created_at

-- Donations
donations
  id, event_id, donor_name, donor_email, amount, currency,
  payment_provider, payment_id, message, created_at
```

---

## 10. Development Phases

### Phase 1: Foundation (Weeks 1-3)
- [ ] Project setup (Next.js, Tailwind, TypeScript, pnpm)
- [ ] Design system implementation (colors, typography, components)
- [ ] shadcn/ui setup + custom component library
- [ ] Supabase project setup + database schema
- [ ] Authentication (email/password, Google, magic link)
- [ ] Marketing site layout (navbar, footer)
- [ ] Homepage — all sections
- [ ] Basic responsive design

### Phase 2: Marketing Pages (Weeks 3-5)
- [ ] Features page
- [ ] Pricing page
- [ ] About page
- [ ] Charity tournaments landing page
- [ ] Corporate events landing page
- [ ] Clubs & associations landing page
- [ ] Contact page
- [ ] Blog infrastructure (MDX or CMS)
- [ ] SEO setup (meta tags, structured data, sitemap)
- [ ] Privacy & Terms pages

### Phase 3: Dashboard Core (Weeks 5-8)
- [ ] Dashboard layout (sidebar, header, responsive)
- [ ] Event creation wizard
- [ ] Event overview dashboard
- [ ] Registration management
- [ ] Package & add-on configuration
- [ ] Player management & list views
- [ ] Basic event website generation

### Phase 4: Payments (Weeks 8-10)
- [ ] Stripe integration
- [ ] Payment abstraction layer
- [ ] PayStack integration
- [ ] Flutterwave integration
- [ ] Payment tracking dashboard
- [ ] Refund handling
- [ ] Revenue reports

### Phase 5: Smart Pairings (Weeks 10-12)
- [ ] Drag-and-drop pairing interface
- [ ] AI pairing algorithm (handicap matching)
- [ ] Preference-based grouping
- [ ] Tee time / shotgun start assignment
- [ ] Flight & division management
- [ ] Pairing export (PDF, print)

### Phase 6: Live Scoring (Weeks 12-14)
- [ ] Mobile score entry interface
- [ ] Real-time leaderboard (Supabase Realtime)
- [ ] TV display mode
- [ ] Multiple scoring formats
- [ ] Net/gross calculations
- [ ] Hole-by-hole tracking

### Phase 7: Communication & AI (Weeks 14-16)
- [ ] Email template system
- [ ] AI email draft generation
- [ ] Automated email workflows
- [ ] Bulk messaging
- [ ] QR code check-in
- [ ] Post-event surveys

### Phase 8: Sponsors & Fundraising (Weeks 16-17)
- [ ] Sponsor package management
- [ ] Sponsor showcase on event pages
- [ ] Donation collection
- [ ] Fundraising dashboard
- [ ] Lead manager
- [ ] Tax receipt generation

### Phase 9: Mobile Money Integration (Weeks 17-19)
- [ ] MTN MoMo API integration
- [ ] M-Pesa Daraja API integration
- [ ] Mobile money payment flows
- [ ] Multi-currency support
- [ ] Regional payment method detection

### Phase 10: Polish & Launch (Weeks 19-22)
- [ ] Performance optimization
- [ ] E2E testing with Playwright
- [ ] Security audit
- [ ] Analytics setup (PostHog)
- [ ] Error tracking (Sentry)
- [ ] Documentation
- [ ] Blog content (10 launch posts)
- [ ] Launch marketing materials
- [ ] Beta testing with real events

---

## 11. Copy & Messaging Guide

### Brand Voice
- **Confident but not arrogant** — We know what we've built is great
- **Clear and direct** — No jargon, no fluff
- **Warm and professional** — Approachable premium brand
- **Global perspective** — Inclusive of international markets

### Key Messages
1. "Run smarter golf events. Anywhere in the world."
2. "One platform. Every tool you need."
3. "Smarter pairings. Flexible payments. Beautiful events."
4. "From spreadsheet chaos to seamless events."
5. "10+ hours saved per event."

### Words We Use
- Platform, not tool
- Smart, not basic
- Seamless, not easy
- Global, not international
- Organizers, not users

### Words We Avoid
- Simple (implies basic)
- Cheap (implies low quality)
- Disrupt (overused)
- Synergy (corporate speak)

---

## 12. Marketing & Launch Strategy

### Pre-Launch (Month 1-2)
1. Landing page with email capture ("Coming Soon")
2. Social media presence (Instagram, LinkedIn, Twitter/X)
3. Golf tournament organizer communities outreach
4. SEO blog content publishing begins
5. Beta program signup

### Launch (Month 3)
1. Product Hunt launch
2. Golf industry press outreach
3. Partnership with 5 charity tournaments for case studies
4. Introductory pricing (50% off first event)
5. Referral program

### Growth (Month 4+)
1. Content marketing engine (2 posts/week)
2. Google Ads on high-intent keywords
3. Golf industry conference presence
4. Integration partnerships
5. African market expansion campaign
6. Community building (Discord/Slack for organizers)

---

## 13. Success Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Events created | 50 | 200 | 1,000 |
| Monthly active organizers | 20 | 100 | 500 |
| Revenue | $5K | $25K | $100K |
| Blog organic traffic | 5K visits | 25K visits | 100K visits |
| Conversion rate | 2% | 3% | 5% |

---

*This plan is a living document. Each phase should be reviewed and adjusted based on user feedback and market response.*
