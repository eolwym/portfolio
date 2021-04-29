import { Request, Response, NextFunction } from 'express';

/* La vue des différentes interface */
export const adminDashboardInterface = async (req: Request, res: Response, __: NextFunction) => {
   // Récupérer les datas
   res.render('admin/admin-dashboard')
}