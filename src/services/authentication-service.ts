import { getRepository } from 'typeorm'
import { User } from '../models/user'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
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

    const userId = user.id.toString()

    const token = sign({}, 'd2efc1f9e9409e902919b3dbe6ccbeaa', {
      subject: userId,
      expiresIn: '30d'
    })

    return { user, token }
  }
}
