import express from "express";
import {
  register,
  login,
  getMe,
  updateMe,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.use(protect);
router.get("/me", getMe);
router.patch("/me", updateMe);

export default router;
