import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import AWSDataController from '@modules/app-data/controllers/aws-data-controller'

const appDataRouter = Router()
const awsDataController = new AWSDataController()

appDataRouter.get('/', isAdminAuth, awsDataController.index)
appDataRouter.get('/aws', isAdminAuth, awsDataController.index)

export default appDataRouter
