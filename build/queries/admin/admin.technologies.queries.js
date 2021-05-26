"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTechnologyPerId = exports.updateTechnologyPerId = exports.getTechnologyPerId = exports.saveTechnology = exports.getTechnologies = void 0;
const technology_model_1 = require("../../database/models/technology.model");
const getTechnologies = async () => {
    return await technology_model_1.Technology.find();
};
exports.getTechnologies = getTechnologies;
const saveTechnology = (technology) => {
    const newTechnology = new technology_model_1.Technology(technology);
    return newTechnology.save();
};
exports.saveTechnology = saveTechnology;
const getTechnologyPerId = (technology) => {
    return technology_model_1.Technology.findOne({ _id: technology }).exec();
};
exports.getTechnologyPerId = getTechnologyPerId;
const updateTechnologyPerId = async (technologyId, technology) => {
    return technology_model_1.Technology.findByIdAndUpdate(technologyId, { $set: technology }, { runValidators: true });
};
exports.updateTechnologyPerId = updateTechnologyPerId;
const deleteTechnologyPerId = async (technologyId) => {
    return technology_model_1.Technology.findByIdAndDelete(technologyId).exec();
};
exports.deleteTechnologyPerId = deleteTechnologyPerId;
