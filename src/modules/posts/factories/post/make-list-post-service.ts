import PostRepository from '@modules/posts/infra/repositories/post-repository'
import ListPostService from '@modules/posts/services/post/list-post-service'

export const makeListPostService = (): ListPostService => {
  const postRepository = new PostRepository()
  return new ListPostService(postRepository)
}
