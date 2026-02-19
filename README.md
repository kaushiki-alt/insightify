# Insightify – SaaS Admin Dashboard

Insightify is a modern SaaS-style admin dashboard built with **Next.js (App Router)** and **TypeScript**, focused on scalable architecture and data-driven UI patterns.

---

## 🚀 Features

### 🧭 Layout
- Fixed Sidebar with data-driven navigation
- Fixed Topbar with active route detection
- Modular and scalable dashboard structure

### 📊 Dashboard Analytics
- Server-side data fetching using Next.js Server Components
- Parallel API requests with `Promise.all`
- Clean separation between data orchestration and UI

#### KPI Metrics
- Total Users
- Total Products
- Total Orders
- Total Revenue

#### Revenue Trend
- Weekly revenue aggregation (last 30 days)
- Time-bucket simulation
- Client-side chart rendering (Recharts)

#### Revenue Per Category
- Relational aggregation between carts and products
- Top category comparison (sorted)

#### AOV Per Category
- Average Order Value computation
- Category-based distribution

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- DummyJSON API
