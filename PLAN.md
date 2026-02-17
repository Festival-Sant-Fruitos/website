# Festival Internacional de Musica Classica - Complete Rebuild Plan

## Context

The XXXI Festival Internacional de Musica Classica (Memorial Eduard Casajoana) at Mon Sant Benet currently runs on a dated WordPress blog template ("Minimatica" theme) that severely undersells a 30+ year prestigious classical music event. The site has dead pages (404s), duplicate content across CA/ES, orphan curriculum pages, a WordPress auto-generated slug like `/934-2/`, no mobile optimization, and amateur visual design. The organization needs a professional, modern site worthy of an international festival, inspired by cultural landmarks like La Pedrera and Casa Batllo.

---

## New Site Architecture

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion (scroll-triggered reveals, parallax)
- **Content**: JSON data files + MDX for rich text pages
- **Language**: Catalan only (clean, no i18n complexity)
- **Export**: Static export (`output: 'export'`) for hosting flexibility

### Page Structure (7 pages, down from 59 URLs)

```
/                     -> Home (hero + program + tickets CTA + venue + sponsors)
/programa             -> Full 2025 Program (all 4 concerts with details)
/historia             -> Festival History & Archive (30+ years of legacy)
/entrades             -> Tickets (pricing, CodeTickets links, physical sales points)
/ubicacio             -> Venue & Directions (Mon Sant Benet, map, transport, rain plan)
/sobre                -> About (presentation + organization merged into one clean page)
/avis-legal           -> Legal Notice (updated GDPR-compliant)
```

---

## Design System

### Color Palette
```
Primary:      #1A1A2E  (deep navy/almost black - elegance, classical)
Accent:       #C9A84C  (warm gold - premium, classical music, awards)
Background:   #FAFAF8  (warm off-white - softer than pure white)
Surface:      #F2F0EB  (light warm gray - card backgrounds)
Text:         #2C2C2C  (near-black for readability)
Text Muted:   #6B6B6B  (secondary text)
White:        #FFFFFF  (cards, overlays)
```

### Typography
- **Headings**: Playfair Display (serif) - classical, editorial, elegant
- **Body**: Inter (sans-serif) - clean, modern readability
- **Accent**: Cormorant Garamond for the festival name/hero

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header + Footer
│   ├── page.tsx            # Home
│   ├── programa/page.tsx
│   ├── entrades/page.tsx
│   ├── historia/page.tsx
│   ├── ubicacio/page.tsx
│   ├── sobre/page.tsx
│   └── avis-legal/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav + "Comprar Entrades" CTA
│   │   ├── Footer.tsx      # Full footer with sponsors, links, social
│   │   └── MobileMenu.tsx  # Slide-out mobile nav
│   ├── home/
│   │   ├── Hero.tsx        # Full-viewport hero
│   │   ├── ProgramPreview.tsx  # Concert card grid
│   │   ├── VenueSection.tsx
│   │   ├── LegacyBanner.tsx    # Stats counter
│   │   ├── SponsorsGrid.tsx
│   │   └── Newsletter.tsx
│   ├── programa/
│   │   ├── ConcertCard.tsx     # Individual concert detail
│   │   └── ArtistBio.tsx       # Expandable artist info
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AnimatedReveal.tsx  # Scroll-triggered fade-in wrapper
│   │   └── Container.tsx
│   └── entrades/
│       └── TicketCard.tsx      # Ticket purchase card with CTA
├── data/
│   ├── concerts.json       # 2025 concert data
│   ├── sponsors.json       # Sponsor tiers and logos
│   ├── archive.json        # Past editions data
│   └── venue.json          # Venue info, directions
└── public/
    ├── images/
    ├── programs/           # PDF programs for download
    └── fonts/
```

---

## SEO & Redirects

Important 301 redirects to preserve any existing search ranking:
```
/presentacio        -> /sobre
/organitzacio       -> /sobre
/edicio-2025        -> /programa
/venda-dentrades    -> /entrades
/patrocinadors      -> /#patrocinadors
/com-arribar-hi     -> /ubicacio
/edicions-anteriors -> /historia
/about              -> /sobre
```

---

## Implementation Status

- [x] Phase 1: Foundation (project setup, structure, design system, shared components, layout)
- [x] Phase 2: Homepage (hero, program preview, venue, legacy banner, sponsors, newsletter)
- [x] Phase 3: Content Pages (programa, entrades, historia, ubicacio, sobre, avis-legal)
- [x] Phase 4: Polish (animations, SEO, performance, build verification)
