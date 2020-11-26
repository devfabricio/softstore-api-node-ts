import FakeEmailValidatorAdapter from '@shared/infra/adapters/fakes/fake-email-validator-adapter'
import { FakeUserRepository } from '@modules/users/infra/repositories/fakes/fake-user-repository'
import AppError from '@shared/errors/app-error'
import FakeMailSenderAdapter from '@shared/infra/adapters/fakes/fake-mail-sender-adapter'
import SendForgotPasswordEmailService from '@modules/users/services/send-forgot-password-email-service'
import FakeUserTokenRepository from '@modules/users/infra/repositories/fakes/fake-user-token-repository'

interface ISutTypes {
  sut: SendForgotPasswordEmailService
  userTokenRepository: FakeUserTokenRepository
  userRepository: FakeUserRepository
  emailValidator: FakeEmailValidatorAdapter
  mailSender: FakeMailSenderAdapter
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const mailSender = new FakeMailSenderAdapter()
  const emailValidator = new FakeEmailValidatorAdapter()
  const userTokenRepository = new FakeUserTokenRepository()
  const sut = new SendForgotPasswordEmailService(userRepository, emailValidator, mailSender, userTokenRepository)
  return {
    sut,
    userTokenRepository,
    userRepository,
    emailValidator,
    mailSender
  }
}

describe('SendForgotPasswordEmailService', () => {
  it('Should returns error if no email is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: email'))
  })
  it('Should calls EmailValidator with correct e-mail', async () => {
    const { sut, userRepository, emailValidator } = makeSut()
    const emailValidatorSpy = jest.spyOn(emailValidator, 'isValid')
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    })
    await sut.execute({
      email: 'any_email@email.com'
    })
    expect(emailValidatorSpy).toHaveBeenCalledWith('any_email@email.com')
  })
  it('Should returns error if invalid email is provided', async () => {
    const { sut, emailValidator } = makeSut()
    jest.spyOn(emailValidator, 'isValid').mockReturnValueOnce(false)
    await expect(sut.execute({
      email: 'any_email@email.com'
    })).rejects.toEqual(new AppError('Invalid E-mail'))
  })
  it('Should returns error if cannot find a user with the email', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({
      email: 'another_email@email.com'
    })).rejects.toEqual(new AppError('Email not registered'))
  })
  it('Should calls UserTokenRepository if user was found', async () => {
    const { sut, userRepository, userTokenRepository } = makeSut()
    const userTokenRepositorySpy = jest.spyOn(userTokenRepository, 'generate')
    const user = await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    })
    await sut.execute({
      email: 'any_email@email.com'
    })
    expect(userTokenRepositorySpy).toHaveBeenCalledWith(user._id)
  })
  it('Should calls EmailSender if success', async () => {
    const { sut, userRepository, mailSender } = makeSut()
    const mailSenderSpy = jest.spyOn(mailSender, 'send')
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    })
    await sut.execute({
      email: 'any_email@email.com'
    })
    expect(mailSenderSpy).toHaveBeenCalled()
  })
})
