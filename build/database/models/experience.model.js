"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const experienceSchema = new Schema({
    title: { type: String, required: true, unique: true },
    date: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    following: { type: [Schema.Types.ObjectId], ref: 'technology' }
});
exports.Technology = mongoose_1.default.model('technology', experienceSchema);
