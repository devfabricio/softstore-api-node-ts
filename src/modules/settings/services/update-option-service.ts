import AppError from '@shared/errors/app-error'
import ISettingsRepository from '@modules/settings/infra/repositories/protocols/i-settings-repository'
import { IOptionKeyTypes } from '@modules/settings/infra/schemas/option'

export default class UpdateOptionService {
  constructor (
    private readonly settingsRepository: ISettingsRepository) {}

  public async execute (body: IOptionKeyTypes): Promise<boolean> {
    const requiredFields = ['siteTitle', 'siteDescription', 'address', 'phone', 'email', 'openingHours',
      'about', 'facebook', 'instagram', 'linkedin', 'pinterest', 'twitter', 'youtube']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      return this.settingsRepository.save(body)
    }
  }
}
