import AppError from '@shared/errors/app-error'
import IColorRepository from '@modules/products/infra/repositories/protocols/i-color-repository'

export default class DeleteColorService {
  constructor (
    private readonly colorRepository: IColorRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const color = await this.colorRepository.findById(id)
    if (!color) {
      throw new AppError('Color not found')
    }

    return await this.colorRepository.delete(id)
  }
}
