import AppError from '@shared/errors/app-error'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export default class ShowProductService {
  constructor (
    private readonly productsRepository: IProductRepository) {}

  public async execute (body: any): Promise<IProductResponse> {
    const { _id, slug } = body
    let product: IProductResponse
    if (_id) {
      product = await this.productsRepository.findById(_id)
    }
    if (slug) {
      product = await this.productsRepository.findBySlug(slug)
    }
    if (!product) {
      throw new AppError('Product not found')
    }
    return product
  }
}
