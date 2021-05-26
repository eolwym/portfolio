"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAchievementPerId = exports.updateAchievementPerId = exports.getAchievementPerId = exports.saveAchievement = void 0;
const achievement_model_1 = require("../../database/models/achievement.model");
const saveAchievement = async (achievement) => {
    const newAchievement = new achievement_model_1.Achievement(achievement);
    return newAchievement.save();
};
exports.saveAchievement = saveAchievement;
const getAchievementPerId = async (achievementId) => {
    return achievement_model_1.Achievement.findOne({ _id: achievementId }).exec();
};
exports.getAchievementPerId = getAchievementPerId;
const updateAchievementPerId = async (achievementId, achievement) => {
    return achievement_model_1.Achievement.findByIdAndUpdate(achievementId, { $set: achievement }, { runValidators: true });
};
exports.updateAchievementPerId = updateAchievementPerId;
const deleteAchievementPerId = async (achievementId) => {
    return achievement_model_1.Achievement.findByIdAndDelete(achievementId).exec();
};
exports.deleteAchievementPerId = deleteAchievementPerId;
