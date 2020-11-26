import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import ProductSchema, { IProductDocument, IProductModel } from '@modules/products/infra/schemas/product'
import { Model } from 'mongoose'

export default class ProductRepository implements IProductRepository {
  private readonly repository: Model<IProductDocument>

  constructor () {
    this.repository = ProductSchema
  }

  async create (data: IProductModel): Promise<IProductModel> {
    const product = await this.repository.create(data)
    return await product.save()
  }

  async find (): Promise<IProductModel[]> {
    return this.repository.find()
  }

  async findByName (name: string): Promise<IProductModel> {
    return this.repository.findOne({ name })
  }
}
