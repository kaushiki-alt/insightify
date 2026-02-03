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
import { Bell, Sun, User } from "lucide-react"

const SIDEBAR_WIDTH = 256 

const Topbar = () => {
  const pathname = usePathname()

  // derive active tab safely
  const activeItem = useMemo(() => {
    return sidebarNav.find(item =>
      pathname === item.href || pathname.startsWith(item.href + "/")
    )
  }, [pathname])

  return (
    <header
      className="
        fixed top-0 z-40 h-14 border-b bg-neutral-50 flex items-center justify-between px-6"
      style={{
        left: SIDEBAR_WIDTH,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      {/* LEFT: active page title */}
      <div>
      
        <h1 className="text-lg font-semibold tracking-tight">
          {activeItem?.label ?? "Dashboard"}
        </h1>
      </div>

      {/* RIGHT: global actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Toggle theme">
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
          <User className="size-4"/>
        </div>
      </div>
    </header>
  )
}

export default Topbar
