import { Model } from 'mongoose'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import ProductCategory, { IProductCategoryDocument, IProductCategoryModel, IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'

export default class ProductCategoryRepository implements IProductCategoryRepository {
  private readonly repository: Model<IProductCategoryDocument>

  constructor () {
    this.repository = ProductCategory
  }

  async create (data: IProductCategoryModel): Promise<IProductCategoryResponse> {
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

  async find (): Promise<IProductCategoryResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IProductCategoryResponse> {
    return this.repository.findById(id)
  }

  async findByProduct (productId: string): Promise<IProductCategoryResponse[]> {
    return this.repository.find({ product: productId })
  }

  async save (data: IProductCategoryResponse): Promise<IProductCategoryResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
