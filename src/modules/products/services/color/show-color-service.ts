import AppError from '@shared/errors/app-error'
import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'
import { IColorResponse } from '@modules/products/infra/schemas/color'

export default class ShowColorService {
  constructor (
    private readonly colorRepository: IColorRepository) {}

  public async execute (body: any): Promise<IColorResponse> {
    const { _id } = body
    let color: IColorResponse
    if (_id) {
      color = await this.colorRepository.findById(_id)
    }
    if (!color) {
      throw new AppError('Color Object not found')
    }
    return color
  }
}
