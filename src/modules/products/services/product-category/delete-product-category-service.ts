import AppError from '@shared/errors/app-error'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'

export default class DeleteProductCategoryService {
  constructor (
    private readonly productCategoryRepository: IProductCategoryRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const productCategory = await this.productCategoryRepository.findById(id)
    if (!productCategory) {
      throw new AppError('ProductCategory not found')
    }

    return await this.productCategoryRepository.delete(id)
  }
}
