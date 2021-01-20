import AppError from '@shared/errors/app-error'
import { IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'
import IProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'

export default class UpdateProductCustomizedImageGroupRelationService {
  constructor (
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (body: any): Promise<IProductCustomizedImageGroupRelationResponse> {
    const requiredFields = ['any']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      return this.productCustomizedImageGroupRelationRepository.save(body)
    }
  }
}
