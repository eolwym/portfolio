"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guards_config_1 = require("../config/guards.config");
const public_routes_1 = __importDefault(require("./public.routes"));
const admin_routes_1 = __importDefault(require("./admin.routes"));
const router = express_1.Router();
router.use('/profil', public_routes_1.default);
router.use('/admin', guards_config_1.ensureAuthenticated, admin_routes_1.default);
router.get('/', (req, res) => {
    res.redirect('/profil');
});
exports.default = router;
