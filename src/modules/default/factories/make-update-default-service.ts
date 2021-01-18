import DefaultRepository from '@modules/default/infra/repositories/default-repository'
import UpdateDefaultService from '@modules/default/services/update-default-service'

export const makeUpdateDefaultService = (): UpdateDefaultService => {
  const defaultRepository = new DefaultRepository()
  return new UpdateDefaultService(defaultRepository)
}
