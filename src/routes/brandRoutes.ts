import { Router } from "express";
import {
  createBrand,
  deleteBrand,
  getBrandById,
  getBrands,
  updateBrand
} from "../controllers/brandController";
import { authenticate } from "../middleware/auth";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getBrands);
router.get("/:id", getBrandById);
router.post("/", authenticate, upload.single("logo"), createBrand);
router.put("/:id", authenticate, upload.single("logo"), updateBrand);
router.delete("/:id", authenticate, deleteBrand);

export default router;
