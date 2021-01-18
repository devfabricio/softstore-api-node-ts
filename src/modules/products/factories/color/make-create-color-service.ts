import ColorRepository from '@modules/products/infra/repositories/color-repository'
import CreateColorService from '@modules/products/services/color/create-color-service'

export const makeCreateColorService = (): CreateColorService => {
  const colorRepository = new ColorRepository()
  return new CreateColorService(colorRepository)
}
