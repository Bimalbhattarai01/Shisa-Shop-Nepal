import { Router } from "express";
import {
  createFlavor,
  deleteFlavor,
  getFlavorById,
  getFlavors,
  updateFlavor
} from "../controllers/flavorController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.get("/", getFlavors);
router.get("/:id", getFlavorById);
router.post("/", authenticate, createFlavor);
router.put("/:id", authenticate, updateFlavor);
router.delete("/:id", authenticate, deleteFlavor);

export default router;
