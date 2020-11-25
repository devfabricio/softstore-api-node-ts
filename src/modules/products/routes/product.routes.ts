import { Router } from 'express'
import { isAuth } from '@shared/main/middlewares/is-auth'
import ProductController from '@modules/products/controllers/product-controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.use(isAuth)
productRouter.get('/', productController.show)
productRouter.post('/', productController.create)

export default productRouter
