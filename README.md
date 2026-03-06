# Insightify – SaaS Admin Dashboard

Insightify is a modern SaaS-style admin dashboard built with **Next.js (App Router)** and **TypeScript**, focused on scalable architecture and data-driven UI patterns.

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

### 👥 Users Management

#### Users List
- Data-driven users table
- Clickable rows for seamless navigation to user details
- Dynamic routing using `app/users/[id]`
- Skeleton loading states for improved perceived performance
- Route-level error boundaries for fault handling

#### User Details Page

A structured detail view for each user including:

- Personal information card
- Address information
- Bank details
- Account overview metrics

##### Account Overview
- Status badge (Active / Pending / Suspended)
- Account creation date
- Last login timestamp

The page layout uses a responsive grid with a primary detail panel and secondary information cards.

---

### 🎨 UI / UX Patterns

- Skeleton loaders for smooth loading states
- Route-level error handling using Next.js `error.tsx`
- Reusable UI components
- Responsive layout using Tailwind CSS
- Badge-based status indicators
- Data-driven component rendering

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Charts:** Recharts
- **Icons:** Lucide Icons
- **API:** DummyJSON

---


## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- DummyJSON API
