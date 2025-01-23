import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    songCount: {type: Number, required: true, default: 0},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

export const Playlist = mongoose.model("Playlist", playlistSchema);

