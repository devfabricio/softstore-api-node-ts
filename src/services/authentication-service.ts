import { getRepository } from 'typeorm'
import { User } from '../models/user'
import { compare } from 'bcryptjs'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
}

export class AuthenticationService {
  async execute ({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({
      where: { email }
    })
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      throw new Error('Invalid credentials')
    }

    return { user }
  }
}
