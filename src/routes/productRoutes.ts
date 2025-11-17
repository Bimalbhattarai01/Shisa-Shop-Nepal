import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct
} from "../controllers/productController";
import { authenticate } from "../middleware/auth";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", authenticate, upload.array("images", 5), createProduct);
router.put("/:id", authenticate, upload.array("images", 5), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
