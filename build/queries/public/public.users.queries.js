"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserPerId = exports.findUserPerEmail = void 0;
const user_model_1 = require("../../database/models/user.model");
const findUserPerEmail = (email) => {
    return user_model_1.User.findOne({ 'local.email': email }).exec();
};
exports.findUserPerEmail = findUserPerEmail;
const findUserPerId = (id) => {
    return user_model_1.User.findById(id).exec();
};
exports.findUserPerId = findUserPerId;
