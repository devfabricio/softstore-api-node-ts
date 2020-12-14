import { Router } from 'express'
import MessageInboxController from '@modules/messages/controllers/message-inbox-controller'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'

const messageInboxRouter = Router()
const messageInboxController = new MessageInboxController()

messageInboxRouter.get('/', isAdminAuth, messageInboxController.index)

export default messageInboxRouter
