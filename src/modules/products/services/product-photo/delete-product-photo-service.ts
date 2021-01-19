import AppError from '@shared/errors/app-error'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'

export default class DeleteProductPhotoService {
  constructor (
    private readonly productPhotoRepository: IProductPhotoRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const productPhoto = await this.productPhotoRepository.findById(id)
    if (!productPhoto) {
      throw new AppError('ProductPhoto not found')
    }

    return await this.productPhotoRepository.delete(id)
  }
}
