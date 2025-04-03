import express from "express";
import { registerUser, getRegistrations } from "../controllers/registrationController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/register", upload.single("bloodReport"), registerUser);
router.get("/registrations", getRegistrations);

export default router;
