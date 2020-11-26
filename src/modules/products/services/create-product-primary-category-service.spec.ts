import AppError from '@shared/errors/app-error'
import CreateProductPrimaryCategoryService from '@modules/products/services/create-product-primary-category-service'
import FakeProductPrimaryCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-product-primary-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

interface ISutTypes {
  textFormatter: TextFormatter
  productPrimaryCategoryRepository: FakeProductPrimaryCategoryRepository
  sut: CreateProductPrimaryCategoryService
}

const makeSut = (): ISutTypes => {
  const textFormatter = new TextFormatter()
  const productPrimaryCategoryRepository = new FakeProductPrimaryCategoryRepository()
  const sut = new CreateProductPrimaryCategoryService(productPrimaryCategoryRepository, textFormatter)
  return {
    textFormatter,
    productPrimaryCategoryRepository,
    sut
  }
}

describe('CreateUser', () => {
  it('Should returns error if no category is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: name'))
  })
  it('Should ProductPrimaryCategoryRepository called with correct value', async () => {
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
