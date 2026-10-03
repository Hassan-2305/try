# Muhabath Catering — website concept

A demo website for [Muhabath Catering](https://www.instagram.com/muhabath_catering_/), luxury wedding catering across Kerala & Tamil Nadu. Built mobile-first to be shown on a phone.

## Run it

Requires Node.js 18.18 or newer (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. For the production build:

```bash
npm run build
npm start
```

## Deploy

Push the folder to a GitHub repo and import it on [Vercel](https://vercel.com/new). No environment variables or settings are needed.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens live in `app/globals.css`)
- Framer Motion, loaded with `LazyMotion` so only the features used ship to the phone, and with reduced-motion respected automatically
- `next/image` with a small custom loader that asks Unsplash's CDN for the right size and format, so no server-side image processing is needed

## Structure

```
app/
  layout.tsx        Fonts, metadata, skip link, motion provider
  page.tsx          Section order
  globals.css       Colour/type tokens, buttons, the kasavu border
components/
  Header.tsx        Sticky header + full-screen mobile menu
  Hero.tsx          Full-height hero, load sequence, gentle parallax
  Story.tsx         Our story + three strengths
  Services.tsx      Tap-to-expand on phones, crossfading image on desktop
  Gallery.tsx       Masonry grid + lightbox (swipe, arrow keys, Esc)
  Testimonials.tsx  Swipeable on phones, grid on larger screens
  Process.tsx       Four-step timeline
  Contact.tsx       Contact details + enquiry form
  EnquiryForm.tsx   Client-side validation, WhatsApp hand-off (no backend)
  MobileActionBar.tsx  Floating "Get a quote" + WhatsApp bar on phones
  Footer.tsx        Footer with the demo badge
lib/
  content.ts        ALL copy, contact details and image URLs
  unsplash-loader.ts
```

## Making it the client's

Almost everything to change is in `lib/content.ts`:

- **Phone & WhatsApp:** replace the placeholder `+91 90000 00000` / `919000000000`.
- **Photos:** swap the Unsplash URLs for the client's own photography. For local photos, put them in `public/`, remove the `images.loader` lines from `next.config.ts`, and use paths like `/photos/feast-01.jpg`.
- **Testimonials:** the four reviews are invented for the demo; replace them with real ones before launch.
- **Form:** it currently only shows a confirmation and offers to send the details on WhatsApp. For the real site, post it to an email service, Google Sheet or CRM.

## Design notes

- Palette: jasmine ivory, kumkum maroon, wine, antique gold (ornament only), warm charcoal.
- Type: Cormorant Garamond for headings, DM Sans for body.
- Signature motif: a gold-and-maroon woven stripe based on the kasavu border of a Kerala wedding saree, used where one section hands over to the next.

Photography: Unsplash (free to use under the Unsplash License). This is a concept, not the client's live site.
