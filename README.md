# Iya Sade Oke Ogun Heritage — Website (Phase 1)

Professional, trust-focused website for **Iya Sade Oke Ogun Heritage**, a premium heritage
supplier of Elubo (Yam Flour), Fresh Yam, Garri, Maize and other Oke Ogun staples.
Built to PRD v1.1 (October 2026).

## Stack

- **Vite 6** + **React 19** + **React Router 7**
- Hand-crafted CSS design system (brand tokens in `src/styles/tokens.css`)
- No UI framework, no backend — forms submit via pre-filled **WhatsApp** deep links

## Getting started

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run smoke     # SSR smoke test: renders every route
npm run test:responsive  # headless-browser test: 23 viewport widths × 11 routes
                         # (horizontal overflow, element overflow, sticky header,
                         #  mobile-menu overflow)
```

## Phase 1 (MVP) coverage

| PRD item | Where |
|---|---|
| Fully responsive design | All pages, `src/styles/responsive.css` |
| Floating WhatsApp button | `src/components/layout/WhatsAppFab.jsx` |
| Product catalogue with sizes & prices | `src/data/products.js` → `ProductCard` |
| Quality & Global Standards page | `src/pages/QualityStandards.jsx` |
| Seasonal availability information | `src/data/seasonal.js` → `SeasonalCalendar` |
| Bulk inquiry form with quantity fields | `src/components/forms/BulkOrderForm.jsx` |
| Contact form | `src/components/forms/ContactForm.jsx` |
| Fast loading & basic SEO | Code-split-free single bundle + per-page `PageMeta` title/description |

Pages: Home · About Us · Shop/Products · How It Works · Delivery & Pricing ·
Quality & Standards · Demand Insights · Gallery · Testimonials · Contact/Order (+ 404).

## Before going live

1. **Replace business details** in `src/data/site.js`:
   `WHATSAPP_NUMBER`, `PHONE_DISPLAY`, `PHONE_TEL`, `EMAIL`, `ADDRESS`, `BUSINESS_HOURS`.
2. **Review prices** in `src/data/products.js` (sample Phase 1 values).
3. **Swap gallery placeholders** in `src/data/gallery.js` for real photography when available.
4. Add analytics/CRM integrations in Phase 2 (PRD §7).

## Phase 2 (not in this build)

Full e-commerce with payment gateway · admin demand-forecasting dashboard ·
customer order history · advanced seasonal demand charts · export documentation section.
