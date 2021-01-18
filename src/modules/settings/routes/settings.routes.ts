import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import SettingsController from '@modules/settings/controllers/settings-controller'

const settingsRouter = Router()
const settingsController = new SettingsController()

settingsRouter.get('/', settingsController.index)
settingsRouter.post('/', isAdminAuth, settingsController.create)
settingsRouter.put('/', isAdminAuth, settingsController.update)

export default settingsRouter
