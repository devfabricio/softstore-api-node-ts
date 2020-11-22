import { CreateUserService } from '@modules/users/services/create-user-service'
import AppError from '@shared/errors/app-error'
import { FakeUserRepository } from '@modules/users/infra/fakes/repositories/fake-user-repository'

const makeSut = (): CreateUserService => {
  const userRepository = new FakeUserRepository()
  return new CreateUserService(userRepository)
}

describe('CreateUser', () => {
  it('Should returns error if no name is provided', async () => {
    const sut = makeSut()
    await expect(sut.execute({
      email: 'any_email@email.com.br',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no email is provided', async () => {
    const sut = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no password is provided', async () => {
    const sut = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br'
    })).rejects.toBeInstanceOf(AppError)
  })
})
