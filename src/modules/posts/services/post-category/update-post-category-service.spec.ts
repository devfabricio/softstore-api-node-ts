import AppError from '@shared/errors/app-error'
import TextFormatter from '@shared/helpers/text-formatter'
import UpdatePostCategoryService from '@modules/posts/services/post-category/update-post-category-service'
import FakePostCategoryRepository from '@modules/posts/infra/repositories/fakes/fake-post-category-repository'

interface ISutTypes {
  textFormatter: TextFormatter
  postCategoryRepository: FakePostCategoryRepository
  sut: UpdatePostCategoryService
}

const makeSut = (): ISutTypes => {
  const textFormatter = new TextFormatter()
  const postCategoryRepository = new FakePostCategoryRepository()
  const sut = new UpdatePostCategoryService(postCategoryRepository, textFormatter)
  return {
    textFormatter,
    postCategoryRepository,
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
    const { sut, textFormatter, postCategoryRepository } = makeSut()
    const trimSpy = jest.spyOn(textFormatter, 'trim')
    await postCategoryRepository.create('category_name','category_name')
    const name = 'other_category_name'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(trimSpy).toHaveBeenCalledWith(name)
  })
  it('Should calls TextFormatter.converterSlug with correct value if name is provided', async () => {
    const { sut, textFormatter, postCategoryRepository } = makeSut()
    const slugConverterSpy = jest.spyOn(textFormatter, 'slugConverter')
    await postCategoryRepository.create('category_name','category_name')
    const name = 'other_category_name'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(slugConverterSpy).toHaveBeenCalledWith(name)
  })
  it('Should CategoryRepository called with correct value', async () => {
    const { sut, postCategoryRepository } = makeSut()
    const createSpy = jest.spyOn(postCategoryRepository, 'save')
    const category = await postCategoryRepository.create('any_category', 'any_category')
    const name = 'any_category'
    await sut.execute({ _id: 'any_category_id', name })
    await expect(createSpy).toHaveBeenCalledWith(category)
  })
  it('Should returns ProductPrimaryCategory if create successfull', async () => {
    const { sut, postCategoryRepository } = makeSut()
    await postCategoryRepository.create('category_name','category_name')
    const response = await sut.execute({ _id: 'any_category_id', name: 'category_name' })
    await expect(response).toHaveProperty('_id')
    await expect(response).toHaveProperty('name')
  })
})
