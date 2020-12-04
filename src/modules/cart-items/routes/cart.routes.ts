import { Router } from 'express'
import CartItemController from '@modules/cart-items/controllers/cart-controller'

const cartItemRouter = Router()
const cartItemController = new CartItemController()

cartItemRouter.post('/', cartItemController.create)

export default cartItemRouter
