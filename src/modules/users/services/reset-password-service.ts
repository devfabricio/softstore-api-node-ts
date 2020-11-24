import { inject, injectable } from 'tsyringe'
import IUserRepository from '@modules/users/protocols/i-user-repository'
import IUserTokenRepository from '@modules/users/protocols/i-user-token-repository'
import AppError from '@shared/errors/app-error'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'

@injectable()
export default class ResetPasswordService {
  constructor (@inject('UserRepository')
  private readonly usersRepository: IUserRepository,
  @inject('BcryptAdapter')
  private readonly bcryptAdapter: IBcryptAdapter,
  @inject('UserTokenRepository')
  private readonly userTokenRepository: IUserTokenRepository) {
  }

  public async execute (body: any): Promise<void> {
    const requiredFields = ['token', 'password']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError('Invalid request to reset password')
      }
    }
    const { token, password } = body
    const userToken = await this.userTokenRepository.findByToken(token)
    if (!userToken) {
      throw new AppError('Invalid request to reset password: token')
    }
    const user = await this.usersRepository.findById(userToken.user_id)
    if (!user) {
      throw new AppError('Invalid request to reset password: user')
    }
    user.password = await this.bcryptAdapter.hash(password)
    await this.usersRepository.save(user)
  }
}
