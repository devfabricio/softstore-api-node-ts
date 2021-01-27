import AppError from '@shared/errors/app-error'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import { IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'

export default class ShowProductCategoryService {
  constructor (
    private readonly productCategoryRepository: IProductCategoryRepository) {}

  public async execute (body: any): Promise<IProductCategoryResponse> {
    const { _id } = body
    let productCategory: IProductCategoryResponse
    if (_id) {
      productCategory = await this.productCategoryRepository.findById(_id)
    }
    if (!productCategory) {
      throw new AppError('ProductCategory Object not found')
    }
    return productCategory
  }
}
