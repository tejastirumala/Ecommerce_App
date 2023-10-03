import express from 'express';
import {
    registerController
} from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce!</h1>");
});

router.post("/register", registerController);

export default router;