import UpdateOptionService from '@modules/settings/services/update-option-service'
import SettingsRepository from '@modules/settings/infra/repositories/settings-repository'

export const makeUpdateOptionService = (): UpdateOptionService => {
  const settingsRepository = new SettingsRepository()
  return new UpdateOptionService(settingsRepository)
}
