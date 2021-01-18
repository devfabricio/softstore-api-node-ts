import DefaultRepository from '@modules/default/infra/repositories/default-repository'
import CreateDefaultService from '@modules/default/services/create-default-service'

export const makeCreateDefaultService = (): CreateDefaultService => {
  const defaultRepository = new DefaultRepository()
  return new CreateDefaultService(defaultRepository)
}
