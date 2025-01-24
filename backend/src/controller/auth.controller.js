import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
    try {
        const { authID, firstName, lastName, imageURL } = req.body;

        const user = await User.findOne({ authID: authID });

        if (!user) {
            await User.create({
                authID,
                firstName,
                lastName,
                imageURL
            })
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error in Auth Callback: ", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

export const checkAdmin = async (req, res, next) => {
    try {
        const authID = req.auth.payload.sub;
        const user = await User.findOne({ authID: authID });
        const isAdmin = process.env.ADMIN_AUTH_ID === user.authID;
        if (!isAdmin) {
            return res.status(200).json({admin: false});
        }
    } catch (error) {
        console.error("Error in check Admin", error);
        return res.status(400).json({admin: false});
    }
    return res.status(200).json({ admin: true });
};