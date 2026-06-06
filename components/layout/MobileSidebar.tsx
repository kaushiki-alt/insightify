import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    sidebarNav,
    sidebarSecondaryNav,
} from "@/lib/data"

import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet"



type MobileSidebarProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}
function MobileSidebar({ open, onOpenChange }: MobileSidebarProps) {
    const pathname = usePathname()
    return (
        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >
            <SheetContent side="left" className="w-72 px-4 py-6">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Insightify
                    </h2>
                </div><nav>
                    <ul className="flex flex-col gap-1">
                        {sidebarNav.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <li key={item.label}>
                                    <Button
                                        asChild
                                        variant={isActive ? "default" : "ghost"}
                                        className="w-full justify-start gap-4"
                                    >
                                        <Link href={item.href} onClick={() => onOpenChange(false)}>
                                            <Icon className="size-5" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="mt-6 border-t pt-4">
                    <ul className="flex flex-col gap-1">
                        {sidebarSecondaryNav.map((item) => {
                            const Icon = item.icon

                            return (
                                <li key={item.label}>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start gap-4"
                                    >
                                        <Link href={item.href} onClick={() => onOpenChange(false)} >
                                            <Icon className="size-5" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar
