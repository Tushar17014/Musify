import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getUserID } from "../controller/user.controller.js";

const router = Router();

router.get("/getUserID/:authID", protectedRoute, getUserID)

export default router;