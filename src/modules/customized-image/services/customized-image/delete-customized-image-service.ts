import AppError from '@shared/errors/app-error'
import ICustomizedImageRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'

export default class DeleteCustomizedImageService {
  constructor (
    private readonly customizedImageRepository: ICustomizedImageRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const customizedImage = await this.customizedImageRepository.findById(id)
    if (!customizedImage) {
      throw new AppError('CustomizedImage not found')
    }

    return await this.customizedImageRepository.delete(id)
  }
}
