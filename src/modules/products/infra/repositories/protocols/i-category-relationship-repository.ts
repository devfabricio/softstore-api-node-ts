import { ICategoryRelationshipModel, ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'

export default interface ICategoryRelationshipRepository {
  create(data: ICategoryRelationshipModel): Promise<ICategoryRelationshipResponse>
  find(): Promise<ICategoryRelationshipResponse[]>
  findById(id: string): Promise<ICategoryRelationshipResponse>
  findByCategory(category: string): Promise<ICategoryRelationshipResponse>
  delete (id: string): Promise<boolean>
  save (data: ICategoryRelationshipModel): Promise<ICategoryRelationshipResponse>
}
