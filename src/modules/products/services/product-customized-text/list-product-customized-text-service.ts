import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import { IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'

export default class ListProductCustomizedTextService {
  constructor (
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository) {}

  public async execute (body: any): Promise<IProductCustomizedTextResponse[]> {
    const { productId } = body
    if (productId) {
      return await this.productCustomizedTextRepository.findByProduct(productId)
    }
    return await this.productCustomizedTextRepository.find()
  }
}
