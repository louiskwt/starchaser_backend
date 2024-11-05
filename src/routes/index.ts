import {Router} from "express";
import healthRouter from "./health.routes";
import userRouter from "./user.rotues";
// Import other route files here

const router = Router();

router.use("/health", healthRouter);
router.use("/profile", userRouter);

// Add other routes here

export default router;
