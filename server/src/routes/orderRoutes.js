import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderController.js";
import { protect, restrictTo } from "../middleware/auth.js";

const router = express.Router();

// All routes are protected
router.use(protect);

// User routes
router.post("/", createOrder);
router.get("/my-orders", getMyOrders);
router.get("/:id", getOrder);
router.patch("/:id/cancel", cancelOrder);

// Admin routes
router.patch("/:id/status", restrictTo("admin"), updateOrderStatus);

export default router;
