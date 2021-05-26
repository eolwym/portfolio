"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientPromise = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("../env/env"));
const env = env_1.default[process.env.NODE_ENV];
console.log(env);
exports.clientPromise = mongoose_1.default
    .connect(env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then((m) => m.connection.getClient())
    .catch((err) => console.log(err));
