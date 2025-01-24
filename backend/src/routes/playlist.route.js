import { Router } from "express";
import { getUserPlaylists } from "../controller/playlist.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { checkPlaylistOwner } from "../middleware/user.middleware.js";

const router = Router();

router.get("/getUserPlaylists/:userID", protectedRoute, checkPlaylistOwner, getUserPlaylists)

export default router;