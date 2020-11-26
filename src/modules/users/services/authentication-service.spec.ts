import { FakeUserRepository } from '@modules/users/infra/repositories/fakes/fake-user-repository'
import AppError from '@shared/errors/app-error'
import { AuthenticationService } from '@modules/users/services/authentication-service'
import { CreateUserService } from '@modules/users/services/create-user-service'
import FakeBcryptAdapter from '@shared/infra/adapters/fakes/fake-bcrypt-adapter'
import FakeEmailValidatorAdapter from '@shared/infra/adapters/fakes/fake-email-validator-adapter'

interface ISutTypes {
  sut: AuthenticationService
  createUserService: CreateUserService
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const bcryptAdapter = new FakeBcryptAdapter()
  const emailValidator = new FakeEmailValidatorAdapter()
  const sut = new AuthenticationService(userRepository, bcryptAdapter)
  const createUserService: CreateUserService = new CreateUserService(userRepository, bcryptAdapter, emailValidator)
  return {
    sut,
    createUserService
  }
}

describe('AuthenticationService', () => {
  test('Should returns error if no email is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  test('Should returns error if no password is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      email: 'any_email@email.com.br'
    })).rejects.toBeInstanceOf(AppError)
  })
  test('Should returns error if no user found with email provided', async () => {
    const { sut, createUserService } = makeSut()
    await createUserService.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute({
      email: 'another_email@email.com.br',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  test('Should returns error if incorrect password is provided', async () => {
    const { sut, createUserService } = makeSut()
    await createUserService.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute({
      email: 'any_email@email.com.br',
      password: 'another_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns a user and token object if register successful', async () => {
    const { sut, createUserService } = makeSut()

    const user = await createUserService.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })

    const response = await sut.execute({
      email: 'any_email@email.com.br',
      password: 'any_password'
    })

    await expect(response).toHaveProperty('token')
    await expect(response.user).toEqual(user)
  })
})
