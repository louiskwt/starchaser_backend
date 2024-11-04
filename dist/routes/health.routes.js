"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_controller_1 = require("../controllers/health.controller");
const healthRouter = (0, express_1.Router)();
const controller = new health_controller_1.HealthController();
const { check } = controller;
healthRouter.get("/", check);
exports.default = healthRouter;
