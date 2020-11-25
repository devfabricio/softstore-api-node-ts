import { Router } from 'express'
import ProductPrimaryCategoryController from '@modules/products/controllers/product-primary-category-controller'
import { isAuth } from '@shared/main/middlewares/is-auth'

const productPrimaryCategoryRouter = Router()
const productPrimaryCategoryController = new ProductPrimaryCategoryController()

productPrimaryCategoryRouter.use(isAuth)
productPrimaryCategoryRouter.post('/primary-category', productPrimaryCategoryController.create)

export default productPrimaryCategoryRouter
