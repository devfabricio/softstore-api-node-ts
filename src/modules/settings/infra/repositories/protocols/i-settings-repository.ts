import { IOptionResponse, IOptionKeyTypes, optionsTypes, IOptionModel } from '@modules/settings/infra/schemas/option'

export default interface ISettingsRepository {
  createDefaults(options: IOptionModel[]): Promise<IOptionResponse[]>
  find(): Promise<IOptionResponse[]>
  findById(id: string): Promise<IOptionResponse>
  findByKey(key: optionsTypes): Promise<IOptionResponse>
  delete (id: string): Promise<boolean>
  save (options: IOptionKeyTypes): Promise<boolean>
}
