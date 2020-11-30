import ListProductsService from '@modules/products/services/list-products-service'
import FakeProductRepository from '@modules/products/infra/repositories/fakes/fake-product-repository'

interface ISutTypes {
  productRepository: FakeProductRepository
  sut: ListProductsService
}

const makeSut = (): ISutTypes => {
  const productRepository = new FakeProductRepository()
  const sut = new ListProductsService(productRepository)
  return {
    productRepository,
    sut
  }
}

describe('ListProductsService', () => {
  it('Should call find method in ProductRepository', async () => {
    const { sut, productRepository } = makeSut()
    const onFindSpy = jest.spyOn(productRepository, 'find')
    await sut.execute()
    expect(onFindSpy).toHaveBeenCalled()
  })
})
