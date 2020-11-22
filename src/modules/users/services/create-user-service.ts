import 'reflect-metadata'
import { User } from '../infra/typeorm/entities/user'
import { hash } from 'bcryptjs'
import AppError from '@shared/errors/app-error'
import IUserRepository from '@modules/users/protocols/user-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserService {
  constructor (
    @inject('UserRepository')
    private readonly usersRepository: IUserRepository) {}

  public async execute (body: any): Promise<User> {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { name, email, password } = body
    const checkUsersExists = await this.usersRepository.findByEmail(email)

    if (checkUsersExists) {
      throw new AppError('Email already exists')
    }

    const salt = 12
    const hashedPassword = await hash(password, salt)

    return await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
  }
}
