import AppError from '@shared/errors/app-error'
import ICustomizedImageRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'
import { ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'

export default class ShowCustomizedImageService {
  constructor (
    private readonly customizedImageRepository: ICustomizedImageRepository) {}

  public async execute (body: any): Promise<ICustomizedImageResponse> {
    const { _id } = body
    let customizedImage: ICustomizedImageResponse
    if (_id) {
      customizedImage = await this.customizedImageRepository.findById(_id)
    }
    if (!customizedImage) {
      throw new AppError('Customized Image not found')
    }
    return customizedImage
  }
}
