import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductCategoryController from '@modules/products/controllers/product-category-controller'

const productCategoryRouter = Router()
const productCategoryController = new ProductCategoryController()

productCategoryRouter.get('/', productCategoryController.index)
productCategoryRouter.get('/product/:productId', productCategoryController.index)
productCategoryRouter.get('/:id', productCategoryController.show)
productCategoryRouter.delete('/:id', productCategoryController.delete)
productCategoryRouter.post('/', isAdminAuth, productCategoryController.create)
productCategoryRouter.put('/', isAdminAuth, productCategoryController.update)

export default productCategoryRouter
