"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDeleteAchievement = exports.adminUpdateAchievement = exports.adminAchievementsFormUpdate = exports.adminCreateAchievement = exports.adminAchievementsFormCreate = exports.adminAchievementsInterface = void 0;
const admin_achievements_queries_1 = require("../../queries/admin/admin.achievements.queries");
const admin_technologies_queries_1 = require("../../queries/admin/admin.technologies.queries");
const public_queries_1 = require("../../queries/public/public.queries");
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: (_, __, cb) => {
            cb(null, path_1.default.join(__dirname, '../../../public/images/achievements'));
        },
        filename: (_, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
const adminAchievementsInterface = async (req, res, next) => {
    try {
        const achievements = await public_queries_1.getAchievements();
        res.render('admin/achievements/admin-achievements', { achievements });
    }
    catch (e) {
        next(e);
    }
};
exports.adminAchievementsInterface = adminAchievementsInterface;
const adminAchievementsFormCreate = async (req, res, next) => {
    try {
        const technologies = await admin_technologies_queries_1.getTechnologies();
        res.render('admin/achievements/admin-achievements-form', { achievement: {}, technologies });
    }
    catch (e) {
        next(e);
    }
};
exports.adminAchievementsFormCreate = adminAchievementsFormCreate;
exports.adminCreateAchievement = [
    upload.single('url_img'),
    async (req, res, next) => {
        try {
            console.log(req.body);
            const achievement = {
                ...req.body,
                'url_img': `/images/achievements/${req.file.filename}`
            };
            await admin_achievements_queries_1.saveAchievement(achievement);
            res.redirect('/admin/achievements');
        }
        catch (e) {
            res.redirect('/admin/achievements/form');
        }
    }
];
const adminAchievementsFormUpdate = async (req, res, next) => {
    try {
        const achievementId = req.params.achievementId;
        const technologies = await admin_technologies_queries_1.getTechnologies();
        const achievement = await admin_achievements_queries_1.getAchievementPerId(achievementId);
        res.render('admin/achievements/admin-achievements-form', { achievement, technologies });
    }
    catch (e) {
        next(e);
    }
};
exports.adminAchievementsFormUpdate = adminAchievementsFormUpdate;
exports.adminUpdateAchievement = [
    upload.single('url_img'),
    async (req, res, next) => {
        try {
            const achievement = {
                ...req.body,
                'url_img': `/images/achievements/${req.file.filename}`
            };
            const achievementId = req.params.achievementId;
            await admin_achievements_queries_1.updateAchievementPerId(achievementId, achievement);
            res.redirect('/admin/achievements');
        }
        catch (e) {
            next(e);
        }
    }
];
const adminDeleteAchievement = async (req, res, next) => {
    try {
        const achievementId = req.params.achievementId;
        await admin_achievements_queries_1.deleteAchievementPerId(achievementId);
        res.status(200).end();
    }
    catch (e) {
        next(e);
    }
};
exports.adminDeleteAchievement = adminDeleteAchievement;
