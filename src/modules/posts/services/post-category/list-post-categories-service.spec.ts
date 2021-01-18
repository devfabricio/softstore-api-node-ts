import ListPostCategoriesService from '@modules/posts/services/post-category/list-post-categories-service'
import FakePostCategoryRepository from '@modules/posts/infra/repositories/fakes/fake-post-category-repository'

interface ISutTypes {
  postCategoryRepository: FakePostCategoryRepository
  sut: ListPostCategoriesService
}

const makeSut = (): ISutTypes => {
  const postCategoryRepository = new FakePostCategoryRepository()
  const sut = new ListPostCategoriesService(postCategoryRepository)
  return {
    postCategoryRepository,
    sut
  }
}

describe('ListCategoriesService', () => {
  it('Should call find method in CategoryRepository', async () => {
    const { sut, postCategoryRepository } = makeSut()
    const onFindSpy = jest.spyOn(postCategoryRepository, 'find')
    await sut.execute()
    expect(onFindSpy).toHaveBeenCalled()
  })
})
