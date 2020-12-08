import CartItemRepository from '@modules/cart-items/infra/repositories/cart-item-repository'
import DeleteCartItemService from '@modules/cart-items/services/delete-cart-item-service'

export const makeDeleteCartItemService = (): DeleteCartItemService => {
  const cartItemRepository = new CartItemRepository()
  return new DeleteCartItemService(cartItemRepository)
}
