# BIDIEX — MASTER BUILD PROMPT
## Premium Software Studio Website

---

## MISSION

Build the official website for **Bidiex**, an independent digital product studio.

This is **not a landing page**. This is the professional online presence of a boutique software studio — a website that inspires confidence in customers, payment gateways, and future clients.

The bar is: **Linear, Vercel, Raycast, Framer, Stripe**.

When someone visits, they should immediately understand:

- Bidiex is a legitimate software business
- There are identifiable, real products
- There is a real founder
- There are clear contact methods
- The company has a professional, credible online presence

---

## STACK & CONSTRAINTS

```
HTML5 + CSS3 + Vanilla JavaScript
No frameworks. No build tools. No npm. No external libraries.
Exception: Google Fonts (Inter only).
```

**File structure:**
```
index.html
styles.css
script.js
404.html
robots.txt
sitemap.xml
manifest.json
site.webmanifest
browserconfig.xml
```

Must work perfectly when hosted on **GitHub Pages**.  
Code must be clean, semantic, and maintainable.

---

## DESIGN DECISION FILTER

Before generating every section, think as a **Senior Product Designer**.

Ask yourself:
- Would this exist on the homepage of Linear?
- Would this exist on Raycast or Vercel?
- Would this be featured on Awwwards, Land-book, or Godly?

If the answer is "no" — redesign it until it reaches that level.

Rules:
- Never generate generic, stock-looking layouts
- Never use repetitive card grids as the default composition
- Vary hierarchy, asymmetry, and spacing intentionally
- Prioritize visual rhythm over filling space
- Every section should feel **designed**, not assembled

---

## VISUAL IDENTITY

### Aesthetic

```
Ultra-premium · Minimal · Dark Luxury · Editorial · Modern
Calm · Precise · Expensive · Future-ready
```

The website should feel like it belongs alongside Apple, Linear, Raycast, and Vercel.  
Everything should communicate **precision over decoration**.  
Never crowded. Never noisy. Never colorful.

---

### Color System

```css
/* Backgrounds */
--bg-base:        #050608;
--bg-secondary:   #0B0D12;
--bg-card:        #111318;

/* Borders */
--border:         rgba(255, 255, 255, 0.08);
--border-hover:   rgba(255, 255, 255, 0.18);

/* Text */
--text-primary:   #FFFFFF;
--text-secondary: #A1A1AA;
--text-muted:     #71717A;

/* Accents */
--accent:         #4F6BFF;   /* Electric Blue */
--accent-alt:     #6C63FF;   /* Violet */

/* Gradients — use sparingly */
```

Use color to create hierarchy, not decoration.  
Accents appear only where they have intentional meaning.

---

### Typography

```
Font: Inter (only)
Imported from Google Fonts — weights 300, 400, 500, 600, 700, 800
```

```
Hero title:       72px / 700
Section titles:   48px / 700
Card titles:      26px / 600
Body large:       20px / 400
Body:             18px / 400
Small:            15px / 400
Captions:         13px / 500
Buttons:          15px / 600
```

- Letter spacing: very subtle
- Line heights: spacious, generous
- Typography hierarchy must be immediately readable
- All sizes use `clamp()` for fluid responsiveness

---

### Spacing & Layout

```
Content max-width:  1280px
Container:          1200px
Section spacing:    120px – 180px
Card padding:       24px – 32px
Base unit:          8px system
Grid:               12 columns
```

Whitespace is a design element. Use it generously.

---

### Background

The background is **never flat**. Layer the following:

- Very dark radial gradients
- Soft blue ambient glow
- Very subtle purple glow
- Micro noise texture
- Blurred light halos at extremely low opacity

None of these elements should compete with content.  
They exist to give the page depth and atmosphere.

---

### Cards

```css
border-radius: 22px;
border: 1px solid var(--border);
background: var(--bg-card);
```

Cards feel like **softly illuminated dark glass**.

Hover state:
- Slight elevation (translateY)
- Border highlights to `--border-hover`
- Soft outer glow
- Transition: 300ms ease

Never hard shadows. Only soft ambient light.

---

### Buttons

**Primary:**  
White background · Dark text · Pill shape · 600 weight

**Secondary:**  
Dark background · Thin border · White text

**Hover on both:**  
Soft glow · Slight elevation · Smooth transition

Buttons include a subtle **ripple effect** on click.

---

### Navbar

- Floating, centered capsule — detached from the page
- Transparent with `backdrop-filter: blur()`
- `1px solid var(--border)`
- Becomes more opaque on scroll
- CTA button on the right
- Smooth appearance animation on load

---

### Section Labels

Every section begins with a small floating capsule tag:

```
[ Projects ]   [ About ]   [ Studio ]   [ Founder ]
```

- Very small text (13px, weight 500)
- Rounded pill shape
- Dark background with thin border
- Positioned above the section title

---

### Animations

Animations must feel **calm and premium**.

Allowed motion:
- `opacity` transitions
- `translateY` reveals
- `blur` entrance effects
- `scale` on cards
- Soft glow transitions
- Border color transitions
- Gradient movement (very slow)
- Mouse parallax on hero
- Scroll-triggered reveals via `IntersectionObserver`

Never fast. Never bouncy. Never decorative without purpose.

---

## GLOBAL FEATURES

- Sticky navbar with blur on scroll
- Smooth scroll behavior
- Animated underline on nav links
- Active section indicator in navbar
- Scroll progress bar
- Loading animation on first paint
- Back to top button
- Mouse parallax on hero background
- Scroll reveal on all sections (fade + translateY)
- Micro-interactions on all interactive elements
- Floating animated blobs in hero (CSS only, no SVG files)

---

## SECTIONS

---

### 1 · HERO

**Layout:** Full viewport, centered content.

- Small badge above the title (e.g., `✦ Independent Software Studio`)
- Massive headline — bold statement about what Bidiex does
- Subtitle: ~650px max-width, secondary color
- Two centered CTA buttons: **View Projects** and **Contact**
- Abstract animated illustration on the right — built entirely with **CSS shapes** (no downloaded SVGs)
- Large background glow behind the headline
- Hero elements have a floating animation (slow, subtle)
- Mouse parallax applied to background layers

**Example headline direction:**
```
Building Digital Products
That Help Businesses Grow.
```

---

### 2 · CAPABILITY STRIP

Small section. No heading needed — the content speaks for itself.

Display core disciplines as **premium minimal cards or an inline strip**:

```
Software Development · Branding · Automation
Digital Products · Artificial Intelligence
```

This section should feel like a confidence signal, not a features list.  
Consider an asymmetric layout or a horizontally scrolling strip.

---

### 3 · ABOUT BIDIEX

**Copy:**

> Bidiex is an independent digital product studio focused on creating software, automation solutions, digital experiences and scalable tools for entrepreneurs and businesses.

Keep copy elegant. Not salesy. Honest.

Consider a **two-column layout** — text on one side, a visual element (abstract, CSS-based) on the other.  
Or a large editorial text block with accent details.

This section communicates **who we are**, not what we sell.

---

### 4 · PROJECTS

Four projects. Each card should resemble a **premium SaaS product page in miniature**.

Cards are NOT uniform grid items. Vary composition where possible — consider a **featured large card** for TraeGo alongside smaller cards for the others.

**Card anatomy:**
- Status badge (colored by status)
- Project name (large, confident)
- Short description
- Technology tags
- CTA button

**Projects:**

| Project | Description | Status |
|---|---|---|
| **TraeGo** | Digital platform focused on business process optimization. | Active |
| **CarCopilot** | Vehicle expense management platform. | Development |
| **Invio** | Digital invitation platform. | Planning |
| **SelloGo** | Digital loyalty platform for local businesses. | Research |

**Status badge colors:**
- Active → green-ish accent
- Development → blue accent
- Planning → violet
- Research → muted

---

### 5 · SERVICES

NOT a uniform 3×2 card grid by default.  
Consider an **asymmetric layout** — featured service large on the left, others stacked or arranged with rhythm on the right.

**Services:**
- Software Development
- Landing Pages
- Web Applications
- Automation
- Brand Identity
- UI/UX Design
- Technical Consulting

Each service has a simple line icon (CSS or inline SVG — no external files).

---

### 6 · FOUNDER

This section feels **personal, not corporate**.

**Layout:**
- Premium circular avatar placeholder with a glowing ring
- Name: **Andrés Anillo**
- Role pills: `Software Developer` · `Designer` · `Digital Product Builder`
- Short biography in first person — passion for building useful software
- Skills displayed as minimal pills:
  ```
  Frontend · Backend · UI Design · Branding · Product Strategy · AI Automation
  ```
- Social links (placeholder URLs):
  - GitHub · LinkedIn · Instagram · Email

Consider a dark card layout or a split composition that feels editorial.  
This should look like a founder page from a premium studio — not a résumé section.

---

### 7 · PROCESS

**Animated vertical timeline.**

Stages:
```
01 Discovery → 02 Planning → 03 Design → 04 Development → 05 Launch → 06 Support
```

Each stage reveals on scroll.  
Lines animate in sequence.  
Alternating left/right layout on desktop.  
Clean vertical stack on mobile.

---

### 8 · WHY BIDIEX

**Premium advantage cards.** NOT a bullet list.

Advantages:
- Modern technologies
- Scalable architecture
- Fast communication
- Attention to detail
- Long-term vision

Consider an **editorial layout** — large text for one advantage, cards for others, or a horizontal scrolling strip.

---

### 9 · CONTACT

This section should feel like a **premium SaaS dashboard component**, not a basic form.

**No email sending.** The form generates a pre-formatted WhatsApp message.

**Phone:** `3180779665`  
**WhatsApp URL:** `https://wa.me/573180779665?text=...`

**Fields:**
- Name
- Company
- Project type (select or text)
- Message

**Generated message format:**
```
Hello Andrés,

My name is [Name].

Company: [Company]
Project: [Project type]

Message:
[Message]

I found Bidiex through your website and would like to discuss a project.
```

**CTA button:** `Start Conversation →`  
Opens WhatsApp in a new tab.

Inputs:
- Dark background
- Rounded (16px)
- Thin border
- Soft blue glow on focus
- Generous padding
- Elegant placeholders

---

### 10 · FOOTER

Minimal. Clean. Nothing unnecessary.

```
Bidiex
Software Studio

Links: Privacy Policy · Terms · Contact

© [year auto-generated with JS] Bidiex. All rights reserved.
```

Year is always current — generated with `new Date().getFullYear()`.

---

## RESPONSIVE BEHAVIOR

Breakpoints:
```
Mobile small:  < 380px
Mobile:        380px – 640px
Tablet:        640px – 1024px
Laptop:        1024px – 1280px
Desktop:       > 1280px
```

Rules:
- All type uses `clamp()` — never fixed px on mobile
- Spacing scales fluidly
- Cards stack cleanly — never collapse awkwardly
- Navbar becomes a minimal mobile menu
- Timeline collapses to single column
- No content ever overflows or clips

---

## ACCESSIBILITY

- Semantic HTML5 structure
- Proper heading hierarchy (one `h1`, logical `h2`/`h3`)
- All images have `alt` attributes
- Form fields have associated `<label>` elements
- ARIA roles and `aria-label` where needed
- Full keyboard navigation
- Visible focus states (styled, not browser default)
- Color contrast meets WCAG AA minimum

---

## SEO & META

```html
<!-- Core -->
<title>Bidiex — Software Studio</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<link rel="canonical" href="...">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">

<!-- PWA -->
<meta name="theme-color" content="#050608">
<link rel="manifest" href="/site.webmanifest">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## CSS ORGANIZATION

```css
/* 1. Custom Properties (Design Tokens) */
/* 2. CSS Reset */
/* 3. Utilities */
/* 4. Layout & Grid */
/* 5. Navbar */
/* 6. Hero */
/* 7. Section: Capabilities */
/* 8. Section: About */
/* 9. Section: Projects */
/* 10. Section: Services */
/* 11. Section: Founder */
/* 12. Section: Process */
/* 13. Section: Why Bidiex */
/* 14. Section: Contact */
/* 15. Footer */
/* 16. Animations & Keyframes */
/* 17. Responsive (mobile-first) */
```

---

## JS ORGANIZATION

Organize into **IIFEs or named modules**. No global pollution.

```js
// 1. Navbar — scroll behavior, active section, mobile menu
// 2. Loading — entrance animation
// 3. ScrollReveal — IntersectionObserver for all sections
// 4. Parallax — hero mouse movement
// 5. Ripple — button click effect
// 6. ScrollProgress — top progress bar
// 7. BackToTop — button visibility + scroll
// 8. Contact — WhatsApp URL builder
// 9. Footer — dynamic year
// 10. Init — run all modules
```

---

## COPYWRITING RULES

- Professional and honest — never exaggerated
- Minimal — say more with less
- Avoid marketing clichés ("we help you succeed", "take your business to the next level")
- Avoid vague claims ("cutting-edge", "best-in-class")
- Write as a craftsperson would speak about their work
- Every word earns its place

---

## DELIVERABLES CHECKLIST

```
✓ index.html        — Complete, semantic, production-ready
✓ styles.css        — Organized, commented, design token-driven
✓ script.js         — Modular, no globals, fully commented
✓ 404.html          — On-brand error page
✓ robots.txt        — Properly configured
✓ sitemap.xml       — Valid XML sitemap
✓ manifest.json     — PWA manifest
✓ site.webmanifest  — Web app manifest
✓ browserconfig.xml — Windows tile config
```

No file should be a placeholder.  
Every file must be complete and ready to push to GitHub Pages.

---

## FINAL STANDARD

The website is done when a stranger can visit it and immediately think:

> *"This is a legitimate, professional software studio."*

Not: *"This is a nice template."*

Every pixel, every word, every transition should support that conclusion.