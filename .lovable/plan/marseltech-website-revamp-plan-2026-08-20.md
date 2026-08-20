# MarselTech Website Revamp Plan

## Goal
Rebuild the MarselTech website as a professional, capability-first systems-integrator site using the Marsel Tech brand colors: **green, black, and white**. Content follows the uploaded sitemap: honest positioning, real partner brands, real project experience, no fake stats or testimonials.

## Design System
- **Primary accent:** a confident tech green (to be matched precisely to the logo once provided; starting with a crisp emerald/green token).
- **Base palette:** white backgrounds, near-black text, subtle grey surfaces.
- **Typography:** clean sans-serif system (shadcn defaults), one heading weight, one body weight.
- **Components:** consistent card radius, shadow, and CTA language across all pages.

## Pages to Build
1. **Home** — Hero, trust bar, solutions grid, Why MarselTech, process teaser, project experience, partners, final CTA.
2. **About Us** — Who we are, founder/leadership, approach, certifications/brands, CTA.
3. **Solutions Overview** — Intro + 5 solution cards + consultation CTA.
4. **Solution Detail Pages** (5) — UCC, Security, ID, IT, AV using a shared template.
5. **How We Work** — 5-step process, differentiator, CTA.
6. **Partners** — Partner grid with one-line descriptions.
7. **Contact Us** — Form, contact details, map embed.
8. **Industries We Serve** — Corporate, Retail, Hospitality, Education, Healthcare grid.

## Technical Approach
- TanStack Start routing (file-based routes under `src/routes/`).
- Tailwind CSS v4 design tokens in `src/styles.css`.
- shadcn/ui components for forms, cards, sheets, navigation.
- Shared layout component with navigation and footer.
- Placeholder logo until the official Marsel Tech logo file is provided.

## Phases
1. Set up design tokens, shared layout, navigation, and footer.
2. Build Home page.
3. Build About and How We Work.
4. Build Solutions overview + 5 detail pages.
5. Build Partners, Contact, and Industries pages.
6. Add SEO meta and final polish.

## Notes
- All CTA buttons will use consistent language: "Get a Quote" / "Book a Consultation".
- Project experience cards will describe project types, not client names.
- Partner logos will be represented as named placeholders until official logo assets are supplied.
