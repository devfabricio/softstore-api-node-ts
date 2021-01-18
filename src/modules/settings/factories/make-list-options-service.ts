import SettingsRepository from '@modules/settings/infra/repositories/settings-repository'
import ListOptionsService from '@modules/settings/services/list-options-service'

export const makeListOptionsService = (): ListOptionsService => {
  const settingsRepository = new SettingsRepository()
  return new ListOptionsService(settingsRepository)
}
