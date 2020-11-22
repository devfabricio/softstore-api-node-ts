import { container } from 'tsyringe'
import { UserRepository } from '@modules/users/infra/typeorm/repositories/user-repository'
import IUserRepository from '../../modules/users/protocols/user-repository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
