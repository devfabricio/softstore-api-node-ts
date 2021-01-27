import { Model } from 'mongoose'
import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import ProductCustomizedText, { IProductCustomizedTextDocument, IProductCustomizedTextModel, IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'

export default class ProductCustomizedTextRepository implements IProductCustomizedTextRepository {
  private readonly repository: Model<IProductCustomizedTextDocument>

  constructor () {
    this.repository = ProductCustomizedText
  }

  async create (data: IProductCustomizedTextModel): Promise<IProductCustomizedTextResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IProductCustomizedTextResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IProductCustomizedTextResponse> {
    return this.repository.findById(id)
  }

  async findByProduct (productId: string): Promise<IProductCustomizedTextResponse[]> {
    return this.repository.find({ product: productId })
  }

  async save (data: IProductCustomizedTextResponse): Promise<IProductCustomizedTextResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
