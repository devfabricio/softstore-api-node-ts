import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeAddProductToCartService } from '@modules/cart-items/factories/make-add-product-to-cart-service'
import { makeListCartItemsService } from '@modules/cart-items/factories/make-list-cart-items-service'

export default class CartItemController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const addProductToCartService = makeAddProductToCartService()
    const cartItem = await addProductToCartService.execute(request.body)
    return response.status(201).json(cartItem)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const listCartItemsService = makeListCartItemsService()
    const user = request.params.user
    const listCartItems = await listCartItemsService.execute(user)
    return response.status(200).json(listCartItems)
  }
}
