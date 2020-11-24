import { Router } from 'express'
import usersRouter from '@modules/users/routes/users.routers'
import authRouter from '@modules/users/routes/auth.routers'
import productCategoriesRouter from './product-categories.routes'
import passwordRouter from '@modules/users/routes/password.routers'
import profileRouter from '@modules/users/routes/profile.routers'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/profile', profileRouter)
routes.use('/password', passwordRouter)
routes.use('/product-category', productCategoriesRouter)

export default routes
