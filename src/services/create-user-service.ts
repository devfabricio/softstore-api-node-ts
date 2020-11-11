import { User } from '../models/user'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Request {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  public async execute ({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User)

    const checkUsersExists = await userRepository.findOne({
      where: { email }
    })

    if (checkUsersExists) {
      throw new Error('Email already exists')
    }

    const salt = 12
    const hashedPassword = await hash(password, salt)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword
    })

    return await userRepository.save(user)
  }
}
