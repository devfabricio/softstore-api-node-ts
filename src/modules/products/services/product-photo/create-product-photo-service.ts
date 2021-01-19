import AppError from '@shared/errors/app-error'
import { IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class CreateProductPhotoService {
  constructor (
    private readonly productPhotoRepository: IProductPhotoRepository,
    private readonly productRepository: IProductRepository) {
  }

  async execute (body: any): Promise<IProductPhotoResponse> {
    const requiredFields = ['url', 'width', 'height', 'product']
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

    return await this.productPhotoRepository.create(body)
  }
}
