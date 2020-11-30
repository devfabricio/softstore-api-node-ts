import { Router } from 'express'
import ProfileController from '@modules/users/controllers/profile-controller'
import { isAuth } from '@shared/main/middlewares/is-auth'

const profileRouter = Router()
const profileController = new ProfileController()

profileRouter.use(isAuth)
profileRouter.put('/', profileController.update)
profileRouter.get('/:id', profileController.show)

export default profileRouter
