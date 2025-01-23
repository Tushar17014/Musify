import { Card, CardContent } from '@/components/ui/card'
import { axiosInstance } from '@/lib/axios';
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from 'lucide-react'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate();
  const hasSynced = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if(isLoading || !user || hasSynced.current) return ;
      try {
        hasSynced.current = true;
        
        await axiosInstance.post("/auth/auth-callback", {
          authID: user?.sub,
          firstName: user?.given_name,
          lastName: user?.family_name,
          imageURL: user?.picture
        });
      } catch (error) {
        console.error("Error in Sync User ", error);
      } finally {
        navigate("/");
      }
    };
    syncUser();
  }, [isLoading, user, navigate]);
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <Card className='w-[90%] max-w-md bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col items-center gap-4 pt-6'>
          <Loader className='size-6 text-red-700 animate-spin'/>
          <h3 className='text-zinc-400 text-xl font-bold'>Logging you in</h3>
          <p className='text-zinc-400 text-sm'>Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthCallback
