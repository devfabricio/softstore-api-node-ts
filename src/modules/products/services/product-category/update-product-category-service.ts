import AppError from '@shared/errors/app-error'
import { IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'

export default class UpdateProductCategoryService {
  constructor (
    private readonly productCategoryRepository: IProductCategoryRepository) {}

  public async execute (body: any): Promise<IProductCategoryResponse> {
    const requiredFields = ['any']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      return this.productCategoryRepository.save(body)
    }
  }
}
