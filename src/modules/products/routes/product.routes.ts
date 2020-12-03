import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductController from '@modules/products/controllers/product-controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.get('/', productController.index)
productRouter.get('/i/:id', productController.show)
productRouter.get('/s/:slug', productController.show)
productRouter.get('/category/:category', productController.index)
productRouter.post('/', isAdminAuth, productController.create)
productRouter.put('/', isAdminAuth, productController.update)

export default productRouter
