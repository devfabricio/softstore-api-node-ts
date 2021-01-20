import AppError from '@shared/errors/app-error'
import { ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'
import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'

export default class UpdateCustomizedImageGroupRelationService {
  constructor (
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository) {}

  public async execute (body: any): Promise<ICustomizedImageGroupRelationResponse> {
    const requiredFields = ['image', 'group']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    return this.customizedImageGroupRelationRepository.save(body)
  }
}
