import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const login = async () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin.toString()}/auth-callback`
      }
    });
  }
  return (
    <div>
      This is Home
      {isAuthenticated ? (<Button onClick={() => logout()}>Logout</Button>) : (<Button onClick={() => login()}>Login</Button>)}
    </div>
  )
}

export default Home
