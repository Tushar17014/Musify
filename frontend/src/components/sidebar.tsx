import { cn } from "@/lib/utils"
import { BoomBoxIcon, HomeIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom";

const sideBarLinks = [
    {
        icon: <HomeIcon />,
        route: "/",
        label: "Home"
    },
    {
        icon: <BoomBoxIcon />,
        route: "/library",
        label: "Library"
    },
];

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="sticky left-0 top-0 flex h-[calc(100vh-80px)] w-fit flex-col justify-between bg-black pt-8 text-white max-md:-translate-x-full sm:p-2 xl:p-4 2xl:w-[250px] transition-transform duration-300 ease-in-out" id="sideBarID">
            <nav className="flex flex-col gap-1">
                {sideBarLinks.map((item) => {
                    const isActive = location.pathname === item.route;
                    return (
                        <Link to={item.route} className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {
                            'bg-white/10': isActive
                        })}>
                            {item.icon}
                            <p className="text-16 font-semibold text-black-2 max-xl:hidden">{item.label}</p>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default Sidebar