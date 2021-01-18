import AppError from '@shared/errors/app-error'
import IDefaultRepository from '@modules/default/infra/repositories/protocols/i-default-repository'

export default class DeleteDefaultService {
  constructor (
    private readonly defaultRepository: IDefaultRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const defaultObj = await this.defaultRepository.findById(id)
    if (!defaultObj) {
      throw new AppError('Default not found')
    }

    return await this.defaultRepository.delete(id)
  }
}
