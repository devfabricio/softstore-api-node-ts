import { Router } from 'express'
import usersRouter from './users.routers'
import authRouter from './auth.routers'
import productCategoriesRouter from './product-categories.routes'
import passwordRouter from '@shared/main/routes/password.routers'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/password', passwordRouter)
routes.use('/product-category', productCategoriesRouter)

export default routes
