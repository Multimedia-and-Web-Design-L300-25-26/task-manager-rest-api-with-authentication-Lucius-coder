import express from "express";
import { login, signUpUser } from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", signUpUser);

// POST /api/auth/login
router.post("/login", login);

export default router;
