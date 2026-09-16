# Marsel Tech redesign

The design uses the supplied Marsel Tech logo unchanged at `public/brand/marsel-tech-logo.png`. The original upload remains intact. The green accent is supported by a lighter lime surface, near-black text and white space. Space Grotesk headings complement Inter body text.

## Content and interactions

- The homepage introduces all five service areas immediately and includes an accessible service selector, an interactive illustrative workplace, the delivery approach, application examples and the five-stage process.
- The workplace diagram is original SVG, with keyboard-operable HTML controls and a live description panel. It is explicitly illustrative, not a claim about a completed Marsel Tech project.
- All five service pages retain their existing service content and search metadata, with a new layout, capability list, workplace context, scope and native expandable FAQs.
- The approach page introduces the company using the existing business description. No client names, team identities, testimonials, statistics or completed projects have been invented.
- Reduced-motion settings are respected. Navigation includes a mobile menu, a keyboard-operable solutions dropdown, Escape dismissal and a skip link.

## Partner logos

Six original supplied logos are displayed on the homepage and on /partners: Axis, HID, CP PLUS, Cisco, IRIZ ID and Aiphone. Original bytes are preserved in public/partners. Brand colours and aspect ratios are retained; the small Aiphone source is shown at no more than its native width. The Partners page is accessible from header, footer and homepage logos, with concise descriptions, related solution links and official brand links. Partner data lives in src/data/partners.ts. No formal authorisation tiers or certifications are claimed.

Descriptions were checked against official sources: https://www.axis.com/, https://www.hidglobal.com/solutions/access-control-systems, https://www.cpplusworld.com/, https://www.cisco.com/site/us/en/products/networking/index.html, https://irizid.com/, and https://www.aiphone.net/.

## Contact

The placeholder telephone number, unfinished map message, unconfirmed opening hours and dead privacy/terms links have been removed. The existing business email remains `sales@marseltech.com`.

The enquiry form validates the user's details, creates an encoded email draft and lets the user open their email app or copy the draft. It never claims an enquiry was received or sent. Direct server delivery needs an approved mail service and configuration; no credentials or new third-party service were invented or provisioned.

The final telephone number, physical office location, real project photographs and verified company/team information can be added when supplied.

## Validation

Run `npm run build` and `npx tsc --noEmit`. The repository remains compatible with the existing Lovable Vite/TanStack setup. Published history must not be rewritten. The local review browser blocked loopback and file URLs, so screenshot-based visual review was not available in this environment.

Verified during implementation: production build, TypeScript, lint on modified components, all nine rendered page routes, preserved logo bytes, email encoding and draft editing, partner-logo visibility, FAQ expansion, service selection, workplace hotspots, keyboard Escape dismissal and mobile-menu closure after navigation. Desktop/mobile screenshot review remains outstanding because of the browser restriction above.

## Solution-specific explorers

Inner solution pages now use five distinct isometric illustrations: a collaboration room (UCC), surveillance system (Security), access-controlled entrance (ID), network infrastructure (IT), and presentation space (AV). Each has five solution-specific component selectors, numbered hotspots, equipment highlighting and explanatory content. The homepage workplace explorer remains unchanged. SVG illustrations use a shared projection and preserve the existing responsive explorer layout. All 25 hotspot interactions, paired selectors and distinct descriptions were checked.

## Contact and motion update

The supplied sales email and +971 50 692 8507 telephone number are centralised in siteContact. Click-to-call links appear on the contact page, in the footer and in project contact bands. Email drafts use the new address. Subtle, once-per-page-entry scroll reveals and hover transitions complement the existing palette. Reduced-motion preferences are honoured, including live preference changes; content stays visible without JavaScript or animation support.

Motion is now more visible: staggered hero entrance, floating workplace scenes, pulsing active hotspots and keyed solution transitions. A persistent pause/resume control stops CSS and scripted motion. Scroll observers also cover late-mounted route content. Dynamic-content, pause/resume, cancellation and reduced-motion checks pass.
