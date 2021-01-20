import ICustomizedImageRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'
import { ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'

export default class ListCustomizedImageService {
  constructor (
    private readonly customizedImageRepository: ICustomizedImageRepository) {}

  public async execute (): Promise<ICustomizedImageResponse[]> {
    return await this.customizedImageRepository.find()
  }
}
