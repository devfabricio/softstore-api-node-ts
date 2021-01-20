import AppError from '@shared/errors/app-error'
import { ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'
import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'
import ICustomizedImageGroupRepository
  from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'
import ICustomizedImageRepository
  from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'

export default class CreateCustomizedImageGroupRelationService {
  constructor (
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository,
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository,
    private readonly customizedImageRepository: ICustomizedImageRepository) {
  }

  async execute (body: any): Promise<ICustomizedImageGroupRelationResponse> {
    const requiredFields = ['image', 'group']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { image, group } = body

    const checkIfCustomizedImageGroupExists = await this.customizedImageGroupRepository.findById(group)
    if (!checkIfCustomizedImageGroupExists) {
      throw new AppError('Invalid customized image group')
    }

    const checkIfCustomizedImageExists = await this.customizedImageRepository.findById(image)
    if (!checkIfCustomizedImageExists) {
      throw new AppError('Invalid customized image')
    }

    return await this.customizedImageGroupRelationRepository.create(body)
  }
}
