# Aryan Shetty — Portfolio

Premium editorial portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Fonts | Instrument Serif · DM Sans · JetBrains Mono |
| Deployment | Vercel (recommended) |

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## Project Structure

```
app/
  layout.tsx          ← Root layout, fonts, metadata
  page.tsx            ← Homepage
  globals.css         ← Tailwind + grain + cursor styles
  work/
    page.tsx          ← Work listing page
    [slug]/
      page.tsx        ← Dynamic case study pages
  contact/
    page.tsx          ← Contact page
  not-found.tsx       ← 404 page

components/
  layout/
    Navbar.tsx        ← Sticky nav with scroll blur + mobile overlay
    Footer.tsx        ← Minimal dark footer
  sections/
    Hero.tsx          ← Hero with typewriter, staggered animations, marquee
    FeaturedWork.tsx  ← Hero project card + 2-col grid
    Services.tsx      ← 4-col service blocks + industry pills
    About.tsx         ← 2-col with photo placeholder + stat card
    CTA.tsx           ← Dark full-width CTA section
    WorkHero.tsx      ← Work page header
    CaseStudies.tsx   ← Alternating large case study cards
    OtherProjects.tsx ← 3-col grid of smaller projects
    CaseStudyPage.tsx ← Full case study template (all 8 sections)
    ContactSection.tsx← Contact hero + details + form
  ui/
    CustomCursor.tsx  ← Dot + ring cursor with lag
    GrainOverlay.tsx  ← Animated grain texture
    Motion.tsx        ← Reusable FadeUp, Stagger, ScaleFade components

lib/
  projects.ts         ← Central data store for all projects
```

## Customisation

### Adding a new project
Edit `lib/projects.ts` and add a new entry. The case study page template and work listing both pull from this file automatically.

### Swapping placeholder mockups for real screenshots
Replace the wireframe `<div>` mockups inside each card with a real `<Image>` component:
```tsx
import Image from 'next/image'

<Image
  src="/projects/financebro.png"
  alt="FinanceBro"
  fill
  className="object-cover"
/>
```
Place images in `/public/projects/`.

### Updating contact details
Edit `components/sections/ContactSection.tsx` — the `contactLinks` array at the top.

### Colors / fonts
All design tokens are in `tailwind.config.js` and `app/globals.css`. The system uses:
- `--paper` / `bg-paper` — warm off-white background
- `--card` / `bg-card` — slightly deeper card surfaces
- `--ink` / `bg-ink` / `text-ink` — near-black
- `--muted` / `text-muted` — medium warm gray
- `--ghost` / `text-ghost` — very muted gray
- `--gold` / `bg-gold` — accent (use sparingly, max 3 places)

## Deployment

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for production
npm run build
npm run start
```

### Environment variables
No environment variables required for the base portfolio. If you add a contact form backend (e.g. Resend, Formspree), add:
```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint
```

## Animation Reference

All scroll-triggered animations use `FadeUp`, `Stagger`, or `ScaleFade` from `components/ui/Motion.tsx`.

```tsx
// Simple fade up on scroll
<FadeUp delay={0.1}>
  <h2>Your heading</h2>
</FadeUp>

// Staggered children
<Stagger>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</Stagger>
```

Page-level hero animations use Framer Motion directly with `initial`/`animate` for immediate load animations (no scroll trigger needed on hero content).
