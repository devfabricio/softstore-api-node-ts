import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import PostController from '@modules/posts/controllers/post-controller'

const postRouter = Router()
const postController = new PostController()

postRouter.get('/', postController.index)
postRouter.get('/i/:id', postController.show)
postRouter.get('/s/:slug', postController.show)
postRouter.delete('/:id', isAdminAuth, postController.delete)
postRouter.post('/', isAdminAuth, postController.create)
postRouter.put('/', isAdminAuth, postController.update)

export default postRouter
