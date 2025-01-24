import mongoose from "mongoose";
import { Song } from "./song.model.js";
import { User } from "./user.model.js";

const playlistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    imageURL: {type: String, required: false},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

export const Playlist = mongoose.model("Playlist", playlistSchema, "Playlist");

