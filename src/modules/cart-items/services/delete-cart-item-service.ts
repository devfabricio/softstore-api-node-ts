import AppError from '@shared/errors/app-error'
import ICartItemRepository from '@modules/cart-items/infra/repositories/protocols/i-cart-item-repository'

export default class DeleteCartItemService {
  constructor (
    private readonly cartItemRepository: ICartItemRepository) {}

  public async execute (id?: string): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    await this.cartItemRepository.delete(id)
    return true
  }
}
