import { Playlist } from "../models/playlist.model.js";

export const getUserPlaylists = async (req, res) => {
    try {
        const { userID } = req.params;
        const allPlaylists = await Playlist.find({owner: userID});
        res.status(200).json(allPlaylists);
    } catch (error) {
        res.status(400).json({
            message: "Cannot get user playlists",
            error: error.message
        })
    }
}