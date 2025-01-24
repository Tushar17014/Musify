import { Router } from "express";
import { authCallback, checkAdmin } from "../controller/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/auth-callback", protectedRoute, authCallback);
router.get("/checkAdmin", protectedRoute, checkAdmin);

export default router;