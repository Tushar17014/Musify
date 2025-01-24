import mongoose from "mongoose";
import { Playlist } from "./playlist.model.js";

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    imageURL: {type: String, required: true},
    authID: {type: String, required: true, unique: true},
    playlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}]
}, {timestamps: true});

export const User = mongoose.model("User", userSchema, "User");

