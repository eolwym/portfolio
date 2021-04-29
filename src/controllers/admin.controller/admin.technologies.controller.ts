import { Request, Response, NextFunction } from 'express';
import { saveTechnology, getTechnologyPerId, updateTechnologyPerId, deleteTechnologyPerId } from '../../queries/admin/admin.technologies.queries'
import { ITechnology } from '../../database/interfaces/technology.interface'
import { getTechnologies } from '../../queries/public/public.queries'

import path from 'path';
import multer from 'multer'
type File = Express.Multer.File;

const upload = multer({
    storage: multer.diskStorage({
        destination: (_, __: File, cb: Function) => {
            cb(null, path.join(__dirname, '../../../public/images/technologies'));
        },
        filename: (_, file: File, cb: Function) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

export const adminTechnologiesInterface = async (req: Request, res: Response, next: NextFunction) => {
    try {
       const technologies = await getTechnologies()
       res.render('admin/technologies/admin-technologies', {technologies})
    } catch(e) {
       next(e)
    }
}

export const adminTechnologiesFormCreate = (req: Request, res: Response, next: NextFunction) => {
    res.render('admin/technologies/admin-technologies-form', {technology: {}})
}

// Si aucune imag, mettre une image par default
export const adminCreateTechnology = [ 
    upload.single('url_img'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const technology: ITechnology = {
                'title': req.body.technologyTitle,
                'url_img': `/images/technologies/${req.file.filename}`
            }
            await saveTechnology(technology)
            res.redirect('/admin/technologies')
        } catch(e) {
            next(e)
        }
    }
]

export const adminTechnologiesFormUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const technologyId = req.params.technologyId
        const technology = await getTechnologyPerId(technologyId)
        
        res.render('admin/technologies/admin-technologies-form', {technology})
    } catch (e) {
        next(e)
    }
}


// Rendre l'image non obligatoire
// Si il y a une image, supprimer l'image précédente
export const adminUpdateTechnology = [
    upload.single('url_img'),
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const technology: ITechnology = {
            'title': req.body.technologyTitle,
            'url_img': `/images/technologies/${req.file.filename}`,
        }
        const technologyId = req.params.technologyId
        await updateTechnologyPerId(technologyId, technology)
        res.redirect('/admin/technologies')
    }catch (e) {
        next(e)
    }
}]

export const adminDeleteTechnology = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const technologyId = req.params.technologyId
        const technology = await deleteTechnologyPerId(technologyId)
        if (!technology) {
            res.status(404)
            throw Error('Technology not found')
        }
        res.status(200).end()
    } catch (e) {
        next(e)
    }
}