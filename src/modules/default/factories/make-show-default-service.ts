import DefaultRepository from '@modules/default/infra/repositories/default-repository'
import ShowDefaultService from '@modules/default/services/show-default-service'

export const makeShowDefaultService = (): ShowDefaultService => {
  const defaultRepository = new DefaultRepository()
  return new ShowDefaultService(defaultRepository)
}
