"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievement = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const achievementSchema = new Schema({
    title: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    url_img: { type: String, required: true },
    technologies: { type: [Schema.Types.ObjectId], ref: 'technology' },
    githubLink: { type: String, required: false }
});
exports.Achievement = mongoose_1.default.model('achievement', achievementSchema);
