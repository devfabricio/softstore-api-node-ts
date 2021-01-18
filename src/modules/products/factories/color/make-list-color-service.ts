import ColorRepository from '@modules/products/infra/repositories/color-repository'
import ListColorService from '@modules/products/services/color/list-color-service'

export const makeListColorService = (): ListColorService => {
  const colorRepository = new ColorRepository()
  return new ListColorService(colorRepository)
}
