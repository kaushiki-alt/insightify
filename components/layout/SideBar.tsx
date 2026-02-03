import { sidebarNav, sidebarSecondaryNav } from '@/lib/data'
import { Button } from "@/components/ui/button"
import { SidebarIcon } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <aside className='h-screen w-64 bg-neutral-50 rounded-md border-r-2 left-0 top-0 fixed flex flex-col px-6 py-5'>
      {/* header */}
      <div className='flex justify-between items-center mb-10'>
        <span className="text-xl font-semibold tracking-tight">
          Insightify
        </span>

        {/* Mobile toggle (will be used later) */}
        <SidebarIcon className="h-6 w-6 md:hidden cursor-pointer" />
      </div >

      {/* primary navs */}
      <nav className="flex-1">
        <ul className='flex flex-col gap-1'>
          {sidebarNav.map((item) => {
            const { label, href } = item
            const Icon = item.icon
            return (
              <li key={label}>
                <Button variant="ghost" className='w-full justify-start gap-4 text-md' asChild>
                  <Link href={href}>
                    <Icon className='size-5' />
                    <span>{label}</span>
                  </Link>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Secondary Navs */}
      <div className="pt-4 border-t">
        <ul className="flex flex-col gap-1">
          {sidebarSecondaryNav.map((item) => {
            const Icon = item.icon

            return (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-4 text-md"
                  asChild
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar

// onclick setup of sidebar icon