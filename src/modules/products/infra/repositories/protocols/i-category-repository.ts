import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export default interface ICategoryRepository {
  find(): Promise<ICategoryResponse[]>
  create(name: string, slug: string): Promise<ICategoryResponse>
  findById(id: string): Promise<ICategoryResponse>
  findBySlug (slug: string): Promise<ICategoryResponse>
  findByName(name: string): Promise<ICategoryResponse>
  delete (id: string): Promise<boolean>
  save (category: ICategoryResponse): Promise<ICategoryResponse>
}
