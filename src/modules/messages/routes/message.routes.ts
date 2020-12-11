import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import MessageController from '@modules/messages/controllers/message-controller'
import { isAuth } from '@shared/main/middlewares/is-auth'

const messageRouter = Router()
const messageController = new MessageController()

messageRouter.post('/', isAuth, messageController.create)
messageRouter.post('/administrator', isAdminAuth, messageController.create)
messageRouter.get('/:messageInbox', isAuth, messageController.index)

export default messageRouter
