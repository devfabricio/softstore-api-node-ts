import { container } from 'tsyringe'
import { UserRepository } from '@modules/users/infra/typeorm/repositories/user-repository'
import IUserRepository from '@modules/users/protocols/i-user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'
import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'
import UserTokenRepository from '@modules/users/infra/typeorm/repositories/user-token-repository'
import IUserTokenRepository from '@modules/users/protocols/i-user-token-repository'
import MailSenderAdapter from '@shared/infra/adapters/mail-sender-adapter'
import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'
import MailTemplateAdapter from '@shared/infra/adapters/mail-template-adapter'
import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'
import ProductPrimaryCategoryRepository
  from '@modules/products/infra/typeorm/repositories/product-primary-category-repository'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import TextFormatter from '@shared/helpers/text-formatter'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<ProductPrimaryCategoryRepository>('ProductPrimaryCategoryRepository', ProductPrimaryCategoryRepository)
container.registerSingleton<IUserTokenRepository>('UserTokenRepository', UserTokenRepository)
container.registerSingleton<IBcryptAdapter>('BcryptAdapter', BcryptAdater)
container.registerSingleton<IEmailValidatorAdapter>('EmailValidatorAdapter', EmailValidatorAdapter)
container.registerSingleton<IMailTemplateAdapter>('MailTemplateAdapter', MailTemplateAdapter)
container.registerInstance<IMailSenderAdapter>('MailSenderAdapter', container.resolve(MailSenderAdapter))
container.registerSingleton<ITextFormatter>('TextFormatter', TextFormatter)
