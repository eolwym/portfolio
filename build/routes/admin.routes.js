"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_achievements_controller_1 = require("../controllers/admin.controller/admin.achievements.controller");
const admin_technologies_controller_1 = require("../controllers/admin.controller/admin.technologies.controller");
const admin_controller_1 = require("../controllers/admin.controller/admin.controller");
const router = express_1.Router();
router.get('/', admin_controller_1.adminDashboardInterface);
router.get('/technologies', admin_technologies_controller_1.adminTechnologiesInterface);
router.get('/technologies/form', admin_technologies_controller_1.adminTechnologiesFormCreate);
router.get('/technologies/form/update/:technologyId', admin_technologies_controller_1.adminTechnologiesFormUpdate);
router.post('/technologies/create', admin_technologies_controller_1.adminCreateTechnology);
router.post('/technologies/update/:technologyId', admin_technologies_controller_1.adminUpdateTechnology);
router.post('/technologies/delete/:technologyId', admin_technologies_controller_1.adminDeleteTechnology);
router.get('/achievements', admin_achievements_controller_1.adminAchievementsInterface);
router.get('/achievements/form', admin_achievements_controller_1.adminAchievementsFormCreate);
router.post('/achievements/create', admin_achievements_controller_1.adminCreateAchievement);
router.get('/achievements/form/update/:achievementId', admin_achievements_controller_1.adminAchievementsFormUpdate);
router.post('/achievements/update/:achievementId', admin_achievements_controller_1.adminUpdateAchievement);
router.post('/achievements/delete/:achievementId', admin_achievements_controller_1.adminDeleteAchievement);
exports.default = router;
