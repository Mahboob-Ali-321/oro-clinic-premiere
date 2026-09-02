# Oro Clinic Premiere

Build a complete, premium, fully mobile-responsive website for "Oro Dental Clinic" — a real dental clinic in Bhagalpur, Bihar, led by Dr. Anand Mohan. This is a full client website, not just a hero section — it needs every section a real clinic website needs, PLUS a specific premium hero animation style detailed below.

===================================================
PART 1 — THE HERO SECTION (must match this exact design system)
===================================================
Replicate this hero design precisely, adapted for a dental clinic instead of a biotech company. Use React + Tailwind CSS + Framer Motion (or your standard stack) to achieve this exact visual and motion result — the values below are the source of truth for colors, spacing, typography and animation timing, regardless of implementation approach:

COLOR PALETTE:
- Primary Brand (Blue): #1a56db (highlighted text, primary actions)
- Primary Brand Light: #eff6ff (icon backgrounds)
- Text Primary (Dark Navy): #0a192f (headings, main text)
- Text Secondary (Slate Gray): #475569 (subheadings, descriptions)
- Chip Background (Soft Blue): #e0f2fe
- Chip Text (Deep Blue): #0369a1
- Primary Button Background: #0c2b64, Hover: #133a80
- Secondary Button: rgba(255,255,255,0.4) background with backdrop-filter blur(8px), border rgba(0,0,0,0.1)
- Background: #f8fafc

TYPOGRAPHY (Inter font from Google Fonts):
- Hero Title: 4.5rem desktop / 3.5rem tablet / 2.5rem mobile, weight 700, line-height 1.1, letter-spacing -0.02em
- Hero Description: 1.15rem, weight 400, line-height 1.6, color Text Secondary
- Logo Text: 1.5rem bold; Logo Subtext: 0.65rem, weight 500, letter-spacing 2px, uppercase
- Nav Links: 0.95rem, weight 500
- Chip Text: 0.75rem, weight 600, letter-spacing 1px, uppercase

HERO STRUCTURE:
- Background: a subtle looping muted background video (use a calm, professional dental/clinic-appropriate stock video, or if none fits well, use a high-quality clinic photo with a soft Ken Burns zoom effect as fallback) covering the full hero, with a gradient overlay: linear-gradient(90deg, rgba(240,248,255,1) 0%, rgba(240,248,255,0.85) 40%, rgba(240,248,255,0) 100%) so left-side text stays readable
- Navbar: logo (a tooth/dental icon + "Oro" stacked over "DENTAL CLINIC" small caps subtext) on left, nav links (Services, About, Gallery, Reviews, Contact) centered, a "Book Appointment" primary pill button with arrow icon on the right
- Hero content (left-aligned, max-width 800px):
  - Small chip/badge: "TRUSTED DENTAL CARE · BHAGALPUR" with a small 6px blue dot indicator
  - Headline (two lines): "Healthy smiles.\nGentle, expert care." with the word "Gentle" highlighted in primary brand blue
  - Description: "Oro Dental Clinic provides compassionate, high-quality dental care in Bhagalpur — trusted by over 1,000 patients with a perfect 5.0 rating."
  - Actions: "Book Appointment" (primary pill button, arrow icon) and "Call Now" (secondary glassmorphism pill button with a phone icon)
- Buttons: fully rounded (border-radius 9999px), lucide-react icons, primary button hover darkens + translateY(-1px), secondary button hover increases background opacity to 0.6
- Entry animation: fade-in-up (@keyframes fadeInUp) staggered — chip first, then title at 0.1s, description at 0.2s, buttons at 0.3s, easing cubic-bezier(0.4,0,0.2,1)

===================================================
PART 2 — FULL WEBSITE SECTIONS (beyond the hero)
===================================================

1. TRUST BAR (directly below hero)
   - Prominent Google-style rating display: 5.0 ★★★★★ stars, "1,004 Google Reviews", with the Google "G" icon — this is a major trust signal, give it real visual weight

2. ABOUT / MEET THE DOCTOR
   - Section introducing Dr. Anand Mohan — warm, professional tone. Mention patients consistently describe him as gentle, thorough, and clearly explaining every step of treatment, with painless procedures
   - Include a photo placeholder for the doctor (will be replaced with an uploaded image)

3. SERVICES
   - Grid of dental services with icons: General Checkup & Cleaning, Root Canal Treatment (RCT), Dental Implants, Cavity & Filling Treatment, Cosmetic Dentistry, Pediatric Dentistry
   - Each card: icon, title, 1-line description, subtle hover lift animation

4. GALLERY
   - A clean grid/lightbox gallery section for 6 real clinic photos (I will upload these separately in chat — IMPORTANT: see the technical note at the bottom of this prompt about how to handle these uploaded images)

5. PATIENT TESTIMONIALS
   - Feature 3 testimonials, paraphrased naturally in your own words (do not copy text verbatim) based on these real patient experiences:
     - A patient who felt the doctor's expertise and gentle approach made their visit completely stress-free, with every concern clearly explained
     - A patient who had both a root canal and cleaning done, both handled efficiently and painlessly, with each step explained clearly
     - A patient happy to finally have access to high-quality dental care in their town
   - Attribute using first name + last initial style (e.g., "Abhijeet K.") with a short descriptor like "RCT & Cleaning Patient"
   - Show the 5.0 star rating prominently again here

6. WHY CHOOSE US
   - Short section with 3-4 highlights: Over 1,000 five-star reviews, Painless & efficient procedures, Clear communication at every step, Trusted local clinic in Bhagalpur

7. CONTACT / BOOKING
   - Full address: Oro Dental Clinic, Tilkamanjhi Chowk, Opposite To Kalyan Jewellers, Jail Road, Sabour Rd, Bhagalpur, Bihar 812001
   - Phone: +91 96169 84243 (click-to-call button)
   - WhatsApp button linking to: https://wa.me/919616984243?text=Hi! I'd like to book a dental appointment.
   - Embedded Google Map for this Bhagalpur address
   - Simple appointment request form: Name, Phone, Preferred Service (dropdown), Preferred Date, Message
   - Business hours display

8. FOOTER
   - Clinic logo/name, quick nav links, address, phone, and a small "Book Appointment" CTA repeated

===================================================
PART 3 — MOBILE RESPONSIVENESS (critical)
===================================================
- Fully responsive at all breakpoints: mobile (375-428px), tablet (768px), desktop (1024px+)
- Navbar collapses into a clean hamburger menu on mobile, main nav links hidden
- Hero padding reduces on mobile (0 2rem, margin-top 1rem), title drops to 2.5rem
- Buttons stack vertically on narrow screens if needed
- Gallery grid drops to single/double column on mobile
- All touch targets properly sized for mobile tapping
- Test and polish for real device widths, not just "technically not broken"

===================================================
IMPORTANT TECHNICAL NOTE — UPLOADED IMAGES
===================================================
I will upload 6 real photos of this clinic directly in this chat for you to use in the Hero background/Gallery/About doctor section. Please make sure these uploaded images are saved as actual static image files in the project's public/assets folder (real image binaries included in the codebase), NOT as Lovable-hosted asset pointer references (e.g. .asset.json files pointing to a lovable-hosted URL like /__l5e/assets-v1/...). Pointer-based references only resolve on Lovable's own preview domain and break completely when the project is deployed elsewhere (e.g. Vercel/Netlify) — this has caused broken images for me before. The images must work correctly on any hosting platform after deployment, not just in the Lovable preview.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61fca793-482a-4a10-97b0-5934b2d7ad6b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
