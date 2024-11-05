import {Router} from "express";
import {UserController} from "../controllers/user.controller";
import {authenticateUser} from "../middlewares/auth.middleware";

const userRouter = Router();
const controller = new UserController();

userRouter.get("/profile", authenticateUser, controller.getProfile);

export default userRouter;
