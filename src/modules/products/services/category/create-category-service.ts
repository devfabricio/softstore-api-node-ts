import 'reflect-metadata'
import { ICategoryModel } from '../../infra/schemas/category'
import ICategoryRepository from '../../infra/repositories/protocols/i-category-repository'
import AppError from '@shared/errors/app-error'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class CreateCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<ICategoryModel> {
    const { name } = body
    if (!name) {
      throw new AppError('Missing param: name')
    }
    const categoryName = this.textFormatter.trim(name)
    const checkIfCategoryExists = await this.categoryRepository.findByName(categoryName)
    if (checkIfCategoryExists) {
      throw new AppError('Category already exists')
    }
    const slug = this.textFormatter.slugConverter(categoryName)
    return await this.categoryRepository.create(categoryName, slug)
  }
}
