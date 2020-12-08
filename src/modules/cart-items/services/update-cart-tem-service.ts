import AppError from '@shared/errors/app-error'
import ICartItemRepository from '@modules/cart-items/infra/repositories/protocols/i-cart-item-repository'
import { ICartItemResponse } from '@modules/cart-items/infra/schemas/cart-item'

export default class UpdateCartTemService {
  constructor (
    private readonly cartItemRepository: ICartItemRepository) {}

  public async execute (body: any): Promise<ICartItemResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, quantity } = body

    const cartItem = await this.cartItemRepository.findById(_id)
    if (!cartItem) {
      throw new AppError('Cart item not found')
    }

    if (quantity !== cartItem.quantity) {
      cartItem.quantity = quantity
    }

    return this.cartItemRepository.save(cartItem)
  }
}
