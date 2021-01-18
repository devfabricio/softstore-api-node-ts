import PostRepository from '@modules/posts/infra/repositories/post-repository'
import DeletePostService from '@modules/posts/services/post/delete-post-service'

export const makeDeletePostService = (): DeletePostService => {
  const postRepository = new PostRepository()
  return new DeletePostService(postRepository)
}
