import { Model } from 'mongoose'
import IProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import ProductCustomizedImageGroupRelation, { IProductCustomizedImageGroupRelationDocument, IProductCustomizedImageGroupRelationModel, IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'

export default class ProductCustomizedImageGroupRelationRepository implements IProductCustomizedImageGroupRelationRepository {
  private readonly repository: Model<IProductCustomizedImageGroupRelationDocument>

  constructor () {
    this.repository = ProductCustomizedImageGroupRelation
  }

  async create (data: IProductCustomizedImageGroupRelationModel): Promise<IProductCustomizedImageGroupRelationResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IProductCustomizedImageGroupRelationResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IProductCustomizedImageGroupRelationResponse> {
    return this.repository.findById(id)
  }

  async save (data: IProductCustomizedImageGroupRelationResponse): Promise<IProductCustomizedImageGroupRelationResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
