import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'

export default class ListCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository) {}

  public async execute (): Promise<ICustomizedImageGroupResponse[]> {
    return await this.customizedImageGroupRepository.find()
  }
}
