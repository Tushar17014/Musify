import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './lib/db.js';

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import adminRoutes from './routes/admin.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';
import playlistRoutes from './routes/playlist.route.js';
import statRoutes from './routes/stat.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
    console.log("Server running on port ", + PORT);
    connectDB();
})