# 🚀 Mechnova Machines - Website Frontend

Welcome to the official frontend for [Mechnova Machines](https://mechnovamachines.com) — a modern, high-performance product catalog and business website built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

---

## 🛠️ Getting Started

To run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🗂️ Project Structure

```
frontend/
├── app/
│   ├── layout.js            # Main layout (header/footer)
│   ├── page.js              # Home page
│   └── products/
│       ├── page.js          # Products grid page
│       ├── category.json    # Product/category metadata (Spanish)
│       ├── modelData.json   # All product & model data (Spanish)
│       └── [slug]/
│           └── page.js      # Product detail (slug) page
├── components/
│   ├── layouts/
│   │   ├── header.js        # Site header
│   │   └── footer.js        # Site footer
│   └── sections/            # Home/landing page sections
├── data/                    # Raw product data (CSV/JSON)
├── public/                  # Static assets (images, icons, etc.)
├── lib/                     # Translation and utility files
├── package.json             # Project dependencies/scripts
└── README.md                # This file
```

---

## ✨ Features

- **Dynamic Product Catalog:**
  - Categories and products are managed via `category.json` and `modelData.json` (Spanish).
  - Each product has a beautiful detail page with hero banner, alternating model layouts, and full specs.
- **Modern UI:**
  - Responsive, mobile-first design using Tailwind CSS.
  - Custom hero banners, product cards, and section layouts.
- **Internationalization Ready:**
  - Translation files and hooks in `lib/` for future multi-language support.
- **Image Fallbacks:**
  - Broken product/model images automatically fall back to a default per-category image.
- **Easy Data Management:**
  - All product/category/model data is managed in JSON/CSV for easy updates.
- **SEO & Performance:**
  - Optimized images, meta tags, and fast-loading pages.

---

## 📁 Key Files & Folders

- `app/products/page.js` — Main products grid page (category sections, product cards)
- `app/products/[slug]/page.js` — Product detail page (slug-based, dynamic)
- `app/products/category.json` — Category and product metadata (Spanish)
- `app/products/modelData.json` — All product and model data (Spanish)
- `components/layouts/header.js` & `footer.js` — Site navigation and footer
- `components/sections/` — Home/landing page sections (hero, faqs, testimonials, etc.)
- `public/` — All static images (banners, product images, icons)
- `data/` — Source data (CSV, JSON)

---

## 🌐 Production

- **Live Site:** [https://mechnovamachines.com](https://mechnovamachines.com)
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (React)

---

## 📝 Notes

- This is a private business project for Mechnova Machines. The repository is public for deployment and collaboration, but it is **not open source**.
- All product and model data is managed via JSON/CSV files in the repository.
- For any issues or collaboration requests, please contact the project owner via the website.

---

## 👨‍💻 Developer

- Developed with ❤️ by [**Nakul**](mailto:jaglan.nakul@gmail.com)

---

<p align="center">
  <img src="https://www.mechnovamachines.com/logo.png" alt="Mechnova Machines Logo" width="120" />
</p>
