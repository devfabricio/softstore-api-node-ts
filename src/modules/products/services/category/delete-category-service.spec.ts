import AppError from '@shared/errors/app-error'
import FakeCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-category-repository'
import DeleteCategoryService from '@modules/products/services/category/delete-category-service'

interface ISutTypes {
  categoryRepository: FakeCategoryRepository
  sut: DeleteCategoryService
}

const makeSut = (): ISutTypes => {
  const categoryRepository = new FakeCategoryRepository()
  const sut = new DeleteCategoryService(categoryRepository)
  return {
    categoryRepository,
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
    const { sut, categoryRepository } = makeSut()
    const body: any = {
      id: 'any_category_id'
    }
    const onDeleteSpy = jest.spyOn(categoryRepository, 'delete')
    const category = {
      name: 'any_category',
      slug: 'any_category'
    }
    await categoryRepository.create(category.name, category.slug)
    await sut.execute(body.id)
    expect(onDeleteSpy).toHaveBeenCalledWith(body.id)
  })
})
