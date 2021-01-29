import { Model } from 'mongoose'
import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import ProductSpecification, { IProductSpecificationDocument, IProductSpecificationModel, IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'

export default class ProductSpecificationRepository implements IProductSpecificationRepository {
  private readonly repository: Model<IProductSpecificationDocument>

  constructor () {
    this.repository = ProductSpecification
  }

  async create (data: IProductSpecificationModel): Promise<IProductSpecificationResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async deleteMany (productId: string): Promise<boolean> {
    await this.repository.deleteMany({ product: productId })
    return true
  }

  async find (): Promise<IProductSpecificationResponse[]> {
    return this.repository.find()
  }

  async findByProduct (productId: string): Promise<IProductSpecificationResponse[]> {
    return this.repository.find({ product: productId })
  }

  async findById (id: string): Promise<IProductSpecificationResponse> {
    return this.repository.findById(id)
  }

  async save (data: IProductSpecificationResponse): Promise<IProductSpecificationResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
