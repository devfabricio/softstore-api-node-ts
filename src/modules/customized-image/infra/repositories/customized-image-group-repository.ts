import { Model } from 'mongoose'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'
import CustomizedImageGroup, { ICustomizedImageGroupDocument, ICustomizedImageGroupModel, ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'

export default class CustomizedImageGroupRepository implements ICustomizedImageGroupRepository {
  private readonly repository: Model<ICustomizedImageGroupDocument>

  constructor () {
    this.repository = CustomizedImageGroup
  }

  async create (data: ICustomizedImageGroupModel): Promise<ICustomizedImageGroupResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<ICustomizedImageGroupResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<ICustomizedImageGroupResponse> {
    return this.repository.findById(id)
  }

  async save (data: ICustomizedImageGroupResponse): Promise<ICustomizedImageGroupResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
