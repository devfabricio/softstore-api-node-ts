import CartItemRepository from '@modules/cart-items/infra/repositories/cart-item-repository'
import ListCartItemsService from '@modules/cart-items/services/list-cart-items-service'

export const makeListCartItemsService = (): ListCartItemsService => {
  const cartItemRepository = new CartItemRepository()
  return new ListCartItemsService(cartItemRepository)
}
