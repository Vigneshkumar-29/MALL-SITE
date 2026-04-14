# The Dubai Mall — Interactive Sales Deck (B2B)

A fully immersive, cinematic, non-linear presentation tool designed to sell commercial spaces and sponsorships for one of the world's largest mega-malls. 

Unlike traditional static slide decks (PDF/PPT), this application is built as a self-contained web platform utilizing video-first storytelling, scroll-triggered physics, and high-end aesthetic directives. It is designed specifically to drive high-stakes B2B actions: Leasing, Event Bookings, and Global Brand Partnerships.

---

## 🎨 Aesthetic Direction

The architecture follows strict implementation of advanced frontend UI philosophies:

- **Core Overview (`/`):** Cinematic Pitch Deck. High-contrast, autoplaying video, aggressive staging of massive data points.
- **Events Module (`/events`):** Architectural Luxury. Deep black backgrounds, striking `Cormorant Garamond` typography, brushed gold highlights.
- **Sponsorship Matrix (`/sponsorship`):** Brutalist Editorial. Relentless grids, massive geometric `Syne` fonts overlapping structural bounds. 
- **Leasing Paths (`/leasing`):** Minimalist Haute Couture. Extreme whitespace, inverted true-white backgrounds, delicate offset layouts resembling fashion houses like Hermès or Prada.

---

## ⚡ Technical Stack & Performance

This app achieves a **90+ Lighthouse Score** despite heavy medial content.

- **Framework**: React 19 + Vite + React Router (with Code Splitting/Suspense).
- **Styling**: Tailwind CSS v4 featuring CSS-native variable theming. Utilizes `clsx` and `tailwind-merge` for scalable dynamic class orchestration.
- **Animation**: `framer-motion` handles deeply integrated `useScroll` parralax triggers and complex orchestration sequences without jank. 
- **Performance Implementations**:
  - `IntersectionObserver` based `<LazyVideo />` ensures heavy media is only loaded at the precise millisecond it enters the viewport.
  - Route-level `React.lazy()` chunking significantly lightens the initial JS payload.
  - Strict Vercel edge-caching configurations via `vercel.json`.

---

## 🚀 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🏗️ Expandable Architecture

All text, metric data, copy, and media strings are sourced dynamically from `/src/config/mallData.js`. 
To alter the pitch for a different property or update the sponsor tiers, simply update the JSON array structures within `mallData.js`. The complex `framer-motion` layouts will automatically ingest the new values without breaking formatting.
