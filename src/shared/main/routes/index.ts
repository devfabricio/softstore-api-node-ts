import { Router } from 'express'
import usersRouter from '@modules/users/routes/users.routers'
import authRouter from '@modules/users/routes/auth.routers'
import passwordRouter from '@modules/users/routes/password.routers'
import profileRouter from '@modules/users/routes/profile.routers'
import productPrimaryCategoryRouter from '@modules/products/routes/product-primary-categories.routes'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/profile', profileRouter)
routes.use('/product', productPrimaryCategoryRouter)
routes.use('/password', passwordRouter)

export default routes
