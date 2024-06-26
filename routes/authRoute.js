import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Register Route
router.post('/register', registerController);

// Login Route
router.post('/login', loginController);

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

export default router;
