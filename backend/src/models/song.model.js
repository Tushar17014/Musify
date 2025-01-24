import mongoose from "mongoose";
import { Album } from "./album.model.js"

const songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    imageURL: {type: String, required: true},
    audioURL: {type: String, required: true},
    duration: {type: Number, required: true},
    category: [{type: String, required: true}],
    albumID: {type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: false}
}, {timestamps: true});

export const Song = mongoose.model("Song", songSchema, "Song");

