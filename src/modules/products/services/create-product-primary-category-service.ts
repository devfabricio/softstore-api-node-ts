import 'reflect-metadata'
import { ProductPrimaryCategory } from '../infra/typeorm/entities/product-primary-category'
import { inject, injectable } from 'tsyringe'
import IProductPrimaryCategoryRepository from '../protocols/i-product-primary-category-repository'
import AppError from '@shared/errors/app-error'

@injectable()
export default class CreateProductPrimaryCategoryService {
  constructor (@inject('ProductPrimaryCategoryRepository')
  private readonly productPrimaryCategoryRepository: IProductPrimaryCategoryRepository) {
  }

  async execute (body: any): Promise<ProductPrimaryCategory> {
    const { category } = body
    if (!category) {
      throw new AppError('Missing param: category')
    }
    const productPrimaryCategory = await this.productPrimaryCategoryRepository.create(category)
    return productPrimaryCategory
  }
}
