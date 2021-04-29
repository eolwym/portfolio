import { IAchievement } from '../../database/interfaces/achievement.interface'
import { Achievement } from '../../database/models/achievement.model'

export const saveAchievement = async (achievement: IAchievement) => {
    const newAchievement = new Achievement(achievement)
    return newAchievement.save()
}

export const getAchievementPerId = async (achievementId: string) => {
    return Achievement.findOne({_id: achievementId}).exec()
}

export const updateAchievementPerId = async (achievementId: string, achievement: IAchievement) => {
    return Achievement.findByIdAndUpdate(achievementId, {$set: achievement}, {runValidators: true})
}
export const deleteAchievementPerId = async (achievementId: string) => {
    return Achievement.findByIdAndDelete(achievementId).exec();
}
