import { Router } from 'express'
import usersRouter from './users.routers'
import authRouter from './auth.routers'
import productCategoriesRouter from './product-categories.routes'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/product-category', productCategoriesRouter)

export default routes
