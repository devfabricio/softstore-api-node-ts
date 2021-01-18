import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import ProductSchema, { IProductDocument, IProductModel, IProductResponse } from '@modules/products/infra/schemas/product'
import { Model } from 'mongoose'

export default class ProductRepository implements IProductRepository {
  private readonly repository: Model<IProductDocument>

  constructor () {
    this.repository = ProductSchema
  }

  async create (data: IProductModel): Promise<IProductResponse> {
    const product = await this.repository.create(data)
    return await product.save()
  }

  async find (): Promise<IProductResponse[]> {
    return this.repository.find().populate('category')
  }

  async findByCategory (category: string): Promise<IProductResponse[]> {
    return this.repository.find({ category: category }).populate('category')
  }

  async findByName (name: string): Promise<IProductResponse> {
    return this.repository.findOne({ name })
  }

  async findBySlug (slug: string): Promise<IProductResponse> {
    return this.repository.findOne({ slug }).populate('category')
  }

  async findById (id: string): Promise<IProductResponse> {
    return this.repository.findById(id).populate('category')
  }

  async save (product: IProductResponse): Promise<IProductResponse> {
    return this.repository.updateOne({ _id: product._id },{ $set: { ...product } })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }
}
