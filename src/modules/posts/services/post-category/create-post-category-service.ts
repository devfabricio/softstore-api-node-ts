import 'reflect-metadata'
import { IPostCategoryResponse } from '../../infra/schemas/post-category'
import IPostCategoryRepository from '../../infra/repositories/protocols/i-post-category-repository'
import AppError from '@shared/errors/app-error'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class CreatePostCategoryService {
  constructor (
    private readonly postCategoryRepository: IPostCategoryRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<IPostCategoryResponse> {
    const { name } = body
    if (!name) {
      throw new AppError('Missing param: name')
    }
    const categoryName = this.textFormatter.trim(name)
    const checkIfCategoryExists = await this.postCategoryRepository.findByName(categoryName)
    if (checkIfCategoryExists) {
      throw new AppError('Category already exists')
    }
    const slug = this.textFormatter.slugConverter(categoryName)
    return await this.postCategoryRepository.create(categoryName, slug)
  }
}
