import SettingsRepository from '@modules/settings/infra/repositories/settings-repository'
import CreateDefaultOptionsService from '@modules/settings/services/create-default-options-service'

export const makeCreateDefaultOptionsService = (): CreateDefaultOptionsService => {
  const settingsRepository = new SettingsRepository()
  return new CreateDefaultOptionsService(settingsRepository)
}
