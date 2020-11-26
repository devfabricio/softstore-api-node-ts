import AppError from '@shared/errors/app-error'
import TextFormatter from '@shared/helpers/text-formatter'
import FakeProductRepository from '@modules/products/infra/repositories/fakes/fake-product-repository'
import CreateProductService from '@modules/products/services/create-product-service'
import FakeProductPrimaryCategoryRepository
  from '@modules/products/infra/repositories/fakes/fake-product-primary-category-repository'

interface ISutTypes {
  textFormatter: TextFormatter
  productPrimaryCategoryRepository: FakeProductPrimaryCategoryRepository
  productRepository: FakeProductRepository
  sut: CreateProductService
}

const makeSut = (): ISutTypes => {
  const textFormatter = new TextFormatter()
  const productRepository = new FakeProductRepository()
  const productPrimaryCategoryRepository = new FakeProductPrimaryCategoryRepository()
  const sut = new CreateProductService(productRepository, productPrimaryCategoryRepository, textFormatter)
  return {
    textFormatter,
    productPrimaryCategoryRepository,
    productRepository,
    sut
  }
}

describe('CreateProductService', () => {
  it('Should returns error if no name is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      description: 'any_description',
      thumbImg: 'any_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    })).rejects.toEqual(new AppError('Missing param: name'))
  })
  it('Should returns error if no description is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      thumbImg: 'any_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    })).rejects.toEqual(new AppError('Missing param: description'))
  })
  it('Should returns error if no thumbImg is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      description: 'any_description',
      productPrimaryCategory: 'any_category_id',
      price: 1
    })).rejects.toEqual(new AppError('Missing param: thumbImg'))
  })
  it('Should returns error if no productPrimaryCategoryID is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      description: 'any_description',
      thumbImg: 'any_thumb',
      price: 1
    })).rejects.toEqual(new AppError('Missing param: productPrimaryCategory'))
  })
  it('Should returns error if no price is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      description: 'any_description',
      thumbImg: 'any_thumb',
      productPrimaryCategory: 'any_category_id'
    })).rejects.toEqual(new AppError('Missing param: price'))
  })
  it('Should calls TextFormatter.trim with correct value', async () => {
    const { sut, textFormatter, productPrimaryCategoryRepository } = makeSut()
    const trimSpy = jest.spyOn(textFormatter, 'trim')
    const body = {
      name: ' any_name ',
      description: 'any_description',
      thumbImg: 'any_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    }
    await productPrimaryCategoryRepository.create('any_category', 'any_category')
    await sut.execute(body)
    await expect(trimSpy).toHaveBeenCalledWith(body.name)
  })
  it('Should return an error if there is a product with the same name', async () => {
    const { sut, productRepository } = makeSut()
    await productRepository.create({
      name: 'any_name',
      description: 'any_description',
      thumbImg: 'any_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1,
      slug: 'any_name'
    })
    await expect(sut.execute({
      name: 'any_name',
      description: 'other_description',
      thumbImg: 'other_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    })).rejects.toEqual(new AppError('A product with this name already exists'))
  })
  it('Should called ProductRepository with slug field', async () => {
    const { sut, productRepository, productPrimaryCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(productRepository, 'create')
    const body: any = {
      name: 'any_name',
      description: 'other_description',
      thumbImg: 'other_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    }
    await productPrimaryCategoryRepository.create('any_category', 'any_category')
    await sut.execute(body)
    body.slug = 'any_name'
    expect(createSpy).toBeCalledWith(body)
  })
  it('Should called ProductRepository with oldPrice field if provided', async () => {
    const { sut, productRepository, productPrimaryCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(productRepository, 'create')
    const body: any = {
      name: 'any_name',
      description: 'other_description',
      thumbImg: 'other_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1,
      oldPrice: 2
    }
    await productPrimaryCategoryRepository.create('any_category', 'any_category')
    await sut.execute(body)
    body.slug = 'any_name'
    expect(createSpy).toBeCalledWith(body)
  })
  it('Should called ProductRepository with productSecundaryCategoryID field if provided', async () => {
    const { sut, productRepository, productPrimaryCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(productRepository, 'create')
    const body: any = {
      name: 'any_name',
      description: 'other_description',
      thumbImg: 'other_thumb',
      productPrimaryCategory: 'any_category_id',
      productSecundaryCategory: 'other_category_id',
      price: 1
    }
    await productPrimaryCategoryRepository.create('any_category', 'any_category')
    await sut.execute(body)
    body.slug = 'any_name'
    expect(createSpy).toBeCalledWith(body)
  })
  it('Should returns a product object if register successful', async () => {
    const { sut, productPrimaryCategoryRepository } = makeSut()
    await productPrimaryCategoryRepository.create('any_category', 'any_category')
    const product = await sut.execute({
      name: 'any_name',
      description: 'other_description',
      thumbImg: 'other_thumb',
      productPrimaryCategory: 'any_category_id',
      price: 1
    })
    expect(product).toHaveProperty('_id')
  })
})
