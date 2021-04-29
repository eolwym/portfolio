import { Technology } from '../../database/models/technology.model';
import { Achievement } from '../../database/models/achievement.model';

export const getAchievements = () => {
    return Achievement.find().populate('technologies')
}

export const getTechnologies = async () => {
    return Technology.find()
}