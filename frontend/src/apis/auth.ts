import { axiosInstance } from "@/lib/axios"

export const getUserID = async (authID: string | undefined) => {
    try {
        const response = await axiosInstance.get(`/user/getUserID/${authID}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetching user id");
        return null;
    }
}