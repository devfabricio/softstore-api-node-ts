import { Router } from 'express'
import CategoryController from '@modules/products/controllers/category-controller'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import AddProductQuantityInCategoryController
  from '@modules/products/controllers/add-product-quantity-in-category-controller'

const categoryRouter = Router()
const categoryController = new CategoryController()
const addProductQuantityInCategoryController = new AddProductQuantityInCategoryController()

categoryRouter.get('/', categoryController.index)
categoryRouter.get('/i/:id', categoryController.show)
categoryRouter.get('/s/:slug', categoryController.show)
categoryRouter.delete('/:id', isAdminAuth, categoryController.delete)
categoryRouter.post('/', isAdminAuth, categoryController.create)
categoryRouter.put('/', isAdminAuth, categoryController.update)
categoryRouter.put('/add-product-quantity', isAdminAuth, addProductQuantityInCategoryController.update)

export default categoryRouter
