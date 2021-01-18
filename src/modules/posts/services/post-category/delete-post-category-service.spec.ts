import AppError from '@shared/errors/app-error'
import DeletePostCategoryService from '@modules/posts/services/post-category/delete-post-category-service'
import FakePostCategoryRepository from '@modules/posts/infra/repositories/fakes/fake-post-category-repository'

interface ISutTypes {
  postCategoryRepository: FakePostCategoryRepository
  sut: DeletePostCategoryService
}

const makeSut = (): ISutTypes => {
  const postCategoryRepository = new FakePostCategoryRepository()
  const sut = new DeletePostCategoryService(postCategoryRepository)
  return {
    postCategoryRepository: postCategoryRepository,
    sut
  }
}

describe('DeleteCategoryService', () => {
  it('Should returns error if no id is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute()).rejects.toEqual(new AppError('Missing param: id'))
  })
  it('Should return error if invalid category id is provided', async () => {
    const { sut } = makeSut()
    const body: any = {
      id: 'any_invalid_id'
    }
    await expect(sut.execute(body))
      .rejects.toEqual(new AppError('Category not found'))
  })
  it('Should call CategoryRepository with correct id', async () => {
    const { sut, postCategoryRepository } = makeSut()
    const body: any = {
      id: 'any_category_id'
    }
    const onDeleteSpy = jest.spyOn(postCategoryRepository, 'delete')
    const category = {
      name: 'any_category',
      slug: 'any_category'
    }
    await postCategoryRepository.create(category.name, category.slug)
    await sut.execute(body.id)
    expect(onDeleteSpy).toHaveBeenCalledWith(body.id)
  })
})
