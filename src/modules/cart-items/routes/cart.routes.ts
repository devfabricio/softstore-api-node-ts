import { Router } from 'express'
import CartItemController from '@modules/cart-items/controllers/cart-controller'

const cartItemRouter = Router()
const cartItemController = new CartItemController()

cartItemRouter.post('/', cartItemController.create)
cartItemRouter.get('/:user', cartItemController.index)
cartItemRouter.delete('/:id', cartItemController.delete)
cartItemRouter.put('/', cartItemController.update)

export default cartItemRouter
