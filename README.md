# 🍛 Spice Street — Premium Restaurant Website

**Authentic Flavours. Modern Experience.**

A production-quality, fully responsive restaurant website built with React, TypeScript, and Tailwind CSS. Designed to showcase what a premium web presence looks like for restaurant owners.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)

---

## ✨ Features

- **Responsive Design** — Mobile-first, tested across 320px–1440px+
- **Sticky Navigation** — Transparent on hero, solid on scroll, mobile hamburger menu
- **Hero Section** — Full-screen with background image, overlay, and CTAs
- **Quick Info Bar** — Location, hours, phone, rating at a glance
- **About Section** — Restaurant story with feature highlights
- **Interactive Menu** — Category filtering, veg/non-veg indicators, popular badges
- **Special Offer** — Promotional section with pricing
- **Why Choose Us** — Feature cards with viewport animations
- **Gallery** — Responsive grid with full-screen lightbox and keyboard navigation
- **Customer Reviews** — Testimonials with star ratings and avatars
- **Reservation Form** — Full validation, success state, date/time pickers
- **Contact Section** — Address, phone, email, map embed, social links
- **Premium Footer** — Quick links, hours, contact info, social media
- **Floating WhatsApp** — Configurable number and pre-filled message
- **Back-to-Top Button** — Appears on scroll
- **Scroll Progress Bar** — Visual reading progress indicator
- **Smooth Animations** — Intersection Observer-based, respects `prefers-reduced-motion`
- **SEO Optimized** — Meta tags, Open Graph, structured data (JSON-LD)
- **Accessible** — Semantic HTML, keyboard navigation, ARIA labels, focus states

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI Framework |
| **TypeScript 5.6** | Type Safety |
| **Vite 8** | Build Tool |
| **Tailwind CSS 4** | Styling |
| **Lucide React** | Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd spice-street

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customization Guide

### Restaurant Information

**File:** `src/data/restaurant.ts`

This is your central configuration file. Update these fields:

| Field | Description |
|---|---|
| `name` | Restaurant name |
| `tagline` | Brand tagline |
| `description` | About section text |
| `phone` | Phone number |
| `email` | Email address |
| `whatsappNumber` | WhatsApp number (numbers only, with country code) |
| `whatsappMessage` | Pre-filled WhatsApp message |
| `address` | Full address object (street, city, state, zip, country, full) |
| `openingHours` | Hours for weekdays, weekends, and display |
| `rating` | Star rating |
| `totalReviews` | Number of reviews |
| `mapsLink` | Google Maps link (for "Get Directions" button) |
| `mapsEmbed` | Google Maps embed URL (for iframe) |
| `socialLinks` | Instagram, Facebook, Twitter, YouTube URLs |
| `specialOffer` | Promotional offer details |

### Menu Items

**File:** `src/data/menu.ts`

Each menu item has:

```typescript
{
  id: 'unique-id',
  name: 'Dish Name',
  description: 'Short appetizing description',
  price: 299,          // Number in your currency
  category: 'Starters', // Must match a category in menuCategories
  isVeg: true,         // true for vegetarian
  isPopular: true,     // Shows "Popular" badge
  image: 'https://...' // Image URL
}
```

Categories can be modified in the `menuCategories` array.

### Customer Reviews

**File:** `src/data/reviews.ts`

```typescript
{
  id: 'review-1',
  name: 'Customer Name',
  rating: 5,
  text: 'Review text...',
  date: 'August 2026',
  avatar: 'https://ui-avatars.com/api/?name=First+Last&background=random'
}
```

### Gallery Images

**File:** `src/data/gallery.ts`

```typescript
{
  id: 'gallery-1',
  src: 'https://images.unsplash.com/photo-...',
  alt: 'Descriptive alt text',
  category: 'Food' // Food, Ambience, Kitchen, Events
}
```

### Brand Colors

**File:** `src/index.css`

The color palette is defined in the `@theme` block:

```css
@theme {
  --color-brand-500: #d47a1e;  /* Primary gold/amber */
  --color-accent-500: #c0392b; /* Deep spice red */
  --color-warm-50: #faf9f7;    /* Background warm white */
  --color-warm-900: #1f1c18;   /* Dark text/backgrounds */
}
```

Modify the `brand-*`, `accent-*`, and `warm-*` color scales to match your client's brand.

### WhatsApp Number

**File:** `src/data/restaurant.ts`

```typescript
whatsappNumber: '919876543210', // Country code + number, no spaces or +
whatsappMessage: 'Hi, I would like to know more about your restaurant.',
```

### Google Maps

**File:** `src/data/restaurant.ts`

```typescript
mapsLink: 'https://maps.google.com/?q=Your+Address',
mapsEmbed: 'https://www.google.com/maps/embed?pb=...'
```

To get the embed URL:
1. Go to Google Maps
2. Search your address
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe code

### Images

All images use remote URLs (Unsplash). To use local images:

1. Place images in `src/assets/` or `public/`
2. Update the `image` fields in data files
3. For public folder: use `/image-name.jpg`
4. For src/assets: import and reference them

---

## 📁 Project Structure

```
spice-street/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── FloatingButtons.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SectionHeading.tsx
│   ├── sections/            # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── InfoBar.tsx
│   │   ├── Menu.tsx
│   │   ├── Reservation.tsx
│   │   ├── Reviews.tsx
│   │   ├── SpecialOffer.tsx
│   │   └── WhyChooseUs.tsx
│   ├── data/                # Centralized configuration
│   │   ├── restaurant.ts    # Restaurant info
│   │   ├── menu.ts          # Menu items & categories
│   │   ├── reviews.ts       # Customer reviews
│   │   └── gallery.ts       # Gallery images
│   ├── hooks/               # Custom React hooks
│   │   ├── useInView.ts
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   ├── utils/               # Utility functions
│   │   ├── formatPrice.ts
│   │   └── smoothScroll.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & theme
├── index.html               # HTML template with SEO
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist/` folder
```

### Any Static Host

Build and deploy the `dist/` folder to any static hosting provider (AWS S3, GitHub Pages, Firebase Hosting, etc.)

---

## 📝 License

This project is available for commercial use. Customize and deploy for your restaurant clients.
