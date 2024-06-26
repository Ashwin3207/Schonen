import express from 'express';
import { createCategoryController, getCategoryController } from '../controllers/categoryController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/categories', requireSignIn, createCategoryController);
router.get('/categories', getCategoryController);

export default router;