import { Model } from 'mongoose'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'
import ProductPhoto, { IProductPhotoDocument, IProductPhotoModel, IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'

export default class ProductPhotoRepository implements IProductPhotoRepository {
  private readonly repository: Model<IProductPhotoDocument>

  constructor () {
    this.repository = ProductPhoto
  }

  async create (data: IProductPhotoModel): Promise<IProductPhotoResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IProductPhotoResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IProductPhotoResponse> {
    return this.repository.findById(id)
  }

  async findByProduct (productId: string): Promise<IProductPhotoResponse[]> {
    return this.repository.find({ product: productId })
  }

  async save (data: IProductPhotoResponse): Promise<IProductPhotoResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
