import { Model } from 'mongoose'
import ICustomizedImageRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-repository'
import CustomizedImage, { ICustomizedImageDocument, ICustomizedImageModel, ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'

export default class CustomizedImageRepository implements ICustomizedImageRepository {
  private readonly repository: Model<ICustomizedImageDocument>

  constructor () {
    this.repository = CustomizedImage
  }

  async create (data: ICustomizedImageModel): Promise<ICustomizedImageResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<ICustomizedImageResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<ICustomizedImageResponse> {
    return this.repository.findById(id)
  }

  async save (data: ICustomizedImageResponse): Promise<ICustomizedImageResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
