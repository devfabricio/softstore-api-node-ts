import AppError from '@shared/errors/app-error'
import CreateCategoryService from '@modules/products/services/category/create-category-service'
import FakeCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

interface ISutTypes {
  textFormatter: TextFormatter
  productPrimaryCategoryRepository: FakeCategoryRepository
  sut: CreateCategoryService
}

const makeSut = (): ISutTypes => {
  const textFormatter = new TextFormatter()
  const productPrimaryCategoryRepository = new FakeCategoryRepository()
  const sut = new CreateCategoryService(productPrimaryCategoryRepository, textFormatter)
  return {
    textFormatter,
    productPrimaryCategoryRepository,
    sut
  }
}

describe('CreateCategoryService', () => {
  it('Should returns error if no category is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: name'))
  })
  it('Should CategoryRepository called with correct value', async () => {
    const { sut, textFormatter, productPrimaryCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(productPrimaryCategoryRepository, 'create')
    const name = ' any_category '
    const categoryName = textFormatter.trim(name)
    const slug = textFormatter.slugConverter(categoryName)
    await sut.execute({ name })
    await expect(createSpy).toHaveBeenCalledWith(categoryName, slug)
  })
  it('Should calls TextFormatter.trim with correct value', async () => {
    const { sut, textFormatter } = makeSut()
    const trimSpy = jest.spyOn(textFormatter, 'trim')
    const name = ' any_category '
    await sut.execute({ name })
    await expect(trimSpy).toHaveBeenCalledWith(name)
  })
  it('Should returns error if the category already exists', async () => {
    const { sut, productPrimaryCategoryRepository } = makeSut()
    await productPrimaryCategoryRepository.create('any_category', 'any_slug')
    await expect(sut.execute({ name: 'any_category', slug: 'any_slug' })).rejects
      .toEqual(new AppError('Category already exists'))
  })
  it('Should calls TextFormatter.converterSlug with correct value', async () => {
    const { sut, textFormatter } = makeSut()
    const slugConverterSpy = jest.spyOn(textFormatter, 'slugConverter')
    const name = ' any_category '
    const categoryName = textFormatter.trim(name)
    await sut.execute({ name })
    await expect(slugConverterSpy).toHaveBeenCalledWith(categoryName)
  })
  it('Should returns ProductPrimaryCategory if create successfull', async () => {
    const { sut } = makeSut()
    const response = await sut.execute({ name: 'any_category' })
    await expect(response).toHaveProperty('_id')
    await expect(response).toHaveProperty('name')
  })
})
