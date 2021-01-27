import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductCustomizedTextController from '@modules/products/controllers/product-customized-text-controller'

const productCustomizedTextRouter = Router()
const productCustomizedTextController = new ProductCustomizedTextController()

productCustomizedTextRouter.get('/', productCustomizedTextController.index)
productCustomizedTextRouter.get('/product/:productId', productCustomizedTextController.index)
productCustomizedTextRouter.get('/:id', productCustomizedTextController.show)
productCustomizedTextRouter.delete('/:id', productCustomizedTextController.delete)
productCustomizedTextRouter.post('/', isAdminAuth, productCustomizedTextController.create)
productCustomizedTextRouter.put('/', isAdminAuth, productCustomizedTextController.update)

export default productCustomizedTextRouter
