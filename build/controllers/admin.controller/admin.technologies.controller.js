"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDeleteTechnology = exports.adminUpdateTechnology = exports.adminTechnologiesFormUpdate = exports.adminCreateTechnology = exports.adminTechnologiesFormCreate = exports.adminTechnologiesInterface = void 0;
const admin_technologies_queries_1 = require("../../queries/admin/admin.technologies.queries");
const public_queries_1 = require("../../queries/public/public.queries");
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: (_, __, cb) => {
            cb(null, path_1.default.join(__dirname, '../../../public/images/technologies'));
        },
        filename: (_, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
const adminTechnologiesInterface = async (req, res, next) => {
    try {
        const technologies = await public_queries_1.getTechnologies();
        res.render('admin/technologies/admin-technologies', { technologies });
    }
    catch (e) {
        next(e);
    }
};
exports.adminTechnologiesInterface = adminTechnologiesInterface;
const adminTechnologiesFormCreate = (req, res, next) => {
    res.render('admin/technologies/admin-technologies-form', { technology: {} });
};
exports.adminTechnologiesFormCreate = adminTechnologiesFormCreate;
exports.adminCreateTechnology = [
    upload.single('url_img'),
    async (req, res, next) => {
        try {
            const technology = {
                'title': req.body.technologyTitle,
                'url_img': `/images/technologies/${req.file.filename}`
            };
            await admin_technologies_queries_1.saveTechnology(technology);
            res.redirect('/admin/technologies');
        }
        catch (e) {
            next(e);
        }
    }
];
const adminTechnologiesFormUpdate = async (req, res, next) => {
    try {
        const technologyId = req.params.technologyId;
        const technology = await admin_technologies_queries_1.getTechnologyPerId(technologyId);
        res.render('admin/technologies/admin-technologies-form', { technology });
    }
    catch (e) {
        next(e);
    }
};
exports.adminTechnologiesFormUpdate = adminTechnologiesFormUpdate;
exports.adminUpdateTechnology = [
    upload.single('url_img'),
    async (req, res, next) => {
        try {
            const technology = {
                'title': req.body.technologyTitle,
                'url_img': `/images/technologies/${req.file.filename}`,
            };
            const technologyId = req.params.technologyId;
            await admin_technologies_queries_1.updateTechnologyPerId(technologyId, technology);
            res.redirect('/admin/technologies');
        }
        catch (e) {
            next(e);
        }
    }
];
const adminDeleteTechnology = async (req, res, next) => {
    try {
        const technologyId = req.params.technologyId;
        const technology = await admin_technologies_queries_1.deleteTechnologyPerId(technologyId);
        if (!technology) {
            res.status(404);
            throw Error('Technology not found');
        }
        res.status(200).end();
    }
    catch (e) {
        next(e);
    }
};
exports.adminDeleteTechnology = adminDeleteTechnology;
