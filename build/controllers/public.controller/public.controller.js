"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolio = void 0;
const public_queries_1 = require("../../queries/public/public.queries");
const getPortfolio = async (req, res, next) => {
    try {
        const technologies = await public_queries_1.getTechnologies();
        const achievements = await public_queries_1.getAchievements();
        res.render('profil/accueil', { technologies, achievements });
    }
    catch (e) {
        next(e);
    }
};
exports.getPortfolio = getPortfolio;
