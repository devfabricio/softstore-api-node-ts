import { Router } from 'express'
import usersRouter from './users.routers'
import authRouter from './auth.routers'

const routes = Router()

routes.use('/user', usersRouter)
routes.use('/auth', authRouter)

export default routes
