import { Router } from 'express'


import { adminAchievementsInterface, adminCreateAchievement, adminUpdateAchievement, adminDeleteAchievement, adminAchievementsFormCreate, adminAchievementsFormUpdate } from '../controllers/admin.controller/admin.achievements.controller'
import { adminTechnologiesInterface, adminUpdateTechnology, adminCreateTechnology, adminDeleteTechnology, adminTechnologiesFormCreate, adminTechnologiesFormUpdate} from '../controllers/admin.controller/admin.technologies.controller'
import { adminDashboardInterface } from '../controllers/admin.controller/admin.controller'

const router = Router()

router.get('/', adminDashboardInterface)

/* technologies */
router.get('/technologies', adminTechnologiesInterface)
router.get('/technologies/form', adminTechnologiesFormCreate)
router.get('/technologies/form/update/:technologyId', adminTechnologiesFormUpdate)
router.post('/technologies/create', adminCreateTechnology)
router.post('/technologies/update/:technologyId', adminUpdateTechnology)
router.post('/technologies/delete/:technologyId', adminDeleteTechnology)


/* réalisation */
router.get('/achievements', adminAchievementsInterface)
router.get('/achievements/form', adminAchievementsFormCreate)
router.post('/achievements/create', adminCreateAchievement)
router.get('/achievements/form/update/:achievementId', adminAchievementsFormUpdate)
router.post('/achievements/update/:achievementId', adminUpdateAchievement)
router.post('/achievements/delete/:achievementId', adminDeleteAchievement)

export default router