import { NextFunction, Request, Response } from 'express'
import {getAchievements, getTechnologies} from '../../queries/public/public.queries'

export const getPortfolio = async (req: Request, res: Response, next:NextFunction) => {
    try {
        // promise all
        const technologies = await getTechnologies()
        const achievements = await getAchievements()
        res.render('profil/accueil', {technologies, achievements})
    } catch(e) {
        next(e)
    }
}