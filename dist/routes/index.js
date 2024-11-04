"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_routes_1 = __importDefault(require("./health.routes"));
// Import other route files here
const router = (0, express_1.Router)();
router.use("/health", health_routes_1.default);
// Add other routes here
exports.default = router;
