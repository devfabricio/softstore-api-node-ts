import { Model } from 'mongoose'
import ISettingsRepository from '@modules/settings/infra/repositories/protocols/i-settings-repository'
import Option, {
  IOptionDocument,
  IOptionResponse,
  IOptionKeyTypes,
  optionsTypes, IOptionModel
} from '@modules/settings/infra/schemas/option'

const optionsTypesArr: optionsTypes[] = ['siteTitle', 'siteDescription', 'address', 'phone', 'email', 'openingHours',
  'about', 'facebook', 'instagram', 'linkedin', 'pinterest', 'twitter', 'youtube']

export default class SettingsRepository implements ISettingsRepository {
  private readonly repository: Model<IOptionDocument>

  constructor () {
    this.repository = Option
  }

  async createDefaults (options: IOptionModel[]): Promise<IOptionResponse[]> {
    return this.repository.insertMany(options)
  }

  async find (): Promise<IOptionResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IOptionResponse> {
    return this.repository.findById(id)
  }

  async findByKey (key: optionsTypes): Promise<IOptionResponse> {
    return this.repository.findOne({ key })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async save (options: IOptionKeyTypes): Promise<boolean> {
    for (const optionType of optionsTypesArr) {
      await this.repository.updateOne({ key: optionType },{ $set: { value: options[optionType] } })
    }
    return true
  }
}
