import ISettingsRepository from '@modules/settings/infra/repositories/protocols/i-settings-repository'
import { IOptionModel, IOptionResponse, optionsTypes } from '@modules/settings/infra/schemas/option'

const optionsTypesArr: optionsTypes[] = ['siteTitle', 'siteDescription', 'address', 'phone', 'email', 'openingHours',
  'about', 'facebook', 'instagram', 'linkedin', 'pinterest', 'twitter', 'youtube']

export default class CreateDefaultOptionsService {
  constructor (
    private readonly settingsRepository: ISettingsRepository) {}

  public async execute (): Promise<IOptionResponse[]> {
    const defaultOptions: IOptionModel[] = []

    for (const optionType of optionsTypesArr) {
      const option = await this.settingsRepository.findByKey(optionType)
      if (!option) {
        const defaultOption = { key: optionType, value: '' }
        switch (optionType) {
          case 'siteTitle':
            defaultOption.value = 'SoftStore'
            break
          case 'siteDescription':
            defaultOption.value = 'A sua nova loja virtual'
            break
        }
        defaultOptions.push(defaultOption)
      }
    }

    return this.settingsRepository.createDefaults(defaultOptions)
  }
}
