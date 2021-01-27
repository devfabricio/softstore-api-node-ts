import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductSpecificationController from '@modules/products/controllers/product-specification-controller'

const productSpecificationRouter = Router()
const productSpecificationController = new ProductSpecificationController()

productSpecificationRouter.get('/', productSpecificationController.index)
productSpecificationRouter.get('/product/:productId', productSpecificationController.index)
productSpecificationRouter.get('/:id', productSpecificationController.show)
productSpecificationRouter.delete('/:id', isAdminAuth, productSpecificationController.delete)
productSpecificationRouter.post('/', isAdminAuth, productSpecificationController.create)
productSpecificationRouter.put('/', isAdminAuth, productSpecificationController.update)

export default productSpecificationRouter
