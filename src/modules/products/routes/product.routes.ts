import { Router } from 'express'
import { isAuth } from '@shared/main/middlewares/is-auth'
import ProductController from '@modules/products/controllers/product-controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.use(isAuth)
productRouter.get('/', productController.index)
productRouter.post('/', productController.create)
productRouter.put('/', productController.update)
productRouter.get('/i/:id', productController.show)
productRouter.get('/s/:slug', productController.show)

export default productRouter
