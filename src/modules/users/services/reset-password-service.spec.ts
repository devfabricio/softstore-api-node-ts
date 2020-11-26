import { FakeUserRepository } from '@modules/users/infra/repositories/fakes/fake-user-repository'
import AppError from '@shared/errors/app-error'
import FakeUserTokenRepository from '@modules/users/infra/repositories/fakes/fake-user-token-repository'
import ResetPasswordService from '@modules/users/services/reset-password-service'
import FakeBcryptAdapter from '@shared/infra/adapters/fakes/fake-bcrypt-adapter'

interface ISutTypes {
  sut: ResetPasswordService
  userTokenRepository: FakeUserTokenRepository
  userRepository: FakeUserRepository
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const userTokenRepository = new FakeUserTokenRepository()
  const bcryptAdapter = new FakeBcryptAdapter()
  const sut = new ResetPasswordService(userRepository, bcryptAdapter, userTokenRepository)
  return {
    sut,
    userTokenRepository,
    userRepository
  }
}

const createUserBody = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
}

describe('SendForgotPasswordEmailService', () => {
  it('Should returns error if no token is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no password is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      token: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should calls UserTokenRepository with correct values', async () => {
    const { sut, userRepository, userTokenRepository } = makeSut()
    const findByTokenSpy = jest.spyOn(userTokenRepository, 'findByToken')
    const user = await userRepository.create(createUserBody)
    const userToken = await userTokenRepository.generate(user._id)
    await sut.execute({
      token: userToken.token,
      password: 'any_password'
    })
    expect(findByTokenSpy).toHaveBeenCalledWith(userToken.token)
  })
  it('Should returns error if no userToken was found with token provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      token: 'any_token',
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
  it('Should returns error if no user was found', async () => {
    const { sut, userTokenRepository } = makeSut()
    const userToken = await userTokenRepository.generate('invalid_user_id')
    await expect(sut.execute({
      token: userToken.token,
      password: 'any_password'
    })).rejects.toBeInstanceOf(AppError)
  })
})
