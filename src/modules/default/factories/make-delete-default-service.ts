import DeleteDefaultService from '@modules/default/services/delete-default-service'
import DefaultRepository from '@modules/default/infra/repositories/default-repository'

export const makeDeleteDefaultService = (): DeleteDefaultService => {
  const defaultRepository = new DefaultRepository()
  return new DeleteDefaultService(defaultRepository)
}
