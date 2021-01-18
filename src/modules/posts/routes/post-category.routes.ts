import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import PostCategoryController from '@modules/posts/controllers/post-category-controller'

const postCategoryRouter = Router()
const categoryController = new PostCategoryController()

postCategoryRouter.get('/', categoryController.index)
postCategoryRouter.get('/i/:id', categoryController.show)
postCategoryRouter.get('/s/:slug', categoryController.show)
postCategoryRouter.delete('/:id', isAdminAuth, categoryController.delete)
postCategoryRouter.post('/', isAdminAuth, categoryController.create)
postCategoryRouter.put('/', isAdminAuth, categoryController.update)

export default postCategoryRouter
