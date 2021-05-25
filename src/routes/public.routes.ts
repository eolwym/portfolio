import { Router, Response, Request } from 'express'
const { signinForm, signin, signout } = require('../controllers/public.controller/public.auth.controller')
const { getPortfolio } = require('../controllers/public.controller/public.controller')

const router = Router()

router.get('/', getPortfolio);

/* Authentification */

router.get('/signin/form', signinForm)
router.post('/signin', signin)
router.get('/signout', signout)

export default router