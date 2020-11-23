import { CreateUserService } from '@modules/users/services/create-user-service'
import AppError from '@shared/errors/app-error'
import { FakeUserRepository } from '@modules/users/infra/fakes/repositories/fake-user-repository'
import { User } from '@modules/users/infra/typeorm/entities/user'
import FakeBcryptAdapter from '@shared/infra/adapters/fakes/fake-bcrypt-adapter'
import FakeEmailValidatorAdapter from '@shared/infra/adapters/fakes/fake-email-validator-adapter'

interface ISutTypes {
  sut: CreateUserService
  emailValidator: FakeEmailValidatorAdapter
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const bcryptAdapter = new FakeBcryptAdapter()
  const emailValidator = new FakeEmailValidatorAdapter()
  const sut = new CreateUserService(userRepository, bcryptAdapter, emailValidator)
  return {
    sut,
    emailValidator
  }
}

describe('CreateUser', () => {
  it('Should returns error if no name is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      email: 'any_email@email.com.br',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no email is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no password is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if invalid email is provided', async () => {
    const { sut, emailValidator } = makeSut()
    jest.spyOn(emailValidator, 'isValid').mockReturnValueOnce(false)
    await expect(sut.execute({
      name: 'any_name',
      email: 'invalid_email',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if e-mail already exists', async () => {
    const { sut } = makeSut()
    await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if password is less than 6 characters', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns a user object if register successful', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })).resolves.toBeInstanceOf(User)
  })
})
