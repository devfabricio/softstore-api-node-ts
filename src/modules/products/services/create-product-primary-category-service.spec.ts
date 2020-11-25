import AppError from '@shared/errors/app-error'
import CreateProductPrimaryCategoryService from '@modules/products/services/create-product-primary-category-service'
import FakeProductPrimaryCategoryRepository
  from '@modules/products/infra/fakes/repositories/fake-product-primary-category-repository'

interface ISutTypes {
  productPrimaryCategoryRepository: FakeProductPrimaryCategoryRepository
  sut: CreateProductPrimaryCategoryService
}

const makeSut = (): ISutTypes => {
  const productPrimaryCategoryRepository = new FakeProductPrimaryCategoryRepository()
  const sut = new CreateProductPrimaryCategoryService(productPrimaryCategoryRepository)
  return {
    productPrimaryCategoryRepository,
    sut
  }
}

describe('CreateUser', () => {
  it('Should returns error if no category is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toBeInstanceOf(AppError)
  })
  it('Should ProductPrimaryCategoryRepository called with correct value', async () => {
    const { sut, productPrimaryCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(productPrimaryCategoryRepository, 'create')
    await sut.execute({ category: 'any_category' })
    await expect(createSpy).toHaveBeenCalledWith('any_category')
  })
  it('Should returns ProductPrimaryCategory if create successfull', async () => {
    const { sut } = makeSut()
    const response = await sut.execute({ category: 'any_category' })
    await expect(response).toHaveProperty('id')
    await expect(response).toHaveProperty('category')
  })
})
