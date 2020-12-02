import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductController from '@modules/products/controllers/product-controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.use(isAdminAuth)
productRouter.get('/', productController.index)
productRouter.post('/', productController.create)
productRouter.put('/', productController.update)
productRouter.get('/i/:id', productController.show)
productRouter.get('/s/:slug', productController.show)

export default productRouter
