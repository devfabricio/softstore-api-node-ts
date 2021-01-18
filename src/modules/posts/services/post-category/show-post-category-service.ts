import AppError from '@shared/errors/app-error'
import IPostCategoryRepository from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'

export default class ShowPostCategoryService {
  constructor (
    private readonly categoryRepository: IPostCategoryRepository) {}

  public async execute (body: any): Promise<IPostCategoryResponse> {
    const { _id, slug } = body
    let postCategory: IPostCategoryResponse
    if (_id) {
      postCategory = await this.categoryRepository.findById(_id)
    }
    if (slug) {
      postCategory = await this.categoryRepository.findBySlug(slug)
    }
    if (!postCategory) {
      throw new AppError('Category not found')
    }
    return postCategory
  }
}
