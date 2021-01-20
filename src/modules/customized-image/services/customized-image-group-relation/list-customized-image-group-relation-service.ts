import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'
import { ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'

export default class ListCustomizedImageGroupRelationService {
  constructor (
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository) {}

  public async execute (group?: string): Promise<ICustomizedImageGroupRelationResponse[]> {
    if (group) {
      return await this.customizedImageGroupRelationRepository.findByGroup(group)
    }
    return await this.customizedImageGroupRelationRepository.find()
  }
}
