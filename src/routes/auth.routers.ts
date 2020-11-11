import { Router } from 'express'
import { AuthenticationService } from '../services/authentication-service'

const authRouter = Router()

authRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const authentication = new AuthenticationService()
    const { user, token } = await authentication.execute({ email, password })
    delete user.password
    return res.json({ user, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default authRouter
