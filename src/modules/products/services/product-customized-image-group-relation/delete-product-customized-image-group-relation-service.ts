import AppError from '@shared/errors/app-error'
import IProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'

export default class DeleteProductCustomizedImageGroupRelationService {
  constructor (
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const productCustomizedImageGroupRelation = await this.productCustomizedImageGroupRelationRepository.findById(id)
    if (!productCustomizedImageGroupRelation) {
      throw new AppError('ProductCustomizedImageGroupRelation not found')
    }

    return await this.productCustomizedImageGroupRelationRepository.delete(id)
  }
}
