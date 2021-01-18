import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import ListPostCategoriesService from '@modules/posts/services/post-category/list-post-categories-service'

export const makeShowPostCategoryListService = (): ListPostCategoriesService => {
  const postCategoryRepository = new PostCategoryRepository()
  return new ListPostCategoriesService(postCategoryRepository)
}
