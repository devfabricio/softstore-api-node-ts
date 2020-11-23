import { container } from 'tsyringe'
import { UserRepository } from '@modules/users/infra/typeorm/repositories/user-repository'
import IUserRepository from '../../modules/users/protocols/user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'
import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IBcryptAdapter>('BcryptAdapter', BcryptAdater)
container.registerSingleton<IEmailValidatorAdapter>('EmailValidatorAdapter', EmailValidatorAdapter)
