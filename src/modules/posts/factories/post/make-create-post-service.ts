import PostRepository from '@modules/posts/infra/repositories/post-repository'
import CreatePostService from '@modules/posts/services/post/create-post-service'
import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

export const makeCreatePostService = (): CreatePostService => {
  const postRepository = new PostRepository()
  const postCategoryRepository = new PostCategoryRepository()
  const textFormatter = new TextFormatter()
  return new CreatePostService(postRepository, postCategoryRepository, textFormatter)
}
