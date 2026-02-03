import SideBar from "@/components/layout/SideBar"
import TopBar from "@/components/layout/TopBar"

const SIDEBAR_WIDTH = 256   // w-64
const TOPBAR_HEIGHT = 56    // h-14

export default function AppAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            <SideBar />
            <div
                className="min-h-screen"
                style={{ marginLeft: SIDEBAR_WIDTH }}
            >
                <TopBar />
                <main
                    className="px-6 py-10"
                    style={{ paddingTop: TOPBAR_HEIGHT + 20 }}
                >
                    {children}
                </main>
            </div>
        </div>
    )
}
