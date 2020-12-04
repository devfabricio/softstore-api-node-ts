import AddProductToCartService from '@modules/cart-items/services/add-product-to-cart-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import CartItemRepository from '@modules/cart-items/infra/repositories/cart-item-repository'

export const makeAddProductToCartService = (): AddProductToCartService => {
  const productRepository = new ProductRepository()
  const userRepository = new UserRepository()
  const cartItemRepository = new CartItemRepository()
  return new AddProductToCartService(cartItemRepository, productRepository, userRepository)
}
