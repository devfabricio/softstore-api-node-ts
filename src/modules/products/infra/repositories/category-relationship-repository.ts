import { Model } from 'mongoose'
import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import CategoryRelationship, { ICategoryRelationshipDocument, ICategoryRelationshipModel, ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'

export default class CategoryRelationshipRepository implements ICategoryRelationshipRepository {
  private readonly repository: Model<ICategoryRelationshipDocument>

  constructor () {
    this.repository = CategoryRelationship
  }

  async create (data: ICategoryRelationshipModel): Promise<ICategoryRelationshipResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<ICategoryRelationshipResponse[]> {
    return this.repository.find().populate('category').populate('parent')
  }

  async findById (id: string): Promise<ICategoryRelationshipResponse> {
    return this.repository.findById(id)
  }

  async findByCategory (category: string): Promise<ICategoryRelationshipResponse> {
    return this.repository.findOne({ category })
  }

  async save (data: ICategoryRelationshipResponse): Promise<ICategoryRelationshipResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
