import mongoose from "mongoose";
import { Song } from "./song.model.js";

const albumSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    imageURL: {type: String, required: true},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
}, {timestamps: true});

export const Album = mongoose.model("Album", albumSchema, "Album");

