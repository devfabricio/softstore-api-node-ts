import AppError from '@shared/errors/app-error'
import { IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'
import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'

export default class UpdateProductSpecificationService {
  constructor (
    private readonly productSpecificationRepository: IProductSpecificationRepository) {}

  public async execute (body: any): Promise<IProductSpecificationResponse> {
    const requiredFields = ['_id', 'name', 'value']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id } = body

    const checkIfProductSpecificationExists = await this.productSpecificationRepository.findById(_id)
    if (!checkIfProductSpecificationExists) {
      throw new AppError('Product Specification not found')
    }

    return this.productSpecificationRepository.save(body)
  }
}
