import ColorRepository from '@modules/products/infra/repositories/color-repository'
import UpdateColorService from '@modules/products/services/color/update-color-service'

export const makeUpdateColorService = (): UpdateColorService => {
  const colorRepository = new ColorRepository()
  return new UpdateColorService(colorRepository)
}
