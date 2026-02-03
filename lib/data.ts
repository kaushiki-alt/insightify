import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Home,
} from "lucide-react";

export const sidebarNav = [
    {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/app/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/app/users",
    icon: Users,
  },
  {
    label: "Products",
    href: "/app/products",
    icon: Package,
  },
  {
    label: "Orders",
    href: "/app/orders",
    icon: ShoppingCart,
  },
  {
    label: "Analytics",
    href: "/app/analytics",
    icon: BarChart3,
  },
];

export const sidebarSecondaryNav = [
  {
    label: "Settings",
    href: "/app/settings",
    icon: Settings,
  },
];
