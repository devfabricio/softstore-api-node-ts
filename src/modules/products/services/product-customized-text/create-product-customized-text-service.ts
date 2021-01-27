import AppError from '@shared/errors/app-error'
import { IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'
import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class CreateProductCustomizedTextService {
  constructor (
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository,
    private readonly productRepository: IProductRepository) {
  }

  async execute (body: any): Promise<IProductCustomizedTextResponse> {
    const requiredFields = ['label', 'product']
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

    return await this.productCustomizedTextRepository.create(body)
  }
}
