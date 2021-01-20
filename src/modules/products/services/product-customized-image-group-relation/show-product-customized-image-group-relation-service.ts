import AppError from '@shared/errors/app-error'
import IProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import { IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'

export default class ShowProductCustomizedImageGroupRelationService {
  constructor (
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (body: any): Promise<IProductCustomizedImageGroupRelationResponse> {
    const { _id } = body
    let productCustomizedImageGroupRelation: IProductCustomizedImageGroupRelationResponse
    if (_id) {
      productCustomizedImageGroupRelation = await this.productCustomizedImageGroupRelationRepository.findById(_id)
    }
    if (!productCustomizedImageGroupRelation) {
      throw new AppError('ProductCustomizedImageGroupRelation Object not found')
    }
    return productCustomizedImageGroupRelation
  }
}
