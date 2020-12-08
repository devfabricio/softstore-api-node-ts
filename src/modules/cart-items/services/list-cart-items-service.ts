import ICartItemRepository from '@modules/cart-items/infra/repositories/protocols/i-cart-item-repository'
import { ICartItemResponse } from '@modules/cart-items/infra/schemas/cart-item'

export default class ListCartItemsService {
  constructor (
    private readonly cartItemRepository: ICartItemRepository) {}

  public async execute (user: string): Promise<ICartItemResponse[]> {
    return await this.cartItemRepository.findByUser(user)
  }
}
