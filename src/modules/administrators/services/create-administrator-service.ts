import 'reflect-metadata'
import AppError from '@shared/errors/app-error'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'
import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'
import { IResponseAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export class CreateAdministratorService {
  constructor (
    private readonly administratorRepository: IAdministratorRepository,
    private readonly bcryptAdapter: IBcryptAdapter,
    private readonly emailValidator: IEmailValidatorAdapter) {}

  public async execute (body: any): Promise<IResponseAdministratorModel> {
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
    const checkUsersExists = await this.administratorRepository.findByEmail(email)

    if (checkUsersExists) {
      throw new AppError('Email already exists')
    }

    if (body.password.length <= 6) {
      throw new AppError('Invalid password. Password must be longer than 6 characters.')
    }

    const hashedPassword = await this.bcryptAdapter.hash(password)

    return await this.administratorRepository.create({
      name,
      email,
      password: hashedPassword,
      role: 0
    })
  }
}
