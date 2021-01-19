import AppError from '@shared/errors/app-error'
import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import { IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'

export default class ShowProductSpecificationService {
  constructor (
    private readonly productSpecificationRepository: IProductSpecificationRepository) {}

  public async execute (body: any): Promise<IProductSpecificationResponse> {
    const { _id } = body
    let productSpecification: IProductSpecificationResponse
    if (_id) {
      productSpecification = await this.productSpecificationRepository.findById(_id)
    }
    if (!productSpecification) {
      throw new AppError('Product Specification not found')
    }
    return productSpecification
  }
}
