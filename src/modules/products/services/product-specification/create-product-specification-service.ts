import AppError from '@shared/errors/app-error'
import { IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'
import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class CreateProductSpecificationService {
  constructor (
    private readonly productSpecificationRepository: IProductSpecificationRepository,
    private readonly productRepository: IProductRepository) {
  }

  async execute (body: any): Promise<IProductSpecificationResponse> {
    const requiredFields = ['product', 'name', 'value']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { product } = body

    const checkIfProductExists = await this.productRepository.findById(product)
    if (!checkIfProductExists) {
      throw new AppError('Product not found')
    }

    return await this.productSpecificationRepository.create(body)
  }
}
