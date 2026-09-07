# Thayi Doors Landing Page — Current Design Blueprint

## Purpose

This repository contains a single-page lead-generation site for **Thayi by
Fitoutz Group**, a Bengaluru manufacturer and supplier of factory-finished
door systems. The page is aimed at architects, builders, homeowners and
fit-out teams who need to specify and procure doors for an entire project.

The primary conversion is a request for a free consultation / quote. Leads
are sent to HubSpot when `HUBSPOT_API_KEY` is configured, then visitors are
sent to the thank-you page.

## Product Positioning

The current messaging presents a 44-design door programme spanning five
surface systems:

- Solid Wood for entrances
- Veneer for premium interior doors
- High Pressure Laminate (HPL) for durable, scratch-resistant interiors
- Melamine CPL for low-maintenance and acoustic applications
- Moulded Skin for lighter, economical internal doors

Its core promises are a single catalogue and delivery schedule, engineered
door stability, factory-applied finishes, named designs for straightforward
specification, and a single accountable team in Bengaluru.

## Page Architecture

The home page renders these sections in this order:

1. **Sticky header** — logo, desktop/mobile navigation, and a “Get a Free
   Quote” call to action.
2. **Hero** — a full-viewport, dark espresso image treatment; Thayi/Fitoutz
   location cue; 44-design proposition; four product proof points; and an
   inline lead form.
3. **One Door Programme** — framing for specifying all openings from one
   catalogue, with counts of 24 solid-wood entrance, 8 moulded-skin, and 12
   premium-interior designs.
4. **Project handover problems** — three cards covering movement after
   installation, inconsistent suppliers/finishes, and prolonged site
   finishing.
5. **Six Thayi advantages** — construction, timber choice, factory finish,
   surface-system breadth, named design library, and Fitoutz accountability.
6. **Process flow** — share schedule, choose designs, specify timber/finish,
   manufacture and factory finish, then delivery/installation.
7. **Application guide** — matching collections to entrances, feature and
   glazed openings, homes, apartments, offices and high-traffic interiors.
8. **Why buyers choose Thayi** — six buyer-focused reasons, including one
   catalogue, project-wide finish consistency and one point of accountability.
9. **Built for the projects we work on** — independent homes, apartment
   projects, fit-out contractors, offices, hospitality, and retail/clinical
   projects.
10. **Closing conversion section** — states what a visitor will receive from
    an enquiry and repeats the lead form.
11. **Footer** — logo, text links and copyright.

The former design-index section remains in the codebase but is not rendered.

## Visual System

The implemented direction is warm, architectural and understated:

- **Background:** warm ivory (`hsl(42 24% 93%)`)
- **Primary:** deep espresso (`hsl(28 28% 12%)`)
- **Accent:** teak / wood brown (`hsl(25 49% 36%)`)
- **Surfaces:** near-white warm cards with restrained beige borders
- **Typography:** Poppins is loaded globally in the root layout. Components
  use the `font-heading` and `font-body` utility names where available.
- **Layout:** a centred 1200px maximum-width container, 14–20 responsive
  vertical spacing, thin rules, square-to-subtle 0.25rem corners and
  editorial, numbered card grids.
- **Motion:** content sections fade upward once when they enter the viewport;
  cards lift slightly and shift their border/accent rule on hover.

The hero uses a remote Cloudinary image with an espresso overlay. All current
imagery is remotely hosted; there are no local product-image assets.

## Responsive Behaviour

- Desktop uses two-column hero and closing-CTA layouts, a horizontal header,
  and three-column card grids where appropriate.
- Tablet layouts reduce grids to two columns.
- Mobile uses a slide-out navigation sheet and stacked content. The header
  CTA and every form CTA scroll to the closing form or submit the inline form.

## Lead Capture and Tracking

The shared lead form collects name, email, phone and company, with the hidden
source `Thayi Doors Website`. Client-side Zod validation requires a valid
email, a 10–15 character phone value, and names/company values of at least two
characters.

On submission, the server action searches HubSpot by email and creates or
updates the contact. With no `HUBSPOT_API_KEY`, submission returns success but
does not persist a contact. Successful form submissions navigate to
`/thank-you?success=true`.

Google Ads and Meta Pixel scripts load at the root. The configured Google Ads
ID is `AW-17338354366`; conversion events are also attempted on successful
form submission and on the thank-you route. Vercel Analytics is included.

## Routes and Implementation

- `/` — landing page
- `/thank-you?success=true` — post-submission confirmation; access without
  the success parameter redirects home

The app uses Next.js 15 App Router, React 18, TypeScript, Tailwind CSS,
shadcn/Radix UI primitives, React Hook Form, Zod and Lucide icons. Remote
images are configured in `next.config.ts` and image optimisation is disabled.

## Current Implementation Notes

The document above describes the page as it currently renders. The following
items are visible implementation inconsistencies to resolve before release:

- The site logo is a placeholder Cloudinary asset, while the page copy is for
  Thayi Doors.
- Header links target `#solutions`, `#products`, `#why-us` and `#faq`, but
  those IDs are not present in the current rendered page. The footer labels
  are not links.
- The mobile sticky enquiry button watches `#solutions`, which is absent, so
  it never becomes visible.
- Some UI copy contains character-encoding artifacts (for example, `Â·` and
  `â€”`) that should be normalised.
- The thank-you client component includes a placeholder Google Ads conversion
  target (`AW-CONVERSION_ID/CONVERSION_LABEL`) in addition to the configured
  event elsewhere.
- `next.config.ts` deliberately ignores TypeScript and ESLint build errors;
  this should be treated as a temporary development setting.
