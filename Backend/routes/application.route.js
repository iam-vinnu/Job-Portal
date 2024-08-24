import express from "express";
import isAunthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJob, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(isAunthenticated,applyJob);
router.route("/get").get(isAunthenticated,getAppliedJob);
router.route("/:id/applicants").get(isAunthenticated,getApplicants);
router.route("/status/:id/update").post(isAunthenticated,updateStatus);

export default router;