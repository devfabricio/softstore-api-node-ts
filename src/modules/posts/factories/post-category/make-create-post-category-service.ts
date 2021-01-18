import TextFormatter from '@shared/helpers/text-formatter'
import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import CreatePostCategoryService from '@modules/posts/services/post-category/create-post-category-service'

export const makeCreatePostCategoryService = (): CreatePostCategoryService => {
  const postCategoryRepository = new PostCategoryRepository()
  const textFormatter = new TextFormatter()
  return new CreatePostCategoryService(postCategoryRepository, textFormatter)
}
