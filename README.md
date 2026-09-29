# Lotus Grace: Banquet & Events Website

Website for **Hotel Lotus Grace**, a luxury banquet and event venue in **Sahibabad, Ghaziabad** for weddings, engagements, social celebrations and corporate events.

🌐 **Live site:** [lotusgrace.vercel.app](https://lotusgrace.vercel.app)

> Designed & developed by [Aniket Jamunde](https://aniketwebdev.in) · [aniketwebdev.in](https://aniketwebdev.in)

---

## ✨ Overview

A single-page, mobile-first landing site built to turn visitors into venue enquiries. It presents the venue, its celebrations, facilities, gallery and reviews, and makes it easy to enquire by form, call or WhatsApp.

### Key features

- **Hero section** with a full-screen banquet hall image, headline and two calls to action (Enquire Now, WhatsApp Us)
- **Animated highlight stats**: guest capacity, number of halls, parking and in-house catering
- **About section** covering the venue, location, halls, multi-cuisine catering and personal event manager
- **Celebrations section** with tabs for Weddings, Engagements & Roka, Birthdays & Parties and Corporate Events
- **What You Can Expect**: halls, food, service and comfort, each with its own block
- **Filterable gallery** (All, Weddings, Engagements & Parties, Food & Catering) with Instagram link
- **Why Choose Us** highlights and a **Reviews** section with a Google reviews link
- **Enquiry form** ("Check Availability for Your Date") with celebration type, preferred date and guest count
- **Contact block** with address, phone, email, opening hours and an embedded Google Map
- **Floating call and WhatsApp buttons** for one-tap contact on mobile
- **Smooth scroll navigation** and section animations with Framer Motion

### SEO

- Page title, meta description and local keywords (Ghaziabad, Sahibabad, Anand Vihar)
- Open Graph and Twitter card metadata with a custom share image
- Canonical URL and `en_IN` locale
- Descriptive `alt` text on hero and gallery images

---

## 🛠 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Linting | ESLint 9 + `eslint-config-next` |
| Hosting | Vercel |

---

## 📁 Project Structure

```
lotus-grace/
├── public/
│   └── images/          # Logo, hero image, gallery and OG image
├── src/                 # App source (pages, components, styles)
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS / Tailwind config
├── tsconfig.json        # TypeScript config
├── eslint.config.mjs    # ESLint config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/aanyaas-resp/lotus-grace.git
cd lotus-grace
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

---

## ☁️ Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` can trigger a new production deployment automatically.

---

## 🔒 License, Privacy & Disclaimer

**© 2026 Lotus Grace. All rights reserved.**

This repository contains a **custom website built for a client**. The source code, design, copy, logo, photographs and all other assets are the **private property of the client and the developer**.

- This code is **not open source** and is **not licensed** for reuse, copying, redistribution or resale.
- Venue branding, photos, reviews and content may **not** be used elsewhere without written permission.
- The code is shared here for **portfolio and reference purposes only**.

Want a website like this for your business? [Get in touch](https://aniketwebdev.in).

---

## 👨‍💻 Developer

**Aniket Jamunde**, Freelance Web Developer
[aniketwebdev.in](https://aniketwebdev.in) · [GitHub](https://github.com/aanyaas-resp)
