import { Router } from 'express'
import CategoryController from '@modules/products/controllers/category-controller'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import AddProductQuantityInCategoryController
  from '@modules/products/controllers/add-product-quantity-in-category-controller'

const categoryRouter = Router()
const categoryController = new CategoryController()
const addProductQuantityInCategoryController = new AddProductQuantityInCategoryController()

categoryRouter.use(isAdminAuth)
categoryRouter.delete('/:id', categoryController.delete)
categoryRouter.post('/', categoryController.create)
categoryRouter.get('/', categoryController.index)
categoryRouter.put('/', categoryController.update)
categoryRouter.put('/', categoryController.update)
categoryRouter.put('/add-product-quantity', addProductQuantityInCategoryController.update)

export default categoryRouter
