import DefaultRepository from '@modules/default/infra/repositories/default-repository'
import ListDefaultService from '@modules/default/services/list-default-service'

export const makeListDefaultService = (): ListDefaultService => {
  const defaultRepository = new DefaultRepository()
  return new ListDefaultService(defaultRepository)
}
