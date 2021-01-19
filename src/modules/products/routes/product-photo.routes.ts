import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ProductPhotoController from '@modules/products/controllers/product-photo-controller'

const productPhotoRouter = Router()
const productPhotoController = new ProductPhotoController()

productPhotoRouter.get('/', productPhotoController.index)
productPhotoRouter.get('/product/:productId', productPhotoController.index)
productPhotoRouter.get('/:id', productPhotoController.show)
productPhotoRouter.delete('/:id', isAdminAuth, productPhotoController.delete)
productPhotoRouter.post('/', isAdminAuth, productPhotoController.create)
productPhotoRouter.put('/', isAdminAuth, productPhotoController.update)

export default productPhotoRouter
