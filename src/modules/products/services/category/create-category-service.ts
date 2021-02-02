import 'reflect-metadata'
import { ICategoryModel } from '../../infra/schemas/category'
import ICategoryRepository from '../../infra/repositories/protocols/i-category-repository'
import AppError from '@shared/errors/app-error'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import { ICategoryRelationshipModel } from '@modules/products/infra/schemas/category-relationship'

export default class CreateCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly categoryRelationshipRepository: CategoryRelationshipRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<ICategoryModel> {
    const { name, parent } = body
    if (!name) {
      throw new AppError('Missing param: name')
    }
    const categoryName = this.textFormatter.trim(name)
    const checkIfCategoryExists = await this.categoryRepository.findByName(categoryName)
    if (checkIfCategoryExists) {
      throw new AppError('Category already exists')
    }
    const slug = this.textFormatter.slugConverter(categoryName)
    const categoryData: ICategoryModel = { name: categoryName, slug, productCounter: 0 }

    const response = await this.categoryRepository.create(categoryData)

    const categoryRelationship: ICategoryRelationshipModel = { category: response._id, count: 0 }

    if (parent) {
      categoryRelationship.parent = parent
    }

    await this.categoryRelationshipRepository.create(categoryRelationship)

    return response
  }
}
