import { cn } from "@/lib/utils"
import { BoomBoxIcon, HomeIcon, ListMusic } from "lucide-react"
import { Link, useLocation } from "react-router-dom";
import PlaylistSidebarCard from "./playlistSidebarCard";
import PlaylistSidebarCardSkeleton from "@/skeletons/playlistSidebarCardSkeleton";
import { ScrollArea } from "./ui/scroll-area";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getUserPlaylists } from "@/apis/playlist";
import { useDispatch } from "react-redux";
import { setUserID } from "@/features/auth/authSlice";
import { getUserID } from "@/apis/auth";
import { Button } from "./ui/button";

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
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userPlaylists, setUserPlaylists] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserID = async () => {
            const res = await getUserID(user?.sub);
            setUserId(res);
            dispatch(setUserID(res));
        };
        fetchUserID();
    }, [isAuthenticated]);

    useEffect(() => {
        const fetchUserPlaylists = async () => {
            if (userId) {
                const res = await getUserPlaylists(userId);
                setUserPlaylists(res);
                setLoading(false);
            }
        };
        fetchUserPlaylists();
    }, [userId]);

    const login = async () => {
        loginWithRedirect({
            authorizationParams: {
                redirect_uri: `${window.location.origin.toString()}/auth-callback`
            }
        });
    }

    return (
        <div className="sticky left-0 top-0 flex h-[calc(100vh-80px)] w-fit flex-col bg-black pt-8 text-white max-md:hidden sm:p-2 xl:p-4 2xl:w-[250px] transition-transform duration-300 ease-in-out" id="sideBarID">
            <nav className="flex flex-col gap-1">
                {sideBarLinks.map((item, idx) => {
                    const isActive = location.pathname === item.route;
                    return (
                        <Link to={item.route} key={idx} className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {
                            'bg-white/10': isActive
                        })}>
                            {item.icon}
                            <p className="text-16 font-semibold text-black-2 max-xl:hidden">{item.label}</p>
                        </Link>
                    )
                })}
            </nav>

            <div className="w-full h-px bg-white/30 mt-4 mb-2" />

            {/* Playlist Section */}

            <div className="flex flex-col gap-3">
                <div className="flex gap-5 items-center pl-3 max-xl:justify-center max-xl:pl-0">
                    <ListMusic />
                    <p className="text-lg font-semibold max-xl:hidden">Playlists</p>
                </div>
                {isAuthenticated ? (
                    <>
                        {loading ? (
                            <PlaylistSidebarCardSkeleton count={3} />
                        ) : (
                            <ScrollArea className="h-80">
                                {userPlaylists.map((playlist: PlaylistSidebarCardProps, idx) => (
                                    <PlaylistSidebarCard title={playlist.title} imageURL={playlist.imageURL} numberOfSongs={playlist.songs?.length} key={idx} />
                                ))}
                            </ScrollArea>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Button className="rounded-full w-full" variant="secondary" onClick={login}>Sign In</Button>
                        <p className="text-xs text-white/50">Sign in to create & view your playlists!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar