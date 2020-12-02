import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'
import AdministratorSchema, {
  IAdministratorDocument,
  IAdministratorModel,
  IResponseAdministratorModel
} from '@modules/administrators/infra/schemas/administrator'
import { Model } from 'mongoose'

export class AdministratorRepository implements IAdministratorRepository {
  private readonly repository: Model<IAdministratorDocument>

  constructor () {
    this.repository = AdministratorSchema
  }

  async create ({ name, email, password, role }: IAdministratorModel): Promise<IResponseAdministratorModel> {
    return await this.repository.create({ name, email, password, role })
  }

  async findByEmail (email: string): Promise<IResponseAdministratorModel> {
    return this.repository.findOne({ email })
  }

  async findById (id: string): Promise<IResponseAdministratorModel> {
    return this.repository.findById(id)
  }

  async save (administrator: IResponseAdministratorModel): Promise<IResponseAdministratorModel> {
    return this.repository.updateOne({ _id: administrator._id },{ $set: { ...administrator } })
  }
}
