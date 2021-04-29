import { Technology } from '../../database/models/technology.model';
import {ITechnology} from '../../database/interfaces/technology.interface'

export const getTechnologies = async () => {
    return await Technology.find()
}

export const saveTechnology = (technology: ITechnology) => {
    const newTechnology = new Technology(technology)
    return newTechnology.save()
}

export const getTechnologyPerId = (technology: string) => {
    return Technology.findOne({_id: technology}).exec()
}

export const updateTechnologyPerId = async (technologyId: string, technology: ITechnology) => {
    return Technology.findByIdAndUpdate(technologyId, {$set: technology}, {runValidators: true})
}

export const deleteTechnologyPerId = async (technologyId: string) => {
    return Technology.findByIdAndDelete(technologyId).exec();
}