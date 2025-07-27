import express from "express";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, restrictTo } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProduct);

// Protected routes (admin only)
router.use(protect);
router.use(restrictTo("admin"));

router.post("/", upload.array("images", 5), createProduct);
router.patch("/:id", upload.array("images", 5), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
