import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import { IProductModel } from '@modules/products/infra/schemas/product'

export default class ListProductsService {
  constructor (
    private readonly productRepository: IProductRepository) {}

  public async execute (body: any): Promise<IProductModel[]> {
    const { category } = body

    if (category) {
      return await this.productRepository.findByCategory(category)
    }

    return await this.productRepository.find()
  }
}
