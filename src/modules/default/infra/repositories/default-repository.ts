import { Model } from 'mongoose'
import IDefaultRepository from '@modules/default/infra/repositories/protocols/i-default-repository'
import Default, { IDefaultDocument, IDefaultModel, IDefaultResponse } from '@modules/default/infra/schemas/default'

export default class DefaultRepository implements IDefaultRepository {
  private readonly repository: Model<IDefaultDocument>

  constructor () {
    this.repository = Default
  }

  async create (data: IDefaultModel): Promise<IDefaultResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IDefaultResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IDefaultResponse> {
    return this.repository.findById(id)
  }

  async save (data: IDefaultResponse): Promise<IDefaultResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
