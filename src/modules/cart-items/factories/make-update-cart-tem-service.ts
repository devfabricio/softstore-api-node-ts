import CartItemRepository from '@modules/cart-items/infra/repositories/cart-item-repository'
import UpdateCartTemService from '@modules/cart-items/services/update-cart-tem-service'

export const makeUpdateCartTemService = (): UpdateCartTemService => {
  const cartItemRepository = new CartItemRepository()
  return new UpdateCartTemService(cartItemRepository)
}
