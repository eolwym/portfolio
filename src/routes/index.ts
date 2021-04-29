import { Router, Response, Request } from 'express'
import { ensureAuthenticated } from '../config/guards.config';

import profil from './public.routes'
import admin from './admin.routes'

const router = Router();

router.use('/profil', profil)
router.use('/admin', ensureAuthenticated, admin)

router.get('/', (req, res) => {
  res.redirect('/profil')
})

export default router;