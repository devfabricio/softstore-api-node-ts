import 'reflect-metadata'
import { ProductPrimaryCategory } from '../infra/typeorm/entities/product-primary-category'
import { inject, injectable } from 'tsyringe'
import IProductPrimaryCategoryRepository from '../protocols/i-product-primary-category-repository'
import AppError from '@shared/errors/app-error'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

@injectable()
export default class CreateProductPrimaryCategoryService {
  constructor (@inject('ProductPrimaryCategoryRepository')
  private readonly productPrimaryCategoryRepository: IProductPrimaryCategoryRepository,
  @inject('TextFormatter')
  private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<ProductPrimaryCategory> {
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
