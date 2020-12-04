import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import ICartItemRepository from '@modules/cart-items/infra/repositories/protocols/i-cart-item-repository'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import AppError from '@shared/errors/app-error'
import { ICartItemResponse } from '@modules/cart-items/infra/schemas/cart-item'

export default class AddProductToCartService {
  constructor (
    private readonly cartItemRepository: ICartItemRepository,
    private readonly productRepository: IProductRepository,
    private readonly userRepository: IUserRepository) {}

  public async execute (body: any): Promise<ICartItemResponse> {
    const requiredFields = ['user', 'product', 'quantity']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const { user, product, quantity } = body
    const checkIfUserExists = await this.userRepository.findById(user)
    if (!checkIfUserExists) {
      throw new AppError('Invalid user')
    }
    const checkIfProductExists = await this.productRepository.findById(product)
    if (!checkIfProductExists) {
      throw new AppError('Invalid product')
    }
    return await this.cartItemRepository.create({ user, product, quantity })
  }
}
