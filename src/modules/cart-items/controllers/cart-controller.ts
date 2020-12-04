import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeAddProductToCartService } from '@modules/cart-items/factories/make-add-product-to-cart-service'

export default class CartItemController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const addProductToCartService = makeAddProductToCartService()
    const cartItem = await addProductToCartService.execute(request.body)
    return response.status(201).json(cartItem)
  }
}
