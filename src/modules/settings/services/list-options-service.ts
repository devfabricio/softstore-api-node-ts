import ISettingsRepository from '@modules/settings/infra/repositories/protocols/i-settings-repository'
import { IOptionKeyTypes } from '@modules/settings/infra/schemas/option'

export default class ListOptionsService {
  constructor (
    private readonly settingsRepository: ISettingsRepository) {}

  public async execute (): Promise<IOptionKeyTypes> {
    const optionsResponse = await this.settingsRepository.find()
    const options = {}

    for (const option of optionsResponse) {
      options[option.key] = option.value
    }

    return options as IOptionKeyTypes
  }
}
