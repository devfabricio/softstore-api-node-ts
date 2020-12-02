import AppError from '@shared/errors/app-error'
import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'
import { IResponseAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export default class ShowAdministratorProfileService {
  constructor (
    private readonly administratorRepository: IAdministratorRepository) {}

  public async execute (id?: any): Promise<IResponseAdministratorModel> {
    if (!id) {
      throw new AppError('Missing param: id')
    }
    const administrator = await this.administratorRepository.findById(id)
    if (!administrator) {
      throw new AppError('Administrator not found')
    }
    return administrator
  }
}
