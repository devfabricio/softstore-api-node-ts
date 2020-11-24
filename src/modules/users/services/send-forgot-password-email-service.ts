import { inject, injectable } from 'tsyringe'
import path from 'path'
import IUserRepository from '@modules/users/protocols/i-user-repository'
import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'
import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'
import AppError from '@shared/errors/app-error'
import IUserTokenRepository from '@modules/users/protocols/i-user-token-repository'

@injectable()
export default class SendForgotPasswordEmailService {
  constructor (@inject('UserRepository')
  private readonly usersRepository: IUserRepository,
  @inject('EmailValidatorAdapter')
  private readonly emailValidator: IEmailValidatorAdapter,
  @inject('MailSenderAdapter')
  private readonly sendEmail: IMailSenderAdapter,
  @inject('UserTokenRepository')
  private readonly userTokenRepository: IUserTokenRepository) {
  }

  public async execute (body: any): Promise<void> {
    const email = body.email
    if (!email) {
      throw new AppError('Missing param: email')
    }
    const isValid = this.emailValidator.isValid(email)
    if (!isValid) {
      throw new AppError('Invalid E-mail')
    }
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Email not registered')
    }
    const { token } = await this.userTokenRepository.generate(user.id.toString())

    const forgotPasswordTemplate = path.resolve('src/shared/views', 'forgot-password.hbs')

    await this.sendEmail.send({
      to: {
        name: user.name,
        email: user.email
      },
      subject: '[Saboreio] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`
        }
      }
    })
    return Promise.resolve()
  }
}
