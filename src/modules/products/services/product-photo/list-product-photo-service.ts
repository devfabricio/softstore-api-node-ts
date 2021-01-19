import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'
import { IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'

export default class ListProductPhotoService {
  constructor (
    private readonly productPhotoRepository: IProductPhotoRepository) {}

  public async execute (productId?: string): Promise<IProductPhotoResponse[]> {
    if (productId) {
      return await this.productPhotoRepository.findByProduct(productId)
    }
    return await this.productPhotoRepository.find()
  }
}
