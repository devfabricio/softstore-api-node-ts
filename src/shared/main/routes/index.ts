import { Router } from 'express'
import usersRouter from '@modules/users/routes/users.routers'
import administratorAuthRouter from '@modules/administrators/routes/auth.routers'
import administratorRouter from '@modules/administrators/routes/administrators.routers'
import authRouter from '@modules/users/routes/auth.routers'
import passwordRouter from '@modules/users/routes/password.routers'
import profileRouter from '@modules/users/routes/profile.routers'
import categoryRouter from '@modules/products/routes/category.routes'
import productRouter from '@modules/products/routes/product.routes'
import cartItemRouter from '@modules/cart-items/routes/cart.routes'
import settingsRouter from '@modules/settings/routes/settings.routes'
import messageRouter from '@modules/messages/routes/message.routes'
import messageInboxRouter from '@modules/messages/routes/message-inbox.routes'
import postCategoryRouter from '@modules/posts/routes/post-category.routes'
import postRouter from '@modules/posts/routes/post.routes'
import colorRouter from '@modules/products/routes/color.routes'

const routes = Router()

routes.use('/administrator', administratorAuthRouter)
routes.use('/administrator', administratorRouter)
routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/profile', profileRouter)
routes.use('/category', categoryRouter)
routes.use('/product', productRouter)
routes.use('/color', colorRouter)
routes.use('/post-category', postCategoryRouter)
routes.use('/post', postRouter)
routes.use('/message', messageRouter)
routes.use('/message-inbox', messageInboxRouter)
routes.use('/password', passwordRouter)
routes.use('/options', settingsRouter)
routes.use('/cart-item', cartItemRouter)

export default routes
