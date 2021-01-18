import { Model } from 'mongoose'
import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'
import Color, { IColorDocument, IColorModel, IColorResponse } from '@modules/products/infra/schemas/color'

export default class ColorRepository implements IColorRepository {
  private readonly repository: Model<IColorDocument>

  constructor () {
    this.repository = Color
  }

  async create (data: IColorModel): Promise<IColorResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IColorResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IColorResponse> {
    return this.repository.findById(id)
  }

  async save (data: IColorResponse): Promise<IColorResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
