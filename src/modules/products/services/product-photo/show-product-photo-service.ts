import AppError from '@shared/errors/app-error'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'
import { IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'

export default class ShowProductPhotoService {
  constructor (
    private readonly productPhotoRepository: IProductPhotoRepository) {}

  public async execute (body: any): Promise<IProductPhotoResponse> {
    const { _id } = body
    let productPhoto: IProductPhotoResponse
    if (_id) {
      productPhoto = await this.productPhotoRepository.findById(_id)
    }
    if (!productPhoto) {
      throw new AppError('ProductPhoto Object not found')
    }
    return productPhoto
  }
}
