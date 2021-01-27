import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductCustomizedImageGroupRelationController from '@modules/products/controllers/product-customized-image-group-relation-controller'

const productCustomizedImageGroupRelationRouter = Router()
const productCustomizedImageGroupRelationController = new ProductCustomizedImageGroupRelationController()

productCustomizedImageGroupRelationRouter.get('/', productCustomizedImageGroupRelationController.index)
productCustomizedImageGroupRelationRouter.get('/product/:productId', productCustomizedImageGroupRelationController.index)
productCustomizedImageGroupRelationRouter.get('/:id', productCustomizedImageGroupRelationController.show)
productCustomizedImageGroupRelationRouter.delete('/:id', productCustomizedImageGroupRelationController.delete)
productCustomizedImageGroupRelationRouter.post('/', isAdminAuth, productCustomizedImageGroupRelationController.create)
productCustomizedImageGroupRelationRouter.put('/', isAdminAuth, productCustomizedImageGroupRelationController.update)

export default productCustomizedImageGroupRelationRouter
