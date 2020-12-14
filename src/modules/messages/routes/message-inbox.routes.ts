import { Router } from 'express'
import { isAuth } from '@shared/main/middlewares/is-auth'
import MessageInboxController from '@modules/messages/controllers/message-inbox-controller'

const messageInboxRouter = Router()
const messageInboxController = new MessageInboxController()

messageInboxRouter.get('/', isAuth, messageInboxController.index)

export default messageInboxRouter
