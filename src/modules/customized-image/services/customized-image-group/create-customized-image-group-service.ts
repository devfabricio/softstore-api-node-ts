import AppError from '@shared/errors/app-error'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'

export default class CreateCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository) {
  }

  async execute (body: any): Promise<ICustomizedImageGroupResponse> {
    const requiredFields = ['name' ,'label']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    return await this.customizedImageGroupRepository.create(body)
  }
}
