import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import { IProductModel } from '@modules/products/infra/schemas/product'

export default class ShowProductListService {
  constructor (
    private readonly productRepository: IProductRepository) {}

  public async execute (): Promise<IProductModel[]> {
    return await this.productRepository.find()
  }
}
