import AppError from '@shared/errors/app-error'
import FakeCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-category-repository'
import AddProductQuantityInCategoryService from '@modules/products/services/add-product-quantity-in-category-service'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

interface ISutTypes {
  categoryRepository: FakeCategoryRepository
  sut: AddProductQuantityInCategoryService
}

const makeSut = (): ISutTypes => {
  const categoryRepository = new FakeCategoryRepository()
  const sut = new AddProductQuantityInCategoryService(categoryRepository)
  return {
    categoryRepository,
    sut
  }
}

describe('AddProductQuantityInCategoryService', () => {
  it('Should returns error if no category is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: _id'))
  })
  it('Should return error if invalid category id is provided', async () => {
    const { sut } = makeSut()
    const body: any = {
      _id: 'any_invalid_id'
    }
    await expect(sut.execute(body))
      .rejects.toEqual(new AppError('Category not found'))
  })
  it('Should call CategoryRepository with correct values', async () => {
    const { sut, categoryRepository } = makeSut()
    const body: any = {
      _id: 'any_category_id'
    }
    const category: ICategoryResponse = {
      _id: 'any_category_id',
      name: 'any_category',
      slug: 'any_category',
      productCounter: 0
    }
    await categoryRepository.create(category.name, category.slug)

    category.productCounter += 1
    const response = await sut.execute(body)
    expect(response).toEqual(category)
  })
})
