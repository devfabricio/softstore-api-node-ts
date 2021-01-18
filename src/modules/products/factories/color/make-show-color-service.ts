import ColorRepository from '@modules/products/infra/repositories/color-repository'
import ShowColorService from '@modules/products/services/color/show-color-service'

export const makeShowColorService = (): ShowColorService => {
  const colorRepository = new ColorRepository()
  return new ShowColorService(colorRepository)
}
