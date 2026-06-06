'use client'

import { useState } from 'react'
import SideBar from '@/components/layout/SideBar'
import TopBar from '@/components/layout/TopBar'
import MobileSidebar from '@/components/layout/MobileSidebar'

const TOPBAR_HEIGHT = 56 // h-14

export default function AppAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const [isBarOpen, setIsBarOpen] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen">
            <SideBar />

            <MobileSidebar
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
            />

            <div
                className=" min-h-screen transition-all duration-300 ml-0 md:ml-20 xl:ml-64">
                <TopBar
                    onMobileMenuOpen={() =>
                        setIsMobileMenuOpen(true)
                    }
                />
                <main
                    className="px-4 py-6 md:px-6 lg:px-8 lg:py-10"
                    style={{
                        paddingTop: TOPBAR_HEIGHT + 20,
                    }}
                >
                    {children}
                </main>
            </div>
        </div>
    )
}