import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import ShowPostCategoryService from '@modules/posts/services/post-category/show-post-category-service'

export const makeShowPostCategoryService = (): ShowPostCategoryService => {
  const postCategoryRepository = new PostCategoryRepository()
  return new ShowPostCategoryService(postCategoryRepository)
}
