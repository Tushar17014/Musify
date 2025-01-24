import { axiosInstance } from "@/lib/axios"

export const getUserPlaylists = async (userID: string) => {
    try {
        const response = await axiosInstance.get(`/playlist/getUserPlaylists/${userID}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetching User Playlists!");
        return null;
    }
}