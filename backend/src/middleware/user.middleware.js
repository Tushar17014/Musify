import { User } from "../models/user.model.js";

export const checkPlaylistOwner = async (req, res, next) => {
    try {
        const authID = req.auth.payload.sub;
        const user = await User.findOne({ authID });
        if(!user || user._id.toString() != req.params.userID){
            return res.status(401).json({
                message: 'Unauthoized access - Cannot access the data you are trying to fetch!',
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: 'Error in Checking the owner of playlist',
            error: err.message,
        });
    }
    next();
}