import AppError from '@shared/errors/app-error'
import { ICustomizedImageModel, ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'
import ICustomizedImageRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'
import { getImageSize } from '@shared/utils/image-size'

export default class CreateCustomizedImageService {
  constructor (
    private readonly customizedImageRepository: ICustomizedImageRepository) {
  }

  async execute (body: any): Promise<ICustomizedImageResponse> {
    const requiredFields = ['url', 'thumbUrl']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { url, thumbUrl } = body
    const image: ICustomizedImageModel = { url, thumbUrl, height: 0, width: 0, thumbWidth: 0, thumbHeight: 0 }

    const imageSize = await getImageSize(url)
    const thumbImageSize = await getImageSize(thumbUrl)
    image.width = imageSize.width
    image.height = imageSize.height
    image.thumbWidth = thumbImageSize.width
    image.thumbHeight = thumbImageSize.height

    return await this.customizedImageRepository.create(image)
  }
}
