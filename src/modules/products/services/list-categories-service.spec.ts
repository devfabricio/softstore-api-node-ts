import FakeCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-category-repository'
import ListCategoriesService from '@modules/products/services/list-categories-service'

interface ISutTypes {
  categoryRepository: FakeCategoryRepository
  sut: ListCategoriesService
}

const makeSut = (): ISutTypes => {
  const categoryRepository = new FakeCategoryRepository()
  const sut = new ListCategoriesService(categoryRepository)
  return {
    categoryRepository,
    sut
  }
}

describe('ListCategoriesService', () => {
  it('Should call find method in CategoryRepository', async () => {
    const { sut, categoryRepository } = makeSut()
    const onFindSpy = jest.spyOn(categoryRepository, 'find')
    await sut.execute()
    expect(onFindSpy).toHaveBeenCalled()
  })
})
