import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import ProfileNav from "./profileNav";

const Topbar = () => {
    const handleBurgerToggle = () => {
        if(document.getElementById("sideBarID")?.classList.contains('-translate-x-full')){
            document.getElementById("sideBarID")?.classList.remove('-translate-x-full');
            document.getElementById("sideBarID")?.classList.add('translate-x-0');
            document.getElementById("sideBarID")?.classList.remove('hidden');
        }
        else{
            document.getElementById("sideBarID")?.classList.remove('translate-x-0');
            document.getElementById("sideBarID")?.classList.add('-translate-x-full');
            document.getElementById("sideBarID")?.classList.add('hidden');
        }
    }
    return (
        <div className="min-h-20 p-3 items-center flex justify-between bg-black border-y-2 w-full">
            <div className="flex items-center gap-5 pl-2 max-xl:gap-2 max-xl:pl-0">
                <div className="cursor-pointer p-2 hover:bg-white/10 rounded-full active:bg-white/15" onClick={handleBurgerToggle}>
                    <MenuIcon />
                </div>
                <Link to="/" className="cursor-pointer gap-2 flex items-center">
                    <img src="/logo_icon.png" className="size-[40px] max-xl:size-8" />
                    <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-semibold max-xl:text-sm">Musify</h1>
                </Link>
            </div>
            <div className="w-full ml-52 mr-52 min-w-[300px] max-xl:ml-32 max-xl:mr-32 max-md:ml-10 max-md:mr-10">
                <SearchBar />
            </div>
            <div>
                <ProfileNav />
            </div>
        </div>
    );
}

export default Topbar