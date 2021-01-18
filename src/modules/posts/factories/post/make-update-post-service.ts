import PostRepository from '@modules/posts/infra/repositories/post-repository'
import UpdatePostService from '@modules/posts/services/post/update-post-service'
import PostCategoryRepository from '@modules/posts/infra/repositories/post-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

export const makeUpdatePostService = (): UpdatePostService => {
  const postRepository = new PostRepository()
  const postCategoryRepository = new PostCategoryRepository()
  const textFormatter = new TextFormatter()
  return new UpdatePostService(postRepository, postCategoryRepository, textFormatter)
}
