import AppError from '@shared/errors/app-error'
import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'
import { ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'

export default class ShowCustomizedImageGroupRelationService {
  constructor (
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository) {}

  public async execute (body: any): Promise<ICustomizedImageGroupRelationResponse> {
    const { _id } = body
    let customizedImageGroupRelation: ICustomizedImageGroupRelationResponse
    if (_id) {
      customizedImageGroupRelation = await this.customizedImageGroupRelationRepository.findById(_id)
    }
    if (!customizedImageGroupRelation) {
      throw new AppError('Customized Image Group Relation not found')
    }
    return customizedImageGroupRelation
  }
}
