import { User } from "../models/user.model.js";

export const getUserID = async (req, res) => {
    try {
        const { authID } = req.params;
        const user = await User.findOne({authID: authID});
        res.status(200).json(user._id);
    } catch (error) {
        res.status(400).json({
            message: "Cannot get user playlists",
            error: error.message
        })
    }
}