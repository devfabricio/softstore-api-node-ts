import { Router } from 'express'
import CategoryController from '@modules/products/controllers/category-controller'
import { isAuth } from '@shared/main/middlewares/is-auth'
import AddProductQuantityInCategoryController
  from '@modules/products/controllers/add-product-quantity-in-category-controller'

const categoryRouter = Router()
const categoryController = new CategoryController()
const addProductQuantityInCategoryController = new AddProductQuantityInCategoryController()

categoryRouter.use(isAuth)
categoryRouter.delete('/:id', categoryController.delete)
categoryRouter.post('/', categoryController.create)
categoryRouter.get('/', categoryController.index)
categoryRouter.put('/', categoryController.update)
categoryRouter.put('/', categoryController.update)
categoryRouter.put('/add-product-quantity', addProductQuantityInCategoryController.update)

export default categoryRouter
