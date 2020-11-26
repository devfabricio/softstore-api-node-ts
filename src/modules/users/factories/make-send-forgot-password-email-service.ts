import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import SendForgotPasswordEmailService from '@modules/users/services/send-forgot-password-email-service'
import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'
import UserTokenRepository from '@modules/users/infra/repositories/user-token-repository'
import MailSenderAdapter from '@shared/infra/adapters/mail-sender-adapter'
import MailTemplateAdapter from '@shared/infra/adapters/mail-template-adapter'

export const makeSendForgotPasswordEmailService = (): SendForgotPasswordEmailService => {
  const userRepository = new UserRepository()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const mailTemplateAdapter = new MailTemplateAdapter()
  const mailSenderAdapter = new MailSenderAdapter(mailTemplateAdapter)
  const userTokenRepository = new UserTokenRepository()
  return new SendForgotPasswordEmailService(userRepository, emailValidatorAdapter, mailSenderAdapter, userTokenRepository)
}
