'use client'
import { sidebarNav, sidebarSecondaryNav } from '@/lib/data'
import { Button } from "@/components/ui/button"
import { SidebarIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// type SideBarProps = {
//   isBarOpen: boolean
//   setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>>
// }
const SideBar = () => {

  const pathname = usePathname();
  return (
    <aside className={`hidden h-screen bg-neutral-50 rounded-md border-r-2 left-0 top-0 fixed md:flex md:flex-col px-6 py-5  transition-all duration-300 w-20 xl:w-64`}>
      {/* header */}
      <div className='flex justify-between items-center mb-10'>
        <span className="hidden xl:block text-xl font-semibold tracking-tight">
          Insightify
        </span>

        {/* Mobile toggle (will be used later) */}
        {/* <Button
          size="icon"
          variant="ghost"
          className=''
          onClick={() => setIsBarOpen(!isBarOpen)}
        >
          <SidebarIcon />
        </Button> */}
      </div >

      {/* primary navs */}
      <nav className="flex-1">
        <ul className='flex flex-col gap-3'>
          {sidebarNav.map((item) => {
            const { label, href } = item
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <li key={label}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                 className=" w-full text-sm justify-center xl:justify-start xl:gap-4"
                  asChild
                >
                  <Link href={href}>
                    <Icon className='size-5 shrink-0' />
                    <span className="hidden xl:block">
                      {label}
                    </span>                  
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
                <Button variant="ghost" className=" w-full text-sm justify-center xl:justify-start xl:gap-4"
                  asChild
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span className="hidden xl:block">
                      {item.label}
                    </span>
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
