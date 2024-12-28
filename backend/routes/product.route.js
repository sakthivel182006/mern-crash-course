import express from "express";
import { createproduct, deleteproduct, getProducts, putproduct } from "../controllers/product.controller.js"; // Ensure the path is correct
const router = express.Router();

router.get('/', getProducts);
router.post('/', createproduct);
router.put('/:id', putproduct);
router.delete('/:id', deleteproduct);

export default router;
