// import React from 'react'

// function TopBar() {
//   return (
//     <div className='fixed top-0 left-62 border-b-2 bg-neutral-50 w-screen h-16 rounded-md px-6 py-5 '>
//       <div className="left-bar">

//       </div>
//     </div>
//   )
// }

// export default TopBar

"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { sidebarNav } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Bell, Sun, User, Menu } from "lucide-react"

type TopBarProps = {
  // isBarOpen: boolean
  // sidebarWidth: number
  onMobileMenuOpen: () => void
}

const Topbar = ({  onMobileMenuOpen }: TopBarProps) => {
  const pathname = usePathname()

  // derive active tab safely
  const activeItem = useMemo(() => {
    return sidebarNav.find(item =>
      pathname === item.href || pathname.startsWith(item.href + "/")
    )
  }, [pathname])

  return (
    <header
      className={` md:left-20 xl:left-64  left-0 right-0 fixed top-0 z-40 h-14 border-b bg-neutral-50 flex items-center justify-between  px-6 transition-all duration-300`}
    >
      {/* LEFT: active page title */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMobileMenuOpen}
        >
          <Menu className="size-5" />
        </Button>

        <h2 className="text-xl font-semibold tracking-wide">
          {activeItem?.label ?? "Dashboard"}
        </h2>
      </div>

      {/* RIGHT: global actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <Sun className="h-4 w-4" />
        </Button>

        {/* User avatar */}
        <div
          className="
            h-8 w-8 rounded-full
            bg-neutral-200
            flex items-center justify-center
            text-sm font-medium
          "
        >
          <User className="size-4" />
        </div>
      </div>
    </header>
  )
}

export default Topbar
