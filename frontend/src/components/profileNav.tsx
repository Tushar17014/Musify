import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react"
import { Button } from "./ui/button";

const ProfileNav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const login = async () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin.toString()}/auth-callback`
      }
    });
  }

  return (
    <div>
      {isAuthenticated ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={user?.picture} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <div className="flex items-center gap-4">
                <Avatar className="size-14">
                  <AvatarImage src={user?.picture} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Tushar Sharma</h3>
                  <p className="text-gray-400 text-xs">tushar17014@gmail.com</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-800 mt-4 mb-2" />

              <div>
                <div className="flex gap-4 cursor-pointer p-2 items-center hover:bg-white/5" onClick={()=> logout()}>
                  <LogOut />
                  <p className="font-semibold">Logout</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Button className="rounded-full" onClick={()=>login()}>Login</Button>
      )}
    </div>
  )
}

export default ProfileNav
