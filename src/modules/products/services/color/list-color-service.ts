import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'
import { IColorResponse } from '@modules/products/infra/schemas/color'

export default class ListColorService {
  constructor (
    private readonly colorRepository: IColorRepository) {}

  public async execute (): Promise<IColorResponse[]> {
    return await this.colorRepository.find()
  }
}
