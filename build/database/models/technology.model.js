"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const technologySchema = new Schema({
    title: { type: String, required: true, unique: true },
    url_img: { type: String, required: true },
});
exports.Technology = mongoose_1.default.model('technology', technologySchema);
