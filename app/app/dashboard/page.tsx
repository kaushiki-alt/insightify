import ChartContainer from '@/components/dashboard/ChartContainer';
import KpiCardContainer from '@/components/dashboard/KpiCardContainer'
import { ChartRevenue, getTopNCategory, simulateCategoryRevenue, simulateWeeklyRevenue } from '@/lib/utils';
import React from 'react'

const base_url = 'https://dummyjson.com';

async function getDashBoardData() {
  const [usersRes, productsRes, ordersRes] = await Promise.all([
    fetch(`${base_url}/users`),
    fetch(`${base_url}/products?limit=200`),
    fetch(`${base_url}/carts?limit=100`),
  ]);

  if (!usersRes.ok || !productsRes.ok || !ordersRes.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  const usersData = await usersRes.json();
  const productsData = await productsRes.json();
  const ordersData = await ordersRes.json();

  const dashboardData = {
    users: usersData.users || [],
    products: productsData.products || [],
    orders: ordersData.carts || []
  }

  return dashboardData;
}

async function DashboardPage() {
  const { users, orders, products } = await getDashBoardData();
  const totalUsers: number = users.length;
  const totalProducts: number = products.length;
  const totalOrders: number = orders.length;
  const totalRevenue: number = orders.reduce((sum: number, order: any) => sum + order.total, 0)
  const kpiData = [
    { label: "Total Users", value: totalUsers },
    { label: "Products", value: totalProducts },
    { label: "Orders", value: totalOrders },
    { label: "Revenue", value: `$${totalRevenue.toFixed(2)}` },
  ];

  const weeklyRevenue: ChartRevenue[] = simulateWeeklyRevenue(orders)
  const categoryRevenueWithAov: ChartRevenue[] = getTopNCategory(simulateCategoryRevenue(products,orders),5, "aov");
  const categoryRevenue: ChartRevenue[] = getTopNCategory(simulateCategoryRevenue(products,orders),5, "revenue");  
    
  return (
    <>
      <KpiCardContainer data={kpiData} />
      <ChartContainer revenueData={weeklyRevenue} categoryData={categoryRevenue} aovData={categoryRevenueWithAov}/>
    </>
  )
}

export default DashboardPage


// ask for number for category data for chart...(getTopNCategory())
