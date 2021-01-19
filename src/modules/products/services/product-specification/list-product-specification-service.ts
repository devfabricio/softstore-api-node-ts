import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import { IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'

export default class ListProductSpecificationService {
  constructor (
    private readonly productSpecificationRepository: IProductSpecificationRepository) {}

  public async execute (productId: string): Promise<IProductSpecificationResponse[]> {
    return await this.productSpecificationRepository.find(productId)
  }
}
