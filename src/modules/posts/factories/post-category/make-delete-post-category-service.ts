import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import DeletePostCategoryService from '@modules/posts/services/post-category/delete-post-category-service'

export const makeDeletePostCategoryService = (): DeletePostCategoryService => {
  const postCategoryRepository = new PostCategoryRepository()
  return new DeletePostCategoryService(postCategoryRepository)
}
