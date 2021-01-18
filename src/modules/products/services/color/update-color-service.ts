import AppError from '@shared/errors/app-error'
import { IColorResponse } from '@modules/products/infra/schemas/color'
import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'

export default class UpdateColorService {
  constructor (
    private readonly colorRepository: IColorRepository) {}

  public async execute (body: any): Promise<IColorResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      const { _id, name, hexa } = body

      const color = await this.colorRepository.findById(_id)
      if (!color) {
        throw new AppError('Color not found')
      }

      color.name = name
      color.hexa = hexa

      return this.colorRepository.save(color)
    }
  }
}
