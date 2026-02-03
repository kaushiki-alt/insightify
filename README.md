# Insightify – SaaS Admin Dashboard

Insightify is a **SaaS-style admin dashboard** built with **Next.js App Router**, focused on **clean architecture, scalable layout, and data-driven UI**.

This project is being developed incrementally to practice **real-world frontend + Next.js patterns**, not as a tutorial clone.

---

## ✨ Current Features (Implemented)

### 🧭 Application Layout
- Fixed **Sidebar** with data-driven navigation
- Fixed **Topbar** with:
  - Active page title (derived from route)
  - Global action placeholders (notifications, theme toggle)
- Scalable layout structure suitable for dashboards

### 📊 Dashboard Page (In Progress)
- Server-side data fetching using **Next.js Server Components**
- Parallel API requests using `Promise.all`
- **KPI cards** powered by real data:
  - Total Users
  - Total Products
  - Total Orders
  - Total Revenue
- Clean data flow:

