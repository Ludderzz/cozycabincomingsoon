# Cozy Cabin — A Private Forest Retreat

A high-end, minimalist React demo for a boutique woodland stay, inspired by lookingglasslodge.co.uk.

## Stack
- **React 18** + **Vite 5** — fast development & build
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — scroll-triggered animations, parallax
- **Lucide React** — thin, elegant icon set

## Design
- **Palette**: Warm off-white `#FDFCFB` · Deep forest green `#1B2B21` · Muted slate `#5C6B72` · Gold `#C9A84C`
- **Typography**: Playfair Display (serif titles) · Cormorant Garamond (italic sub-headers) · Jost (body, labels)
- **Aesthetic**: Grain overlay texture, parallax hero, editorial grid, immersive nature photography

## Sections
1. **Hero** — Full-screen parallax with coordinates, scroll indicator
2. **The Stay** — Split-screen with parallax image + feature list
3. **Full-Width Banner** — Pull quote with CTA
4. **Availability Calendar** — Custom month calendar with booked dates, floating booking card, Airbnb redirect toast
5. **Experiences** — Four-column hover cards
6. **Footer** — Links, newsletter signup, social

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Customise

- **Booked dates**: Edit `BOOKED_DATES` in `src/components/Calendar.jsx`
- **Airbnb link**: Change `AIRBNB_URL` in `src/components/Calendar.jsx`
- **Pricing**: Adjust `pricePerNight` in `Calendar.jsx`
- **Images**: Replace Unsplash URLs with your own (recommend Cloudinary or similar CDN)
- **Location**: Update coordinates in `Hero.jsx`
