import { ICategoryModel, ICategoryResponse } from '@modules/products/infra/schemas/category'

export default interface ICategoryRepository {
  find(): Promise<ICategoryResponse[]>
  create(data: ICategoryModel): Promise<ICategoryResponse>
  findById(id: string): Promise<ICategoryResponse>
  findBySlug (slug: string): Promise<ICategoryResponse>
  findByName(name: string): Promise<ICategoryResponse>
  delete (id: string): Promise<boolean>
  save (category: ICategoryResponse): Promise<ICategoryResponse>
}
