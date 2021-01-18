import { IPostModel, IPostResponse } from '@modules/posts/infra/schemas/post'

export default interface IPostRepository {
  create(data: IPostModel): Promise<IPostResponse>
  find(): Promise<IPostResponse[]>
  findById(id: string): Promise<IPostResponse>
  findBySlug (slug: string): Promise<IPostResponse>
  findByTitle(title: string): Promise<IPostResponse>
  delete (id: string): Promise<boolean>
  save (data: IPostModel): Promise<IPostResponse>
}
