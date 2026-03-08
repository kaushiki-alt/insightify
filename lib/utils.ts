import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ExtendedUser, Order_cat, OrderProduct, Product, User } from "./types"
import { redirect } from "next/navigation"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Order = {
  total: number
}

export type ChartRevenue = {
  label: string
  revenue: number
  orders?: number
  aov?: number
}


export function simulateWeeklyRevenue(
  orders: Order[]
): ChartRevenue[] {
  const DAYS_WINDOW = 30
  const WEEKS = 4

  const today = new Date()
  const startDate = new Date()
  startDate.setDate(today.getDate() - DAYS_WINDOW)

  // Initialize weekly buckets
  const weeklyBuckets: ChartRevenue[] = Array.from(
    { length: WEEKS },
    (_, index) => ({
      label: `Week ${index + 1}`,
      revenue: 0,
    })
  )

  const ordersPerWeek = Math.ceil(orders.length / WEEKS)

  // Aggregate revenue
  orders.forEach((order, index) => {
    const weekIndex = Math.min(
      Math.floor(index / ordersPerWeek),
      WEEKS - 1
    )

    weeklyBuckets[weekIndex].revenue += order.total
  })

  // ✅ Round AFTER full aggregation (best practice)
  const roundedBuckets = weeklyBuckets.map(bucket => ({
    ...bucket,
    revenue: Math.round(bucket.revenue * 100) / 100,
  }))

  return roundedBuckets
}


export function simulateCategoryRevenue(products_data: Product[], orders_data: Order_cat[]): ChartRevenue[] {
  const categoryMap: Record<string, {
    revenue: number,
    orders: number
  }> = {};
  const product_category: Record<number, string> = {};

  products_data.forEach((product) => {
    product_category[product.id] = product.category;
  })

  orders_data.forEach(order => {
    const categoryPerOrder = new Set<string>();
    order.products.forEach((product) => {

      const { id, discountedTotal } = product;

      const category = product_category[id] ?? "Unknown";
      categoryPerOrder.add(category);
      const productRevenue = discountedTotal;

      if (!categoryMap[category]) {
        categoryMap[category] = { revenue: 0, orders: 0 }
      }
      categoryMap[category].revenue += productRevenue;
      categoryPerOrder.forEach((category) => (
        categoryMap[category].orders += 1
      ))
    })
  });

  const categoryRevenue: ChartRevenue[] = Object.entries(categoryMap).map(([label, data]) => {
    const revenue = Math.round(data.revenue * 100) / 100
    const aov = data.orders > 0 ? (revenue / data.orders).toFixed(2) : 0
    return {
      label,
      revenue,
      orders: data.orders,
      aov : Number(aov)
    }
  })

  return categoryRevenue;
}

  type SortKey = "orders" | "aov" | "revenue";

export function getTopNCategory(categoryRevenue: ChartRevenue[], n: number, sortBy:SortKey): ChartRevenue[] {
  if (categoryRevenue.length <= n) {
    return categoryRevenue
  }


const sorted = [...categoryRevenue].sort(
  (a, b) => (b[sortBy] ?? 0) - (a[sortBy] ?? 0)
);

  const topN = sorted.slice(0, n);
  const othersRevenue = sorted.slice(n,).reduce((sum: number, item: ChartRevenue) => sum + item.revenue, 0);
  const otherOrders = sorted.slice(n,).reduce((sum: number, item: ChartRevenue) => sum + (item.orders ?? 0), 0);
  const aov = otherOrders > 0 ? Math.round((othersRevenue / otherOrders) * 100) / 100 : 0

  const others = {
    label: "Others",
    revenue: Math.round(othersRevenue * 100) / 100,
    orders: otherOrders,
    aov
  }

  return [
    ...topN, others
  ];
}

// fetching users data 


export async function getUsers(base_url: string): Promise<User[]> {  
  const usersRes = await fetch(`${base_url}`)
  if (!usersRes.ok) {
    throw new Error("Failed to fetch users data");
  }
  const usersData = await usersRes.json();
  return usersData.users;

}

export async function getUserByID(base_url: string, id: number): Promise<ExtendedUser> {
  if (!id || isNaN(id)) {
    redirect('/');
  }
  const usersRes = await fetch(`${base_url}/${id}`)
  if (!usersRes.ok) {
    throw new Error("Failed to fetch users data");
  }
  const userData = await usersRes.json();
const extendedUser: ExtendedUser = {
  ...userData,

  status:
    userData.age > 40
      ? "suspended"
      : userData.age > 25
      ? "active"
      : "pending",

  emailVerified: userData.id % 2 === 0,

  createdAt: new Date(
    2022,
    userData.id % 12,
    userData.id % 28
  ).toISOString(),

  lastLogin: new Date(
    Date.now() - userData.id * 10000000
  ).toISOString(),
};

return extendedUser;

}