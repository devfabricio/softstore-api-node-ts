import PostRepository from '@modules/posts/infra/repositories/post-repository'
import ShowPostService from '@modules/posts/services/post/show-post-service'

export const makeShowPostService = (): ShowPostService => {
  const postRepository = new PostRepository()
  return new ShowPostService(postRepository)
}
