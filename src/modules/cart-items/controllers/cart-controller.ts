import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeAddProductToCartService } from '@modules/cart-items/factories/make-add-product-to-cart-service'
import { makeListCartItemsService } from '@modules/cart-items/factories/make-list-cart-items-service'
import { makeDeleteCartItemService } from '@modules/cart-items/factories/make-delete-cart-item-service'
import { makeUpdateCartTemService } from '@modules/cart-items/factories/make-update-cart-tem-service'

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

  async update (request: Request, response: Response): Promise<Response> {
    const updateCartTemService = makeUpdateCartTemService()
    const cartItem = await updateCartTemService.execute(request.body)
    return response.status(200).json(cartItem)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCartItemService = makeDeleteCartItemService()
    await deleteCartItemService.execute(id)
    return response.status(204).json()
  }
}
