import AppError from '@shared/errors/app-error'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'
import IProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import ICustomizedImageGroupRelationRepository
  from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'

export default class DeleteCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository,
    private readonly customizedImageGroupRelationRepository: ICustomizedImageGroupRelationRepository,
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const customizedImageGroup = await this.customizedImageGroupRepository.findById(id)
    if (!customizedImageGroup) {
      throw new AppError('CustomizedImageGroup not found')
    }

    await this.customizedImageGroupRelationRepository.deleteManyByGroup(id)
    await this.productCustomizedImageGroupRelationRepository.deleteManyByGroup(id)

    return await this.customizedImageGroupRepository.delete(id)
  }
}
