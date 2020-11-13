import { Router } from 'express'
import { CreateUserService } from '../services/create-user-service'
import { getRepository } from 'typeorm'
import { User } from '../models/user'
import { isAuth } from '../middlewares/is-auth'

const usersRouter = Router()

usersRouter.get('/', isAuth, async (req, res) => {
  const userRepository = getRepository(User)
  const users = await userRepository.find()
  res.status(200).json(users)
})

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const createUser = new CreateUserService()
    const user = await createUser.execute({ name, email, password })
    delete user.password
    return res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default usersRouter
