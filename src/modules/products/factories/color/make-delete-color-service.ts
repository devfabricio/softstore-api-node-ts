import DeleteColorService from '@modules/products/services/color/delete-color-service'
import ColorRepository from '@modules/products/infra/repositories/color-repository'

export const makeDeleteColorService = (): DeleteColorService => {
  const colorRepository = new ColorRepository()
  return new DeleteColorService(colorRepository)
}
