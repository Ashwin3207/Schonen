import express from 'express';
import { createProductController, getProductsByCategoryController } from '../controllers/productController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/products', requireSignIn, createProductController);
router.get('/products/:categoryId', getProductsByCategoryController);

export default router;
