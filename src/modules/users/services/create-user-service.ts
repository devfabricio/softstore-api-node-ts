import 'reflect-metadata'
import { User } from '../infra/typeorm/entities/user'
import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/app-error'
import IUserRepository from '@modules/users/protocols/user-repository'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'

@injectable()
export class CreateUserService {
  constructor (
    @inject('UserRepository')
    private readonly usersRepository: IUserRepository,
    @inject('BcryptAdapter')
    private readonly bcryptAdapter: IBcryptAdapter,
    @inject('EmailValidatorAdapter')
    private readonly emailValidator: IEmailValidatorAdapter) {}

  public async execute (body: any): Promise<User> {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const isValid = this.emailValidator.isValid(body.email)
    if (!isValid) {
      throw new AppError('Invalid E-mail')
    }
    const { name, email, password } = body
    const checkUsersExists = await this.usersRepository.findByEmail(email)

    if (checkUsersExists) {
      throw new AppError('Email already exists')
    }

    if (body.password.length <= 6) {
      throw new AppError('Invalid password. Password must be longer than 6 characters.')
    }

    const hashedPassword = await this.bcryptAdapter.hash(password)

    return await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
  }
}
