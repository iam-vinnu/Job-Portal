import express from "express";
import { login, register, updateProfile } from "../controllers/user.controller.js";
import isAunthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAunthenticated,updateProfile);

export default router;