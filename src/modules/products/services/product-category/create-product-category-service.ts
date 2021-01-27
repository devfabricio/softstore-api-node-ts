import AppError from '@shared/errors/app-error'
import { IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class CreateProductCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly productRepository: IProductRepository,
    private readonly productCategoryRepository: IProductCategoryRepository) {
  }

  async execute (body: any): Promise<IProductCategoryResponse> {
    const requiredFields = ['product', 'category']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { product, category } = body

    const checkIfCategoryExists = await this.categoryRepository.findById(category)
    if (!checkIfCategoryExists) {
      throw new AppError('Category not found')
    }

    const checkIfProductExists = await this.productRepository.findById(product)
    if (!checkIfProductExists) {
      throw new AppError('Product not found')
    }

    return await this.productCategoryRepository.create(body)
  }
}
