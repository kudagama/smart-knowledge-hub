# SLT Smart PEARL Knowledge Hub

AI-powered enterprise knowledge management, interactive SOP decision trees, and call center technical support assistance system for Sri Lanka Telecom (SLT-Mobitel).

## Features
- **19 Enterprise Knowledge Hub Domains & Portals**
- **Interactive FTTH Troubleshooting Decision Trees**
  - Wi-Fi Not Working (PON Steady)
  - Browsing Slow (FUP / Speed Drop)
  - LOS Red Indicator (Fiber Cut)
  - ONT Router Dead / Power Fault
  - General Questions & CPE Diagnostics
- **Live Search & Fast Navigation**
- **SOP Quick Decision Trees with Instant Trouble Ticket (TT) Generation**
- **SharePoint & Intranet Documentation Quick Links**

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Lucide React & Framer Motion
- TypeScript

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 4G LTE tariff API

The 4G LTE prepaid and postpaid pages now import tariffs from `src/data/fourGLteCatalog.ts`. The same catalog powers the read-only endpoint:

- `GET /api/knowledge-hub/4g` — prepaid, postpaid, connection charges, reload validity
- `GET /api/knowledge-hub/4g?section=prepaid`
- `GET /api/knowledge-hub/4g?section=postpaid`
- `GET /api/knowledge-hub/4g?search=anytime`

Each plan includes package name, type, source-page category, numeric LKR price (when present), quota/allowance, validity when available, and status. `priceWithTaxLkr` and `taxIncluded` are supplied only when supported by the source fields. The pricing catalog comes from repository page reference tables rather than a directly connected live tariff database: verify rates with the tariff owner before quoting customers. Marked discontinued packages remain visible for historical support.
