import { Request, Response, NextFunction } from 'express';
import {IAchievement} from '../../database/interfaces/achievement.interface'

import { saveAchievement, updateAchievementPerId, getAchievementPerId, deleteAchievementPerId } from '../../queries/admin/admin.achievements.queries'
import { getTechnologies } from '../../queries/admin/admin.technologies.queries';
import { getAchievements } from '../../queries/public/public.queries';

import path from 'path';
import multer from 'multer'
type File = Express.Multer.File;

const upload = multer({
    storage: multer.diskStorage({
        destination: (_, __: File, cb: Function) => {
            cb(null, path.join(__dirname, '../../../public/images/achievements'));
        },
        filename: (_, file: File, cb: Function) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

export const adminAchievementsInterface = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const achievements = await getAchievements()        
        res.render('admin/achievements/admin-achievements', {achievements})
    } catch(e) {
        next(e)
    }
}

export const adminAchievementsFormCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const technologies = await getTechnologies()
        res.render('admin/achievements/admin-achievements-form', {achievement: {}, technologies})
    } catch(e) {
        next(e)
    }
}

export const adminCreateAchievement = [
    upload.single('url_img'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body);
            
            const achievement: IAchievement = {
                ...req.body,
                'url_img': `/images/achievements/${req.file.filename}`
            }
            await saveAchievement(achievement)
            res.redirect('/admin/achievements')

        } catch (e) {
            res.redirect('/admin/achievements/form')
        }
}]

export const adminAchievementsFormUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const achievementId = req.params.achievementId
        const technologies = await getTechnologies()
        const achievement = await getAchievementPerId(achievementId)
        res.render('admin/achievements/admin-achievements-form', {achievement , technologies})
    } catch(e) {
        next(e)
    }
}

export const adminUpdateAchievement = [
    upload.single('url_img'),
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const achievement: IAchievement = {
            ...req.body,
            'url_img': `/images/achievements/${req.file.filename}`
        }
        const achievementId = req.params.achievementId
        await updateAchievementPerId(achievementId, achievement)
        res.redirect('/admin/achievements')
    } catch(e) {
        next(e)
    }
}]

export const adminDeleteAchievement = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const achievementId = req.params.achievementId
        await deleteAchievementPerId(achievementId)
        res.status(200).end()
    } catch(e) {
        next(e)
    }
}

