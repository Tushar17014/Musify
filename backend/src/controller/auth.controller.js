import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
    try {
        const {authID, firstName, lastName, imageURL} = req.body;

        const user = await User.findOne({authID: authID});

        if(!user){
            await User.create({
                authID,
                firstName,
                lastName,
                imageURL
            })
        }

        res.status(200).json({success: true});
    } catch (error) {
        console.error("Error in Auth Callback: ", error);
        res.status(500).json({message: "Internal Server Error", error});
    }
}