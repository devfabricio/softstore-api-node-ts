import IProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import { IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'

export default class ListProductCustomizedImageGroupRelationService {
  constructor (
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (): Promise<IProductCustomizedImageGroupRelationResponse[]> {
    return await this.productCustomizedImageGroupRelationRepository.find()
  }
}
