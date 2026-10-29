# Code Minds Creative — Official Website

> **Full-service digital agency website for Code Minds Creative.**  
> Delivering brand identity, custom web development, Shopify e-commerce, mobile applications, video animation, and ROI-driven digital marketing.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Key Features](#key-features)
- [Website Pages](#website-pages)
- [Tech Stack](#tech-stack)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [SEO & Best Practices](#seo--best-practices)
- [Contact & Business Info](#contact--business-info)

---

## 🌟 Overview

**Code Minds Creative** is a full-service creative agency based in Kent, Washington, dedicated to helping businesses craft standout brands and high-performing digital experiences. This repository contains the complete production-ready source code for the official website, built with high-performance vanilla web standards, modern typography, fluid responsive layouts, and interactive UI components.

---

## 📁 Folder Structure

The project has been organized into a professional, modular front-end architecture:

```text
codemindscreative/
│
├── .gitignore                     # Git ignore rules for OS and editor files
├── README.md                      # Comprehensive project documentation
├── robots.txt                     # Search engine crawler directives
├── sitemap.xml                    # Canonical XML sitemap for SEO
│
├── assets/                        # Static website assets
│   ├── css/
│   │   └── app.css                # Master stylesheet (theme variables, layout, components)
│   ├── js/
│   │   └── app.js                 # Vanilla JS (navigation, reveal animations, filter, forms)
│   └── img/                       # Brand and graphic media
│       ├── FAV-ICON.png           # Website favicon
│       ├── FOOTER-CMC-LOGO.png    # Footer brand logo
│       ├── HEADER-CMC-LOGO.png    # Header brand logo
│       ├── og-default.png         # Open Graph preview card image
│       └── portfolio/             # Categorized client case studies and showcases
│           ├── branding/          # Brand guidelines & stationery mockups
│           ├── logo/              # Logo marks, wordmarks, and emblems
│           ├── mobile-app/        # iOS & Android UI/UX screens
│           ├── video-animation/   # Motion graphics and explainer thumbnails
│           └── website/           # Responsive web & e-commerce mockups
│
├── index.html                     # Homepage
├── about.html                     # Company story, values, and team overview
├── services.html                  # Central services index
│
│   # Dedicated Service Landing Pages
├── branding.html                  # Brand strategy, visual identity & guidelines
├── digital-marketing.html         # SEO, content marketing & audience growth
├── ecommerce-shopify.html         # Custom Shopify stores & e-commerce solutions
├── logo-design.html               # Custom logo creation & vector brand marks
├── mobile-apps.html               # Native & cross-platform mobile app development
├── ppc.html                       # Pay-Per-Click advertising & Google Ads management
├── video-animation.html           # 2D/3D animation, motion graphics & video explainers
├── web-development.html           # Bespoke web design, CMS & custom web applications
│
│   # Conversion & Commercial Pages
├── portfolio.html                 # Interactive case studies gallery with lightbox modal
├── pricing.html                   # Transparent pricing tiers & package breakdown
├── contact.html                   # Project inquiry form with auto-service selection
│
│   # Legal & Compliance Pages
├── disclaimer.html                # Professional disclaimers & warranties
├── privacy.html                   # Privacy policy & data protection practices
├── refund.html                    # 100% money-back guarantee & refund terms
└── terms.html                     # Client terms of service & agreement
```

### 🧹 Structure Optimizations Applied:
1. **Centralized Asset Management:** Consolidated all portfolio case studies under `assets/img/portfolio/` categorized by domain (`branding`, `logo`, `mobile-app`, `video-animation`, `website`).
2. **Eliminated Scraper Artifacts:** Stripped redundant crawler comments, duplicate headers, and obsolete mirrored tags.
3. **Cleaned Duplicate Files:** Replaced 8 redundant hashed scrape pages (`contact240d.html`, `contact6e6a.html`, etc.) with canonical `contact.html?service=<slug>` parameters.
4. **Added Repository Standards:** Included `.gitignore` and `robots.txt` for clean source control and optimal search crawler indexing.

---

## ⚡ Key Features

- **Responsive, Mobile-First Design:** Fully adaptable layouts optimized across mobile, tablet, laptop, and ultra-wide displays.
- **Micro-Interactions & Animation:**
  - IntersectionObserver-powered scroll reveals (fade, slide, stagger).
  - Animated stat counters for key business metrics.
  - Interactive magnetic buttons on pointer devices.
  - Smooth-scrolling navigation with scroll-progress indicator and back-to-top trigger.
  - Full respect for `prefers-reduced-motion` accessibility standards.
- **Interactive Portfolio Gallery:** Dynamic category filtering (Websites, Logos, Branding, Mobile, Video) and interactive keyboard-accessible Lightbox with next/previous controls.
- **Smart Contact Form:** URL parameter recognition (`?service=web-development`, `?service=branding`, etc.) automatically preselects the relevant service dropdown option.
- **SEO & AEO Ready:** Schema.org JSON-LD structured data for organization, local business signals, meta social cards (Open Graph), and XML sitemap integration.

---

## 📄 Website Pages (18 Canonical Pages)

| Page | URL Path | Description |
| :--- | :--- | :--- |
| **Home** | `/index.html` | Hero showcase, service overview, client proof, metrics, and testimonials |
| **Services Hub** | `/services.html` | Comprehensive catalog of all agency capabilities |
| **Logo Design** | `/logo-design.html` | Custom emblem, monogram, and wordmark design packages |
| **Web Development** | `/web-development.html` | Custom front-end & back-end web design solutions |
| **Ecommerce & Shopify**| `/ecommerce-shopify.html` | Shopify store setups, migrations, and high-conversion UX |
| **Video Animation** | `/video-animation.html` | 2D/3D explainers, promotional videos, and motion graphics |
| **Branding** | `/branding.html` | Full visual systems, typography, color palettes, and brand books |
| **Digital Marketing** | `/digital-marketing.html` | Organic SEO, social growth, and content marketing |
| **Mobile Apps** | `/mobile-apps.html` | iOS & Android applications built with modern frameworks |
| **PPC Advertising** | `/ppc.html` | ROI-focused Google Ads and paid social campaign management |
| **Portfolio** | `/portfolio.html` | Editorial mosaic case study grid with full-resolution lightbox viewer |
| **Pricing** | `/pricing.html` | Transparent package pricing tiers across every service line |
| **About Us** | `/about.html` | Agency history (since 2008), values, and design philosophy |
| **Contact** | `/contact.html` | Interactive inquiry form, office location, phone, and hours |
| **Privacy Policy** | `/privacy.html` | GDPR & CCPA-friendly privacy documentation |
| **Terms of Service** | `/terms.html` | Project scope, deliverables, and service terms |
| **Refund Policy** | `/refund.html` | Satisfaction guarantee and refund processing terms |
| **Disclaimer** | `/disclaimer.html` | Warranty and liability terms |

---

## 🛠️ Tech Stack

- **Markup:** Semantic HTML5 with accessibility attributes (`aria-*`, `role`).
- **Styling:** Vanilla modern CSS3 (Custom Properties / CSS Variables, Flexbox, CSS Grid, clamp typography).
- **Scripts:** Modular vanilla JavaScript (ES6+), zero external runtime libraries, light bundle size.
- **Icons & Graphics:** Inline SVG icons for crisp vector rendering and minimal HTTP requests.
- **SEO:** Open Graph, Twitter Cards, Schema.org JSON-LD.

---

## 🚀 Local Development

To run and preview the website locally on your computer:

### Option 1: VS Code Live Server Extension
1. Open the project folder in **VS Code**.
2. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
```bash
# Python 3.x
python -m http.server 8000
```
Open your browser at [http://localhost:8000](http://localhost:8000).

### Option 3: Node.js (npx serve)
```bash
npx serve .
```
Open your browser at the URL output by the command (typically [http://localhost:3000](http://localhost:3000)).

---

## 🌐 Deployment

The static nature of this codebase makes it compatible with any modern web hosting service:

- **GitHub Pages:** Push to a `main` branch and enable GitHub Pages in repository settings pointing to root `/`.
- **Netlify / Vercel:** Connect the Git repository and set the publish directory to root (`./`).
- **Apache / Nginx:** Upload files to the document root (e.g., `/var/www/html/`).

---

## 📈 SEO & Best Practices

- **Canonical URLs:** Configured in `sitemap.xml` and metadata headers.
- **Search Robots:** Guided by `robots.txt` pointing to `https://codemindscreative.com/sitemap.xml`.
- **Asset Optimization:** Images stored in modern WebP and optimized PNG/JPEG formats with `loading="lazy"` on below-the-fold media.
- **Responsive Typography:** Fluid font sizing with `clamp()` ensuring consistent reading experience across all resolutions.

---

## 📞 Contact & Business Info

- **Agency Name:** Code Minds Creative
- **Address:** 10638 SE 254th Pl, Kent, WA 98030, United States
- **Phone:** [+1 (213) 878-0838](tel:+12138780838)
- **Email:** [info@codemindscreative.com](mailto:info@codemindscreative.com)
- **Business Hours:** Monday – Saturday, 9:00 AM – 6:00 PM PST
- **Website:** [https://codemindscreative.com](https://codemindscreative.com)
