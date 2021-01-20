import AppError from '@shared/errors/app-error'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'

export default class ShowCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository) {}

  public async execute (body: any): Promise<ICustomizedImageGroupResponse> {
    const { _id } = body
    let customizedImageGroup: ICustomizedImageGroupResponse
    if (_id) {
      customizedImageGroup = await this.customizedImageGroupRepository.findById(_id)
    }
    if (!customizedImageGroup) {
      throw new AppError('Customized Image Group not found')
    }
    return customizedImageGroup
  }
}
