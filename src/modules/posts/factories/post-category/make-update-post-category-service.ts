import TextFormatter from '@shared/helpers/text-formatter'
import UpdatePostCategoryService from '../../services/post-category/update-post-category-service'
import PostCategoryRepository from '../../infra/repositories/post-category-repository'

export const makeUpdatePostCategoryService = (): UpdatePostCategoryService => {
  const postCategoryRepository = new PostCategoryRepository()
  const textFormatter = new TextFormatter()
  return new UpdatePostCategoryService(postCategoryRepository, textFormatter)
}
