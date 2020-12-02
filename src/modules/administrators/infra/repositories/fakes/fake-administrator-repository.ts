import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'
import { IAdministratorModel, IResponseAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export class FakeAdministratorRepository implements IAdministratorRepository {
  private readonly administrators: IResponseAdministratorModel[] = []

  public async create (userData: IAdministratorModel): Promise<IResponseAdministratorModel> {
    const administrator = { _id: 'any_id', ...userData }
    this.administrators.push(administrator)
    return administrator
  }

  public async findByEmail (email: string): Promise<IResponseAdministratorModel> {
    return this.administrators.find(user => user.email === email)
  }

  async findById (id: string): Promise<IResponseAdministratorModel> {
    return this.administrators.find(user => user._id.toString() === id)
  }

  async save (administrator: IResponseAdministratorModel): Promise<IResponseAdministratorModel> {
    const findIndex = this.administrators.findIndex(findUser => findUser._id === administrator._id)
    this.administrators[findIndex] = administrator
    return administrator
  }
}
