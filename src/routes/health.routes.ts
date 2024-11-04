import {Router} from "express";
import {HealthController} from "../controllers/health.controller";

const healthRouter = Router();

const controller = new HealthController();
const {check} = controller;

healthRouter.get("/", check);

export default healthRouter;
