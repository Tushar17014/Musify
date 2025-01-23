import Sidebar from "@/components/sidebar"
import Topbar from "@/components/topbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div className="h-screen">
            <Topbar />
            <div className="w-full flex">
            <Sidebar />
            <Outlet />
            </div>
        </div>
    )
}

export default MainLayout