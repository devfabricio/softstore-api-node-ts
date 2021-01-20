import AppError from '@shared/errors/app-error'
import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'

export default class DeleteCustomizedImageGroupRelationService {
  constructor (
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const customizedImageGroupRelation = await this.customizedImageGroupRelationRepository.findById(id)
    if (!customizedImageGroupRelation) {
      throw new AppError('CustomizedImageGroupRelation not found')
    }

    return await this.customizedImageGroupRelationRepository.delete(id)
  }
}
