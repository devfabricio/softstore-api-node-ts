import AppError from '@shared/errors/app-error'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'

export default class UpdateCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository) {}

  public async execute (body: any): Promise<ICustomizedImageGroupResponse> {
    const requiredFields = ['_id', 'name' ,'label']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    return this.customizedImageGroupRepository.save(body)
  }
}
