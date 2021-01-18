import AppError from '@shared/errors/app-error'
import FakeCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import UpdateCategoryService from '@modules/products/services/category/update-category-service'

interface ISutTypes {
  textFormatter: TextFormatter
  categoryRepository: FakeCategoryRepository
  sut: UpdateCategoryService
}

const makeSut = (): ISutTypes => {
  const textFormatter = new TextFormatter()
  const categoryRepository = new FakeCategoryRepository()
  const sut = new UpdateCategoryService(categoryRepository, textFormatter)
  return {
    textFormatter,
    categoryRepository,
    sut
  }
}

describe('UpdateCategoryService', () => {
  it('Should returns error if no category _id is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: _id'))
  })
  it('Should returns error if invalid category id is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      _id: 'any_invalid_category_id'
    })).rejects
      .toEqual(new AppError('Category not found'))
  })
  it('Should calls TextFormatter.trim with correct value if name is provided', async () => {
    const { sut, textFormatter, categoryRepository } = makeSut()
    const trimSpy = jest.spyOn(textFormatter, 'trim')
    await categoryRepository.create('category_name','category_name')
    const name = 'other_category_name'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(trimSpy).toHaveBeenCalledWith(name)
  })
  it('Should calls TextFormatter.converterSlug with correct value if name is provided', async () => {
    const { sut, textFormatter, categoryRepository } = makeSut()
    const slugConverterSpy = jest.spyOn(textFormatter, 'slugConverter')
    await categoryRepository.create('category_name','category_name')
    const name = 'other_category_name'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(slugConverterSpy).toHaveBeenCalledWith(name)
  })
  it('Should CategoryRepository called with correct value', async () => {
    const { sut, categoryRepository } = makeSut()
    const createSpy = jest.spyOn(categoryRepository, 'save')
    const category = await categoryRepository.create('any_category', 'any_category')
    const name = 'any_category'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(createSpy).toHaveBeenCalledWith(category)
  })
  it('Should returns ProductPrimaryCategory if create successfull', async () => {
    const { sut, categoryRepository } = makeSut()
    await categoryRepository.create('category_name','category_name')
    const response = await sut.execute({ _id: 'any_category_id', name: 'category_name' })
    await expect(response).toHaveProperty('_id')
    await expect(response).toHaveProperty('name')
  })
})
