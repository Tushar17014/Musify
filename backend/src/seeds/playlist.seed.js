import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Playlist } from "../models/playlist.model.js";
import { config } from "dotenv";

config();

const songs = [
    {
        title: "City Rain",
        artist: "Urban Echo",
        imageURL: "/cover-images/7.jpg",
        audioURL: "/songs/7.mp3",
        duration: 39, // 0:39
        category: ["Ambient", "Relaxing", "Instrumental"],
    },
    {
        title: "Neon Lights",
        artist: "Night Runners",
        imageURL: "/cover-images/5.jpg",
        audioURL: "/songs/5.mp3",
        duration: 36, // 0:36
        category: ["Electronic", "Night Vibes", "Synthwave"],
    },
    {
        title: "Urban Jungle",
        artist: "City Lights",
        imageURL: "/cover-images/15.jpg",
        audioURL: "/songs/15.mp3",
        duration: 36, // 0:36
        category: ["Jazz", "Cityscape", "Fusion"],
    },
    {
        title: "Neon Dreams",
        artist: "Cyber Pulse",
        imageURL: "/cover-images/13.jpg",
        audioURL: "/songs/13.mp3",
        duration: 39, // 0:39
        category: ["Synthwave", "Dreamy", "Electronic"],
    },
    {
        title: "Summer Daze",
        artist: "Coastal Kids",
        imageURL: "/cover-images/4.jpg",
        audioURL: "/songs/4.mp3",
        duration: 24, // 0:24
        category: ["Summer", "Feel-Good", "Acoustic"],
    },
    {
        title: "Ocean Waves",
        artist: "Coastal Drift",
        imageURL: "/cover-images/9.jpg",
        audioURL: "/songs/9.mp3",
        duration: 28, // 0:28
        category: ["Ambient", "Nature", "Relaxing"],
    },
    {
        title: "Crystal Rain",
        artist: "Echo Valley",
        imageURL: "/cover-images/16.jpg",
        audioURL: "/songs/16.mp3",
        duration: 39, // 0:39
        category: ["Chill", "Rainy Days", "Acoustic"],
    },
    {
        title: "Starlight",
        artist: "Luna Bay",
        imageURL: "/cover-images/10.jpg",
        audioURL: "/songs/10.mp3",
        duration: 30, // 0:30
        category: ["Romantic", "Dreamy", "Pop"],
    },
    {
        title: "Stay With Me",
        artist: "Sarah Mitchell",
        imageURL: "/cover-images/1.jpg",
        audioURL: "/songs/1.mp3",
        duration: 46, // 0:46
        category: ["Pop", "Love", "Acoustic"],
    },
    {
        title: "Midnight Drive",
        artist: "The Wanderers",
        imageURL: "/cover-images/2.jpg",
        audioURL: "/songs/2.mp3",
        duration: 41, // 0:41
        category: ["Night Vibes", "Roadtrip", "Rock"],
    },
    {
        title: "Moonlight Dance",
        artist: "Silver Shadows",
        imageURL: "/cover-images/14.jpg",
        audioURL: "/songs/14.mp3",
        duration: 27, // 0:27
        category: ["Romantic", "Instrumental", "Jazz"],
    },
    {
        title: "Lost in Tokyo",
        artist: "Electric Dreams",
        imageURL: "/cover-images/3.jpg",
        audioURL: "/songs/3.mp3",
        duration: 24, // 0:24
        category: ["Electronic", "Ambient", "Dreamy"],
    },
    {
        title: "Neon Tokyo",
        artist: "Future Pulse",
        imageURL: "/cover-images/17.jpg",
        audioURL: "/songs/17.mp3",
        duration: 39, // 0:39
        category: ["Electronic", "Cityscape", "Synthwave"],
    },
    {
        title: "Purple Sunset",
        artist: "Dream Valley",
        imageURL: "/cover-images/12.jpg",
        audioURL: "/songs/12.mp3",
        duration: 17, // 0:17
        category: ["Ambient", "Relaxing", "Nature"],
    },
];


const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Clear existing data
        await Playlist.deleteMany({});
        await Song.deleteMany({});

        // First, create all songs
        const createdSongs = await Song.insertMany(songs);

        // Create albums with references to song IDs
        const albums = [
            {
                title: "Custom 1",
                imageURL: "/brown_munde.png",
                songs: createdSongs.slice(0, 4).map((song) => song._id),
                owner: '67938207bf56aeb7835835cd'
            },
            {
                title: "Custom 2",
                imageURL: "/brown_munde.png",
                songs: createdSongs.slice(4, 8).map((song) => song._id),
                owner: '67938207bf56aeb7835835cd'
            },
            {
                title: "Custom 3",
                imageURL: "/brown_munde.png",
                songs: createdSongs.slice(8, 11).map((song) => song._id),
                owner: '67938207bf56aeb7835835cd'
            },
            {
                title: "Custom 4",
                imageURL: "/brown_munde.png",
                songs: createdSongs.slice(11, 14).map((song) => song._id),
                owner: '67938207bf56aeb7835835cd'
            },
        ];

        const createdPlaylists = await Playlist.insertMany(albums);
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();