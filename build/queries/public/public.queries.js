"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechnologies = exports.getAchievements = void 0;
const technology_model_1 = require("../../database/models/technology.model");
const achievement_model_1 = require("../../database/models/achievement.model");
const getAchievements = () => {
    return achievement_model_1.Achievement.find().populate('technologies');
};
exports.getAchievements = getAchievements;
const getTechnologies = async () => {
    return technology_model_1.Technology.find();
};
exports.getTechnologies = getTechnologies;
