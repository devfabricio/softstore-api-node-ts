import AppError from '@shared/errors/app-error'
import { IColorResponse } from '@modules/products/infra/schemas/color'
import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'

export default class CreateColorService {
  constructor (
    private readonly colorRepository: IColorRepository) {
  }

  async execute (body: any): Promise<IColorResponse> {
    const requiredFields = ['name', 'hexa']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    return await this.colorRepository.create(body)
  }
}
