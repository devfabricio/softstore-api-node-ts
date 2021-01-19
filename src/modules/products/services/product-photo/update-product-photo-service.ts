import AppError from '@shared/errors/app-error'
import { IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'

export default class UpdateProductPhotoService {
  constructor (
    private readonly productPhotoRepository: IProductPhotoRepository) {}

  public async execute (body: any): Promise<IProductPhotoResponse> {
    const requiredFields = ['_id', 'url', 'width', 'height', 'product']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id } = body

    const checkIfProductPhotoExists = await this.productPhotoRepository.findById(_id)
    if (!checkIfProductPhotoExists) {
      throw new AppError('Product Photo not found')
    }

    return this.productPhotoRepository.save(body)
  }
}
