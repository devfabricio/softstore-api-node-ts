import 'reflect-metadata'
import { IProductPrimaryCategoryModel } from '../infra/schemas/product-primary-category'
import IProductPrimaryCategoryRepository from '../infra/repositories/protocols/i-product-primary-category-repository'
import AppError from '@shared/errors/app-error'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class CreateProductPrimaryCategoryService {
  constructor (
    private readonly productPrimaryCategoryRepository: IProductPrimaryCategoryRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<IProductPrimaryCategoryModel> {
    const { name } = body
    if (!name) {
      throw new AppError('Missing param: name')
    }
    const categoryName = this.textFormatter.trim(name)
    const checkIfCategoryExists = await this.productPrimaryCategoryRepository.findByName(categoryName)
    if (checkIfCategoryExists) {
      throw new AppError('Category already exists')
    }
    const slug = this.textFormatter.slugConverter(categoryName)
    const productPrimaryCategory = await this.productPrimaryCategoryRepository.create(categoryName, slug)
    return productPrimaryCategory
  }
}
