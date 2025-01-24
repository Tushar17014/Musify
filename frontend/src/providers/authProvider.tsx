import { checkAdmin } from "@/features/auth/authSlice";
import { axiosInstance } from "@/lib/axios";
import { useAuth0 } from "@auth0/auth0-react"
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const updateApiToken = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const { getAccessTokenSilently } = useAuth0();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getAccessTokenSilently();
                updateApiToken(token);
                const adminCheck = await axiosInstance.get("/auth/checkAdmin");
                const isAdmin = adminCheck?.data.admin;
                if(token && isAdmin) dispatch(checkAdmin(isAdmin));
            } catch (error) {
                updateApiToken(null);
                console.error("Error in Auth Provider: ", error);
            } finally {
                setLoading(false);
            }
        };
        initAuth();
    }, [getAccessTokenSilently])

    if (loading) {
        return(
            <div className="h-screen w-full flex items-center justify-center">
                <Loader className="size-8 text-red-700 animate-spin" />
            </div>
        )
    }
    return (
        <>
            { children }
        </>
    )
}

export default AuthProvider
