import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'

export default interface IPostCategoryRepository {
  find(): Promise<IPostCategoryResponse[]>
  create(name: string, slug: string): Promise<IPostCategoryResponse>
  findById(id: string): Promise<IPostCategoryResponse>
  findBySlug (slug: string): Promise<IPostCategoryResponse>
  findByName(name: string): Promise<IPostCategoryResponse>
  delete (id: string): Promise<boolean>
  save (category: IPostCategoryResponse): Promise<IPostCategoryResponse>
}
