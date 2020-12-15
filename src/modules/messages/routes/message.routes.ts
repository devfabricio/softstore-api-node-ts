import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import MessageController from '@modules/messages/controllers/message-controller'
import { isAuth } from '@shared/main/middlewares/is-auth'

const messageRouter = Router()
const messageController = new MessageController()

messageRouter.post('/', isAuth, messageController.create)
messageRouter.post('/dashboard', isAdminAuth, messageController.create)
messageRouter.get('/:messageInbox', isAuth, messageController.index)
messageRouter.get('/dashboard/:messageInbox', isAdminAuth, messageController.index)

export default messageRouter
